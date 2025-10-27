"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/common/scroll-to-top"
import { ImageUpload, SelectedImage } from "@/components/ui/image-upload"
import { Button } from "@/components/ui/button"
import { Loader2, Check } from "lucide-react"

export default function ImageUploadDemo() {
  const [selectedImages, setSelectedImages] = useState<SelectedImage[]>([])
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleImageSelect = (index: number) => (imageData: SelectedImage) => {
    const newImages = [...selectedImages]
    newImages[index] = imageData
    setSelectedImages(newImages)
  }

  const handleSaveImages = async () => {
    setIsSaving(true)
    setSaveSuccess(false)
    
    try {
      // Filter out empty images
      const imagesToSave = selectedImages.filter(img => img && img.url)
      
      // Save each image to the API
      const savePromises = imagesToSave.map(image => 
        fetch('/api/images', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(image),
        })
      )
      
      await Promise.all(savePromises)
      setSaveSuccess(true)
    } catch (error) {
      console.error('Failed to save images:', error)
    } finally {
      setIsSaving(false)
    }
  }

  // Demo image themes that match text content
  const imageThemes = [
    "car recycling",
    "scrap vehicle",
    "auto parts",
    "vehicle valuation"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Image Upload Demo
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-12">
            This demo showcases the responsive image upload component with Unsplash integration.
            Select images that match the theme of each content box.
          </p>
          
          <div className="grid gap-12">
            {imageThemes.map((theme, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-6 border border-border rounded-lg p-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">{theme.charAt(0).toUpperCase() + theme.slice(1)}</h2>
                  <p className="text-muted-foreground">
                    Select an image that represents the theme: <strong>{theme}</strong>.
                    You can upload your own image or choose from Unsplash.
                  </p>
                  <div className="bg-muted p-4 rounded-md">
                    <h3 className="font-medium mb-2">Image Requirements:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>High quality and relevant to the theme</li>
                      <li>Proper aspect ratio (16:9 recommended)</li>
                      <li>Maximum file size: 5MB</li>
                      <li>Supported formats: JPG, PNG, GIF</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <ImageUpload
                    onImageSelect={handleImageSelect(index)}
                    aspectRatio="16/9"
                    themeQuery={theme}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button 
              onClick={handleSaveImages} 
              disabled={isSaving || selectedImages.filter(img => img && img.url).length === 0}
              className="px-8"
            >
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving Images...
                </>
              ) : saveSuccess ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Images Saved!
                </>
              ) : (
                'Save Images'
              )}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}