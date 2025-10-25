"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface FormData {
  // Personal Information
  name: string
  email: string
  phone: string
  city: string
  
  // Vehicle Information
  make: string
  model: string
  year: string
  condition: string
  
  // Additional Details
  color: string
  mileage: string
  features: string[]
}

const carMakes = [
  "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", 
  "Audi", "Volkswagen", "Hyundai", "Kia", "Mazda", "Subaru", "Lexus", "Acura"
]

const carModels: { [key: string]: string[] } = {
  "Toyota": ["Camry", "Corolla", "RAV4", "Highlander", "Prius", "Tacoma", "Tundra"],
  "Honda": ["Civic", "Accord", "CR-V", "Pilot", "Fit", "Ridgeline", "Passport"],
  "Ford": ["F-150", "Escape", "Explorer", "Mustang", "Focus", "Fusion", "Edge"],
  "Chevrolet": ["Silverado", "Equinox", "Malibu", "Traverse", "Camaro", "Cruze", "Tahoe"],
  "Nissan": ["Altima", "Sentra", "Rogue", "Pathfinder", "Frontier", "Titan", "Murano"],
  "BMW": ["3 Series", "5 Series", "X3", "X5", "7 Series", "X1", "4 Series"],
  "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "A-Class", "CLA"],
  "Audi": ["A4", "A6", "Q5", "Q7", "A3", "Q3", "A8"],
  "Volkswagen": ["Jetta", "Passat", "Tiguan", "Atlas", "Golf", "Beetle", "Arteon"],
  "Hyundai": ["Elantra", "Sonata", "Tucson", "Santa Fe", "Accent", "Palisade", "Kona"],
  "Kia": ["Forte", "Optima", "Sorento", "Sportage", "Rio", "Telluride", "Soul"],
  "Mazda": ["Mazda3", "Mazda6", "CX-5", "CX-9", "MX-5 Miata", "CX-3", "CX-30"],
  "Subaru": ["Outback", "Forester", "Impreza", "Legacy", "Crosstrek", "Ascent", "WRX"],
  "Lexus": ["ES", "RX", "NX", "GX", "LS", "IS", "LX"],
  "Acura": ["TLX", "MDX", "RDX", "ILX", "NSX", "TL", "TSX"]
}

const cities = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Al Ain",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain"
]

const conditions = ["Excellent", "Good", "Fair", "Poor"]

const colors = [
  "White", "Black", "Silver", "Gray", "Red", "Blue", "Brown", "Green", 
  "Gold", "Orange", "Yellow", "Purple", "Other"
]

const features = ["Leather Seats", "Sunroof", "Alloy Wheels"]

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 30 }, (_, i) => (currentYear - i).toString())

