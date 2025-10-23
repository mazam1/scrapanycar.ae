# Troubleshooting Guide

This document provides solutions for common issues encountered in the Next.js application development environment.

## Common Issues and Solutions

### 1. 'next' is not recognized as an internal or external command

**Error Message:**
```
'next' is not recognized as an internal or external command, operable program or batch file.
```

**Root Cause:**
This error occurs when Next.js is not properly installed or the `node_modules` directory is missing.

**Solution Steps:**

1. **Verify Node.js and npm installation:**
   ```bash
   node --version
   npm --version
   ```
   - Ensure Node.js version is 18.0.0 or higher
   - If not installed, download from [nodejs.org](https://nodejs.org/)

2. **Check package.json exists and contains Next.js dependency:**
   ```bash
   cat package.json | grep next
   ```
   - Should show Next.js in dependencies

3. **Install dependencies:**
   ```bash
   npm install
   ```
   - This creates the `node_modules` directory and installs all dependencies

4. **Verify Next.js installation:**
   ```bash
   npx next --version
   ```
   - Should display the Next.js version

5. **Test Next.js commands:**
   ```bash
   npm run build
   npm run dev
   ```

### 2. Environment Validation

**Quick Validation:**
Run the built-in environment validation script:
```bash
npm run validate
```

This script checks:
- Node.js and npm versions
- package.json configuration
- node_modules installation
- Next.js CLI accessibility
- Project structure

### 3. Missing Dependencies

**Symptoms:**
- Build failures
- Import errors
- Missing modules

**Solution:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Or force reinstall
npm ci
```

### 4. Port Already in Use

**Error Message:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:**
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

### 5. TypeScript Errors

**Common Issues:**
- Missing type definitions
- Configuration errors

**Solutions:**
```bash
# Install missing types
npm install --save-dev @types/node @types/react @types/react-dom

# Regenerate TypeScript cache
rm -rf .next
npm run build
```

### 6. Build Failures

**Steps to Debug:**
1. Clear Next.js cache:
   ```bash
   rm -rf .next
   ```

2. Clean install dependencies:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Check for syntax errors:
   ```bash
   npm run lint
   ```

4. Build with verbose output:
   ```bash
   npm run build -- --debug
   ```

## Prevention Best Practices

### 1. Regular Environment Validation
Run `npm run validate` before starting development sessions.

### 2. Keep Dependencies Updated
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update
```

### 3. Use Consistent Node.js Versions
Consider using a Node.js version manager like `nvm`:
```bash
# Install specific Node.js version
nvm install 22.20.0
nvm use 22.20.0
```

### 4. Backup Working Configurations
- Commit `package-lock.json` to version control
- Document working Node.js/npm versions
- Keep environment setup scripts updated

## Emergency Recovery

If all else fails, follow these steps for a complete reset:

1. **Backup your code changes**
2. **Complete clean install:**
   ```bash
   rm -rf node_modules package-lock.json .next
   npm cache clean --force
   npm install
   ```
3. **Verify installation:**
   ```bash
   npm run validate
   npm run build
   npm run dev
   ```

## Getting Help

If issues persist:
1. Run `npm run validate` and share the output
2. Check the console for specific error messages
3. Verify your environment matches the requirements in `package.json`
4. Consider creating a minimal reproduction case

## Environment Requirements

- **Node.js:** v18.0.0 or higher (recommended: v22.20.0)
- **npm:** v8.0.0 or higher (recommended: v10.9.3)
- **Next.js:** ^15.1.6
- **Operating System:** Windows, macOS, or Linux

## Useful Commands

```bash
# Environment validation
npm run validate

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint

# Check package versions
npm list next react react-dom

# Clear all caches
rm -rf .next node_modules package-lock.json && npm install
```