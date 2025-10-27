// This is a mock database implementation for image storage
// In a real application, you would connect to a real database like MongoDB, PostgreSQL, etc.

interface StoredImage {
  id: string;
  url: string;
  alt: string;
  source?: string;
  sourceUrl?: string;
  sourceUser?: string;
  createdAt: Date;
  updatedAt: Date;
}

// In-memory storage for demo purposes
const imageStore: Record<string, StoredImage> = {};

/**
 * Save image data to the database
 * @param imageData Image data to save
 * @returns Saved image with ID
 */
export async function saveImage(imageData: Omit<StoredImage, 'id' | 'createdAt' | 'updatedAt'>) {
  const id = generateId();
  const now = new Date();
  
  const storedImage: StoredImage = {
    id,
    ...imageData,
    createdAt: now,
    updatedAt: now,
  };
  
  imageStore[id] = storedImage;
  return storedImage;
}

/**
 * Get image by ID
 * @param id Image ID
 * @returns Image data or null if not found
 */
export async function getImage(id: string): Promise<StoredImage | null> {
  return imageStore[id] || null;
}

/**
 * Get all stored images
 * @returns Array of stored images
 */
export async function getAllImages(): Promise<StoredImage[]> {
  return Object.values(imageStore);
}

/**
 * Update image data
 * @param id Image ID
 * @param imageData Updated image data
 * @returns Updated image or null if not found
 */
export async function updateImage(
  id: string, 
  imageData: Partial<Omit<StoredImage, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<StoredImage | null> {
  const image = imageStore[id];
  if (!image) return null;
  
  const updatedImage = {
    ...image,
    ...imageData,
    updatedAt: new Date(),
  };
  
  imageStore[id] = updatedImage;
  return updatedImage;
}

/**
 * Delete image by ID
 * @param id Image ID
 * @returns true if deleted, false if not found
 */
export async function deleteImage(id: string): Promise<boolean> {
  if (!imageStore[id]) return false;
  
  delete imageStore[id];
  return true;
}

// Helper function to generate a unique ID
function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}