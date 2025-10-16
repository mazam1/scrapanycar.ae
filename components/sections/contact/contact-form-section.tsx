"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Send, 
  Phone, 
  Mail, 
  User,
  Car,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2
} from "lucide-react"

import { Button } from "@/components/ui/button"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  vehicleYear: string
  vehicleMake: string
  vehicleModel: string
  vehicleCondition: string
  location: string
  preferredDate: string
  preferredTime: string
  message: string
  contactMethod: string
}

interface FormErrors {
  [key: string]: string
}

const vehicleConditions = [
  { value: "running", label: "Running - Drives normally" },
  { value: "not-running", label: "Not Running - Doesn't start" },
  { value: "accident", label: "Accident Damage - Collision damage" },
  { value: "mechanical", label: "Mechanical Issues - Engine/transmission problems" },
  { value: "flood", label: "Flood Damage - Water damage" },
  { value: "fire", label: "Fire Damage - Fire or heat damage" }
]

const timeSlots = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM"
]

const contactMethods = [
  { value: "phone", label: "Phone Call" },
  { value: "email", label: "Email" },
  { value: "text", label: "Text Message" }
]

export function ContactFormSection() {
  const [formData, setFormData] = React.useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleCondition: "",
    location: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    contactMethod: "phone"
  })

  const [errors, setErrors] = React.useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Required field validation
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.vehicleYear.trim()) newErrors.vehicleYear = "Vehicle year is required"
    if (!formData.vehicleMake.trim()) newErrors.vehicleMake = "Vehicle make is required"
    if (!formData.vehicleModel.trim()) newErrors.vehicleModel = "Vehicle model is required"
    if (!formData.vehicleCondition) newErrors.vehicleCondition = "Vehicle condition is required"
    if (!formData.location.trim()) newErrors.location = "Location is required"

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Vehicle year validation
    const currentYear = new Date().getFullYear()
    const year = parseInt(formData.vehicleYear)
    if (formData.vehicleYear && (isNaN(year) || year < 1900 || year > currentYear + 1)) {
      newErrors.vehicleYear = `Please enter a valid year between 1900 and ${currentYear + 1}`
    }

    // Date validation (if provided)
    if (formData.preferredDate) {
      const selectedDate = new Date(formData.preferredDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.preferredDate = "Please select a future date"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData)
      
      setIsSubmitted(true)
    } catch (error) {
      console.error("Submission error:", error)
      setErrors({ submit: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="inline-flex p-4 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Thank You for Your Submission!
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We've received your information and will contact you within 15 minutes with your 
                personalized quote. Our team is already reviewing your vehicle details.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>Expect a call at {formData.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>Confirmation sent to {formData.email}</span>
                </div>
              </div>
              <Button 
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    vehicleYear: "",
                    vehicleMake: "",
                    vehicleModel: "",
                    vehicleCondition: "",
                    location: "",
                    preferredDate: "",
                    preferredTime: "",
                    message: "",
                    contactMethod: "phone"
                  })
                }}
                variant="outline"
              >
                Submit Another Request
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get Your <span className="text-brand-gold">Instant Quote</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll contact you within 15 minutes with a personalized quote for your vehicle.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-card border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-brand-gold" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.firstName ? "border-red-500" : "border-border"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.lastName ? "border-red-500" : "border-border"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-brand-gold" />
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-border"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? "border-red-500" : "border-border"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex gap-4">
                  {contactMethods.map((method) => (
                    <label key={method.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method.value}
                        checked={formData.contactMethod === method.value}
                        onChange={(e) => handleInputChange("contactMethod", e.target.value)}
                        className="text-brand-gold focus:ring-brand-gold"
                      />
                      <span className="text-foreground">{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Car className="h-5 w-5 text-brand-gold" />
                Vehicle Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Year *
                  </label>
                  <input
                    type="number"
                    min="1900"
                    max={new Date().getFullYear() + 1}
                    value={formData.vehicleYear}
                    onChange={(e) => handleInputChange("vehicleYear", e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.vehicleYear ? "border-red-500" : "border-border"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors`}
                    placeholder="2020"
                  />
                  {errors.vehicleYear && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.vehicleYear}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Make *
                  </label>
                  <input
                    type="text"
                    value={formData.vehicleMake}
                    onChange={(e) => handleInputChange("vehicleMake", e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.vehicleMake ? "border-red-500" : "border-border"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors`}
                    placeholder="Honda"
                  />
                  {errors.vehicleMake && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.vehicleMake}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Model *
                  </label>
                  <input
                    type="text"
                    value={formData.vehicleModel}
                    onChange={(e) => handleInputChange("vehicleModel", e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.vehicleModel ? "border-red-500" : "border-border"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors`}
                    placeholder="Civic"
                  />
                  {errors.vehicleModel && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.vehicleModel}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Vehicle Condition *
                </label>
                <select
                  value={formData.vehicleCondition}
                  onChange={(e) => handleInputChange("vehicleCondition", e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.vehicleCondition ? "border-red-500" : "border-border"
                  } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors`}
                >
                  <option value="">Select vehicle condition</option>
                  {vehicleConditions.map((condition) => (
                    <option key={condition.value} value={condition.value}>
                      {condition.label}
                    </option>
                  ))}
                </select>
                {errors.vehicleCondition && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.vehicleCondition}
                  </p>
                )}
              </div>
            </div>

            {/* Location & Scheduling */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-gold" />
                Location & Scheduling
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Vehicle Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.location ? "border-red-500" : "border-border"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors`}
                    placeholder="Denver, CO 80202"
                  />
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.location}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.preferredDate ? "border-red-500" : "border-border"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors`}
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.preferredDate}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors"
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Message */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-2">
                Additional Information
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors resize-none"
                placeholder="Tell us more about your vehicle's condition, any special circumstances, or questions you have..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              {errors.submit && (
                <p className="mb-4 text-red-500 flex items-center justify-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.submit}
                </p>
              )}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-semibold text-lg px-12"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Get My Quote
                  </>
                )}
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                By submitting this form, you agree to be contacted by our team regarding your vehicle quote.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}