export function FormSection() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    make: "",
    model: "",
    year: "",
    condition: "",
    color: "",
    mileage: "",
    features: []
  })

  const [errors, setErrors] = React.useState<Partial<FormData>>({})
  const [availableModels, setAvailableModels] = React.useState<string[]>([])

  // Highlight state for name field and ref for focusing
  const [forceNameHighlight, setForceNameHighlight] = React.useState(false)
  const nameInputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    const handler = () => {
      setForceNameHighlight(true)
      nameInputRef.current?.focus()
    }
    window.addEventListener('highlight-name', handler)
    return () => window.removeEventListener('highlight-name', handler)
  }, [])

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }

    // Handle make selection to update available models
    if (field === "make") {
      setAvailableModels(carModels[value] || [])
      setFormData(prev => ({ ...prev, model: "" })) // Reset model when make changes
    }
  }

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      features: checked 
        ? [...prev.features, feature]
        : prev.features.filter(f => f !== feature)
    }))
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    // Personal Information validation
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[\+]?[1-9][\d]{6,14}$/.test(formData.phone.replace(/\s|\(|\)|-/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }
    if (!formData.city) newErrors.city = "City is required"

    // Vehicle Information validation
    if (!formData.make) newErrors.make = "Make is required"
    if (!formData.model) newErrors.model = "Model is required"
    if (!formData.year) newErrors.year = "Year is required"
    if (!formData.condition) newErrors.condition = "Condition is required"

    // Additional Details validation
    if (!formData.color) newErrors.color = "Color is required"
    if (!formData.mileage.trim()) {
      newErrors.mileage = "Mileage is required"
    } else if (isNaN(Number(formData.mileage)) || Number(formData.mileage) < 0) {
      newErrors.mileage = "Please enter a valid mileage"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log("Form submitted:", formData)
      // Here you would typically send the data to your backend
      alert("Thank you! We'll contact you soon with your free valuation.")
    }
  }

  return (
    <section id="valuation-form" className="py-16 bg-gradient-to-br from-background to-muted/20 relative overflow-hidden transition-colors duration-300 scroll-mt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--ring)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 transition-colors duration-300">
            Get Your Free Car Valuation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto transition-colors duration-300">
            Fill out the form below for an instant quote and free inspection
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-5xl mx-auto bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-border/50 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Personal Information Section */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 border-b-2 border-brand-gold pb-2 transition-colors duration-300">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                   <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${forceNameHighlight ? "text-red-500" : "text-foreground"}`}>
                     Enter your name
                   </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    ref={nameInputRef}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300 bg-background text-foreground ${
                      errors.name || forceNameHighlight ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                    Enter your email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300 bg-background text-foreground ${
                      errors.email ? "border-red-500" : "border-border"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                    Enter your phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300 bg-background text-foreground ${
                      errors.phone ? "border-red-500" : "border-border"
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                    Select city
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300 bg-background text-foreground ${
                      errors.city ? "border-red-500" : "border-border"
                    }`}
                  >
                    <option value="">Choose your city</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>
              </div>
            </div>

            {/* Vehicle Information Section */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 border-b-2 border-brand-gold pb-2 transition-colors duration-300">
                Vehicle Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                    Select make
                  </label>
                  <select
                    value={formData.make}
                    onChange={(e) => handleInputChange("make", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300 bg-background text-foreground ${
                      errors.make ? "border-red-500" : "border-border"
                    }`}
                  >
                    <option value="">Choose make</option>
                    {carMakes.map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                  {errors.make && <p className="text-red-500 text-xs mt-1">{errors.make}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                    Select model
                  </label>
                  <select
                    value={formData.model}
                    onChange={(e) => handleInputChange("model", e.target.value)}
                    disabled={!formData.make}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300 bg-background text-foreground ${
                      errors.model ? "border-red-500" : "border-border"
                    } ${!formData.make ? "bg-muted cursor-not-allowed" : ""}`}
                  >
                    <option value="">Choose model</option>
                    {availableModels.map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                  {errors.model && <p className="text-red-500 text-xs mt-1">{errors.model}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                    Enter your phone number
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => handleInputChange("year", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300 bg-background text-foreground ${
                      errors.year ? "border-red-500" : "border-border"
                    }`}
                  >
                    <option value="">Choose year</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                    Select condition
                  </label>
                  <select
                    value={formData.condition}
                    onChange={(e) => handleInputChange("condition", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300 bg-background text-foreground ${
                      errors.condition ? "border-red-500" : "border-border"
                    }`}
                  >
                    <option value="">Choose condition</option>
                    {conditions.map(condition => (
                      <option key={condition} value={condition}>{condition}</option>
                    ))}
                  </select>
                  {errors.condition && <p className="text-red-500 text-xs mt-1">{errors.condition}</p>}
                </div>
              </div>
            </div>

            {/* Additional Details Section */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 border-b-2 border-brand-gold pb-2 transition-colors duration-300">
                Additional Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                    Choose color
                  </label>
                  <select
                    value={formData.color}
                    onChange={(e) => handleInputChange("color", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300 bg-background text-foreground ${
                      errors.color ? "border-red-500" : "border-border"
                    }`}
                  >
                    <option value="">Choose color</option>
                    {colors.map(color => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                  {errors.color && <p className="text-red-500 text-xs mt-1">{errors.color}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                    Car mileage (miles)
                  </label>
                  <input
                    type="number"
                    value={formData.mileage}
                    onChange={(e) => handleInputChange("mileage", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300 bg-background text-foreground ${
                      errors.mileage ? "border-red-500" : "border-border"
                    }`}
                    placeholder="e.g., 50000"
                    min="0"
                  />
                  {errors.mileage && <p className="text-red-500 text-xs mt-1">{errors.mileage}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                    Features
                  </label>
                  <div className="space-y-3 pt-2">
                    {features.map(feature => (
                      <label key={feature} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.features.includes(feature)}
                          onChange={(e) => handleFeatureChange(feature, e.target.checked)}
                          className="mr-3 h-4 w-4 text-brand-gold focus:ring-brand-gold border-border rounded transition-colors duration-300"
                        />
                        <span className="text-sm text-foreground transition-colors duration-300">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <Button
                type="submit"
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-semibold px-12 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request Free Valuation & Inspection
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}