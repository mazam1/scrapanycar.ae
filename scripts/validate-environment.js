#!/usr/bin/env node

/**
 * Environment Validation Script
 * Validates that all required dependencies and tools are properly installed
 * and configured for the Next.js application.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class EnvironmentValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.projectRoot = process.cwd();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = {
      info: '✓',
      warn: '⚠',
      error: '✗'
    }[type];
    
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async validateNodeVersion() {
    try {
      const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
      const majorVersion = parseInt(nodeVersion.replace('v', '').split('.')[0]);
      
      if (majorVersion < 18) {
        this.errors.push(`Node.js version ${nodeVersion} is too old. Minimum required: v18.0.0`);
        return false;
      }
      
      this.log(`Node.js version: ${nodeVersion}`);
      return true;
    } catch (error) {
      this.errors.push('Node.js is not installed or not accessible');
      return false;
    }
  }

  async validateNpmVersion() {
    try {
      const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
      this.log(`npm version: ${npmVersion}`);
      return true;
    } catch (error) {
      this.errors.push('npm is not installed or not accessible');
      return false;
    }
  }

  async validatePackageJson() {
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    
    if (!fs.existsSync(packageJsonPath)) {
      this.errors.push('package.json not found in project root');
      return false;
    }

    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Check for Next.js dependency
      const nextVersion = packageJson.dependencies?.next || packageJson.devDependencies?.next;
      if (!nextVersion) {
        this.errors.push('Next.js dependency not found in package.json');
        return false;
      }
      
      this.log(`Next.js version in package.json: ${nextVersion}`);
      
      // Check for required scripts
      const requiredScripts = ['dev', 'build', 'start'];
      const missingScripts = requiredScripts.filter(script => !packageJson.scripts?.[script]);
      
      if (missingScripts.length > 0) {
        this.warnings.push(`Missing recommended scripts: ${missingScripts.join(', ')}`);
      }
      
      return true;
    } catch (error) {
      this.errors.push(`Invalid package.json: ${error.message}`);
      return false;
    }
  }

  async validateNodeModules() {
    const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
    
    if (!fs.existsSync(nodeModulesPath)) {
      this.errors.push('node_modules directory not found. Run "npm install" to install dependencies.');
      return false;
    }

    // Check if Next.js is installed
    const nextPath = path.join(nodeModulesPath, 'next');
    if (!fs.existsSync(nextPath)) {
      this.errors.push('Next.js not found in node_modules. Run "npm install" to install dependencies.');
      return false;
    }

    this.log('node_modules directory exists with Next.js installed');
    return true;
  }

  async validateNextJsCommand() {
    try {
      // Test if Next.js CLI is accessible
      execSync('npx next --version', { encoding: 'utf8', stdio: 'pipe' });
      this.log('Next.js CLI is accessible');
      return true;
    } catch (error) {
      this.errors.push('Next.js CLI is not accessible. Try running "npm install" or "npx next --version"');
      return false;
    }
  }

  async validateProjectStructure() {
    const requiredFiles = [
      'next.config.js',
      'tsconfig.json',
      'tailwind.config.js'
    ];

    const requiredDirs = [
      'app',
      'components',
      'public'
    ];

    for (const file of requiredFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (!fs.existsSync(filePath)) {
        this.warnings.push(`Recommended file missing: ${file}`);
      }
    }

    for (const dir of requiredDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(dirPath)) {
        this.warnings.push(`Recommended directory missing: ${dir}`);
      }
    }

    return true;
  }

  async runValidation() {
    this.log('Starting environment validation...', 'info');
    
    const validations = [
      this.validateNodeVersion(),
      this.validateNpmVersion(),
      this.validatePackageJson(),
      this.validateNodeModules(),
      this.validateNextJsCommand(),
      this.validateProjectStructure()
    ];

    await Promise.all(validations);

    // Report results
    console.log('\n' + '='.repeat(50));
    console.log('VALIDATION RESULTS');
    console.log('='.repeat(50));

    if (this.errors.length === 0) {
      this.log('✅ All validations passed successfully!', 'info');
    } else {
      this.log(`❌ Found ${this.errors.length} error(s):`, 'error');
      this.errors.forEach(error => this.log(`  • ${error}`, 'error'));
    }

    if (this.warnings.length > 0) {
      this.log(`⚠️  Found ${this.warnings.length} warning(s):`, 'warn');
      this.warnings.forEach(warning => this.log(`  • ${warning}`, 'warn'));
    }

    console.log('='.repeat(50));

    // Exit with appropriate code
    process.exit(this.errors.length > 0 ? 1 : 0);
  }
}

// Run validation if this script is executed directly
if (require.main === module) {
  const validator = new EnvironmentValidator();
  validator.runValidation().catch(error => {
    console.error('Validation failed:', error);
    process.exit(1);
  });
}

module.exports = EnvironmentValidator;