"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import { Button } from "../../ui/button"
import { toast } from "sonner"
import { fetchCarMakes, fetchCarModels, submitCarValuation } from "../../../lib/vehicle-api"
import type { CarMake, CarModel } from "../../../lib/vehicle-api-types"
import { trackCarEvaluationSubmission } from "../../../lib/tracking"

interface FormData {
  // Personal Information
  phone: string
  city: string

  // Vehicle Information (now using IDs)
  makeId: string // Store as string for select value, convert to number for API
  modelId: string // Store as string for select value, convert to number for API
  condition: string
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

export function FormSection() {
  const shouldReduceMotion = useReducedMotion()

  const [formData, setFormData] = React.useState<FormData>({
    phone: "",
    city: "",
    makeId: "",
    modelId: "",
    condition: ""
  })

  const [errors, setErrors] = React.useState<Partial<FormData>>({})

  // API state management
  const [carMakes, setCarMakes] = React.useState<CarMake[]>([])
  const [carModels, setCarModels] = React.useState<CarModel[]>([])
  const [isLoadingMakes, setIsLoadingMakes] = React.useState(true)
  const [isLoadingModels, setIsLoadingModels] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [apiError, setApiError] = React.useState<string | null>(null)


  // Fetch car makes on component mount
  React.useEffect(() => {
    const loadCarMakes = async () => {
      try {
        setIsLoadingMakes(true)
        setApiError(null)
        const response = await fetchCarMakes()
        setCarMakes(response.data || [])
      } catch (error) {
        console.error("Failed to load car makes:", error)
        setApiError("Failed to load car makes. Please refresh the page.")
        toast.error("Failed to load car makes", {
          description: "Please refresh the page to try again.",
          duration: 5000,
        })
      } finally {
        setIsLoadingMakes(false)
      }
    }

    loadCarMakes()
  }, [])


  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }

    // Handle make selection to fetch models dynamically
    if (field === "makeId" && value) {
      loadCarModels(Number(value))
      setFormData(prev => ({ ...prev, modelId: "" })) // Reset model when make changes
    }
  }

  const loadCarModels = async (makeId: number) => {
    try {
      setIsLoadingModels(true)
      setApiError(null)
      const response = await fetchCarModels(makeId)
      setCarModels(response.data || [])
    } catch (error) {
      console.error("Failed to load car models:", error)
      setCarModels([])
      toast.error("Failed to load car models", {
        description: "Please try selecting a different make.",
        duration: 4000,
      })
    } finally {
      setIsLoadingModels(false)
    }
  }


  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    // Phone is required
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else {
      // Phone validation: minimum 10 digits (numbers only)
      const phoneDigits = formData.phone.replace(/\D/g, "")
      if (phoneDigits.length < 10) {
        newErrors.phone = "Phone number must be at least 10 digits"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error("Please fill in all required fields", {
        description: "Phone number is required.",
        duration: 4000,
      })
      return
    }

    try {
      setIsSubmitting(true)

      // Map form data to API request format
      const requestData = {
        name: "Car Valuation Customer", // Default name since removed from form
        email: "carvaluation@scrapyour.ae", // Hardcoded default email
        phone_number: formData.phone,
        city: formData.city || undefined,
        car_make_id: formData.makeId ? Number(formData.makeId) : undefined,
        car_model_id: formData.modelId ? Number(formData.modelId) : undefined,
        car_year: 2000, // Default year for API validation
        car_condition: formData.condition || undefined,
        car_mileage: 0, // Default mileage for API validation
      }

      const response = await submitCarValuation(requestData)

      if (response.success) {
        toast.success("Thank you! We'll contact you soon with your free valuation.", {
          description: "Our team will review your information and get back to you within 24 hours.",
          duration: 5000,
        })

        // Reset form after successful submission
        setFormData({
          phone: "", city: "",
          makeId: "", modelId: "", condition: ""
        })
        setCarModels([]) // Clear models

        // Track conversion after successful submission and toast
        await trackCarEvaluationSubmission({
          city: formData.city,
          make: carMakes.find(m => m.id === Number(formData.makeId))?.name,
          model: carModels.find(m => m.id === Number(formData.modelId))?.name,
          condition: formData.condition,
        })
      } else {
        throw new Error(response.message || "Failed to submit valuation")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Failed to submit your request", {
        description: error instanceof Error ? error.message : "Please try again later.",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
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
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Valuation</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight transition-colors duration-300">
            Get Your <span className="text-brand-secondary relative">
              Free Car Valuation
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            Fill out the form below for an instant quote and free inspection
          </p>
        </motion.div>

        {/* API Error Alert */}
        {apiError && (
          <div className="max-w-4xl mx-auto mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            <p className="font-medium">Error loading data</p>
            <p className="text-sm">{apiError}</p>
          </div>
        )}

        <div className="w-full mx-auto relative">
          <motion.div
            className="w-full bg-card rounded-3xl p-8 lg:p-12 relative border border-brand-secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            suppressHydrationWarning
          >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Column 1: Contact Information */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-foreground border-b-2 border-brand-secondary pb-3 mb-6 transition-colors duration-300">
                  Contact Information
                </h3>
                <div className="space-y-4 flex-1">
                  <div>
                    <label htmlFor="phone-input" className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                      Enter your phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone-input"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`w-full h-12 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 bg-background text-foreground ${
                        errors.phone ? "border-red-500" : "border-border"
                      }`}
                      placeholder="0501234567"
                    />
                    {errors.phone && <p id="phone-error" role="alert" className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="city-select" className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                      Select city
                    </label>
                    <select
                      id="city-select"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="w-full h-12 px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 bg-background text-foreground"
                    >
                      <option value="">Choose your city</option>
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Column 2: Vehicle Information */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-foreground border-b-2 border-brand-secondary pb-3 mb-6 transition-colors duration-300">
                  Vehicle Information
                </h3>
                <div className="space-y-4 flex-1">
                  <div>
                    <label htmlFor="make-select" className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                      Select make
                    </label>
                    <select
                      id="make-select"
                      value={formData.makeId}
                      onChange={(e) => handleInputChange("makeId", e.target.value)}
                      disabled={isLoadingMakes}
                      className={`w-full h-12 px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 bg-background text-foreground ${
                        isLoadingMakes ? "bg-muted cursor-not-allowed" : ""
                      }`}
                    >
                      <option value="">
                        {isLoadingMakes ? "Loading makes..." : "Choose make"}
                      </option>
                      {carMakes.map(make => (
                        <option key={make.id} value={make.id}>{make.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="model-select" className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                      Select model
                    </label>
                    <select
                      id="model-select"
                      value={formData.modelId}
                      onChange={(e) => handleInputChange("modelId", e.target.value)}
                      disabled={!formData.makeId || isLoadingModels}
                      className={`w-full h-12 px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 bg-background text-foreground ${
                        (!formData.makeId || isLoadingModels) ? "bg-muted cursor-not-allowed" : ""
                      }`}
                    >
                      <option value="">
                        {isLoadingModels ? "Loading models..." : "Choose model"}
                      </option>
                      {carModels.map(model => (
                        <option key={model.id} value={model.id}>{model.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="condition-select" className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                      Select condition
                    </label>
                    <select
                      id="condition-select"
                      value={formData.condition}
                      onChange={(e) => handleInputChange("condition", e.target.value)}
                      className="w-full h-12 px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 bg-background text-foreground"
                    >
                      <option value="">Choose condition</option>
                      {conditions.map(condition => (
                        <option key={condition} value={condition}>{condition}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-6 sm:px-12 py-4 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Request Free Valuation & Inspection"}
              </Button>
            </div>
          </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
