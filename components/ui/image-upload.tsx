"use client"

import * as React from "react"
import { useState, useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import { ImageWithFallback } from "./image-with-fallback"
import { Button } from "./button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog"
import { Loader2, Upload, Search, X, Image as ImageIcon } from "lucide-react"
import { searchUnsplashImages, UnsplashImage } from "../../lib/unsplash"

interface ImageUploadProps {
  onImageSelect: (imageData: SelectedImage) => void
  defaultImage?: string
  defaultAlt?: string
  aspectRatio?: string
  className?: string
  themeQuery?: string
}

export interface SelectedImage {
  url: string
  alt: string
  source?: string
  sourceUrl?: string
  sourceUser?: string
}

export function ImageUpload({
  onImageSelect,
  defaultImage,
  defaultAlt = "Uploaded image",
  aspectRatio = "16/9",
  className = "",
  themeQuery = "",
}: ImageUploadProps) {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    defaultImage ? { url: defaultImage, alt: defaultAlt } : null
  )
  const [isUnsplashDialogOpen, setIsUnsplashDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState(themeQuery)
  const [unsplashImages, setUnsplashImages] = useState<UnsplashImage[]>([])
  const [error, setError] = useState<string | null>(null)

  // Handle file drop
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setIsLoading(true)
      setError(null)

      const file = acceptedFiles[0]
      if (!file) {
        setError("No valid file selected")
        setIsLoading(false)
        return
      }

      // Check file type
      if (!file.type.startsWith("image/")) {
        setError("Please upload an image file")
        setIsLoading(false)
        return
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size should be less than 5MB")
        setIsLoading(false)
        return
      }

      const reader = new FileReader()
      reader.onload = () => {
        const imageData: SelectedImage = {
          url: reader.result as string,
          alt: file.name.split(".")[0] || "Uploaded image",
          source: "local",
        }
        setSelectedImage(imageData)
        onImageSelect(imageData)
        setIsLoading(false)
      }
      reader.onerror = () => {
        setError("Failed to read file")
        setIsLoading(false)
      }
      reader.readAsDataURL(file)
    },
    [onImageSelect]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
    },
    maxFiles: 1,
  })

  // Search Unsplash images
  const handleUnsplashSearch = async (query: string = searchQuery) => {
    if (!query.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const result = await searchUnsplashImages(query)
      if (result.errors) {
        setError("Failed to search images. Please try again.")
      } else {
        setUnsplashImages(result.images as UnsplashImage[])
      }
    } catch (err) {
      setError("An error occurred while searching images")
    } finally {
      setIsLoading(false)
    }
  }

  // Select Unsplash image
  const handleUnsplashImageSelect = (image: UnsplashImage) => {
    const imageData: SelectedImage = {
      url: image.urls.regular,
      alt: image.alt_description || image.description || "Unsplash image",
      source: "unsplash",
      sourceUrl: `https://unsplash.com/photos/${image.id}`,
      sourceUser: image.user.name,
    }
    setSelectedImage(imageData)
    onImageSelect(imageData)
    setIsUnsplashDialogOpen(false)
  }
  
  // Handle keyboard navigation for accessibility
  const handleKeyDown = (image: UnsplashImage) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleUnsplashImageSelect(image)
    }
  }

  // Remove selected image
  const handleRemoveImage = () => {
    setSelectedImage(null)
    onImageSelect({ url: "", alt: "" })
  }

  // Load initial Unsplash images when dialog opens
  useEffect(() => {
    if (isUnsplashDialogOpen && unsplashImages.length === 0) {
      handleUnsplashSearch(themeQuery || "abstract")
    }
  }, [isUnsplashDialogOpen, themeQuery, unsplashImages.length])

  return (
    <div className={`w-full ${className}`}>
      {selectedImage ? (
        <div className="relative rounded-lg overflow-hidden border border-border">
          <div
            className="relative w-full"
            style={{ aspectRatio }}
          >
            <ImageWithFallback
              src={selectedImage.url}
              alt={selectedImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute top-2 right-2 flex gap-2">
            <Button
              variant="destructive"
              size="icon"
              className="h-8 w-8 rounded-full opacity-90"
              onClick={handleRemoveImage}
              aria-label="Remove image"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          {selectedImage.source === "unsplash" && (
            <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
              Photo by {selectedImage.sourceUser} on Unsplash
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
              isDragActive
                ? "border-brand-gold/70 bg-brand-gold/10"
                : "border-border hover:border-brand-gold/50 hover:bg-muted/50"
            }`}
            style={{ aspectRatio }}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center h-full space-y-3">
              <div className="rounded-full bg-muted p-3">
                <Upload className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">
                  Drag & drop an image or click to browse
                </p>
                <p className="text-xs text-muted-foreground">
                  Supports JPG, PNG, GIF up to 5MB
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => setIsUnsplashDialogOpen(true)}
              className="text-sm"
            >
              <ImageIcon className="mr-2 h-4 w-4" />
              Choose from Unsplash
            </Button>
          </div>

          {error && (
            <p className="text-sm text-destructive text-center mt-2">{error}</p>
          )}
        </div>
      )}

      {/* Unsplash Image Selection Dialog */}
      <Dialog open={isUnsplashDialogOpen} onOpenChange={setIsUnsplashDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Select an image from Unsplash</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleUnsplashSearch()}
                  placeholder="Search for images..."
                  className="w-full pl-9 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                />
              </div>
              <Button onClick={() => handleUnsplashSearch()}>Search</Button>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {unsplashImages.map((image) => (
                  <div
                    key={image.id}
                    className="relative aspect-square rounded-md overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-border"
                    onClick={() => handleUnsplashImageSelect(image)}
                    onKeyDown={handleKeyDown(image)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Select image: ${image.alt_description || "Unsplash image"}`}
                  >
                    <ImageWithFallback
                      src={image.urls.small}
                      alt={image.alt_description || "Unsplash image"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 truncate">
                      Photo by {image.user.name}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!isLoading && unsplashImages.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No images found. Try a different search term.
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}