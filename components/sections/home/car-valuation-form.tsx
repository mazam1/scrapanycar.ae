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

export function CarValuationForm() {
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
    <motion.div
      className="bg-white rounded-2xl p-6 lg:p-8 max-w-md w-full border border-[#C49A36] [box-shadow:0_25px_50px_-12px_rgba(196,154,54,0.25)]"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-brand-charcoal mb-2">
          Why Choose Scrap Your Car?
        </h2>
        <p className="text-gray-600 text-sm">
          Fill out the form below for an instant quote
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information Section */}
        <div>
          <h3 className="text-lg font-semibold text-brand-charcoal mb-4 border-b border-gray-200 pb-2">
            Personal Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter your name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter your email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter your phone number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="+971 4 123 4567"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select city
              </label>
              <select
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  errors.city ? "border-red-500" : "border-gray-300"
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
          <h3 className="text-lg font-semibold text-brand-charcoal mb-4 border-b border-gray-200 pb-2">
            Vehicle Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select make
              </label>
              <select
                value={formData.make}
                onChange={(e) => handleInputChange("make", e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  errors.make ? "border-red-500" : "border-gray-300"
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select model
              </label>
              <select
                value={formData.model}
                onChange={(e) => handleInputChange("model", e.target.value)}
                disabled={!formData.make}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  errors.model ? "border-red-500" : "border-gray-300"
                } ${!formData.make ? "bg-gray-100 cursor-not-allowed" : ""}`}
              >
                <option value="">Choose model</option>
                {availableModels.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
              {errors.model && <p className="text-red-500 text-xs mt-1">{errors.model}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Choose year
              </label>
              <select
                value={formData.year}
                onChange={(e) => handleInputChange("year", e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  errors.year ? "border-red-500" : "border-gray-300"
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select condition
              </label>
              <select
                value={formData.condition}
                onChange={(e) => handleInputChange("condition", e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  errors.condition ? "border-red-500" : "border-gray-300"
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
          <h3 className="text-lg font-semibold text-brand-charcoal mb-4 border-b border-gray-200 pb-2">
            Additional Details
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Choose color
              </label>
              <select
                value={formData.color}
                onChange={(e) => handleInputChange("color", e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  errors.color ? "border-red-500" : "border-gray-300"
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Car mileage (miles)
              </label>
              <input
                type="number"
                value={formData.mileage}
                onChange={(e) => handleInputChange("mileage", e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  errors.mileage ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="e.g., 50000"
                min="0"
              />
              {errors.mileage && <p className="text-red-500 text-xs mt-1">{errors.mileage}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Features
              </label>
              <div className="space-y-2">
                {features.map(feature => (
                  <label key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature)}
                      onChange={(e) => handleFeatureChange(feature, e.target.checked)}
                      className="mr-2 h-4 w-4 text-brand-gold focus:ring-brand-gold border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-semibold py-3 text-lg"
        >
          Request Free Valuation & Inspection
        </Button>
      </form>
    </motion.div>
  )
}