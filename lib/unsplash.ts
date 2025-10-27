import { createApi } from 'unsplash-js';

// Initialize the Unsplash API client
const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '',
});

export interface UnsplashImage {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
  description: string;
  user: {
    name: string;
    username: string;
  };
}

/**
 * Search for images on Unsplash
 * @param query Search query
 * @param page Page number
 * @param perPage Number of images per page
 * @returns Promise with search results
 */
export async function searchUnsplashImages(
  query: string,
  page: number = 1,
  perPage: number = 10
) {
  try {
    const result = await unsplashApi.search.getPhotos({
      query,
      page,
      perPage,
    });

    if (result.errors) {
      console.error('Error searching Unsplash images:', result.errors);
      return { images: [], total: 0, errors: result.errors };
    }

    return {
      images: result.response?.results || [],
      total: result.response?.total || 0,
      errors: null,
    };
  } catch (error) {
    console.error('Failed to search Unsplash images:', error);
    return { images: [], total: 0, errors: error };
  }
}

/**
 * Get random images from Unsplash
 * @param count Number of images to fetch
 * @param query Optional search query to filter random images
 * @returns Promise with random images
 */
export async function getRandomUnsplashImages(count: number = 10, query?: string) {
  try {
    const result = await unsplashApi.photos.getRandom({
      count,
      query,
    });

    if (result.errors) {
      console.error('Error getting random Unsplash images:', result.errors);
      return { images: [], errors: result.errors };
    }

    // Handle both single photo and multiple photos response
    const photos = Array.isArray(result.response)
      ? result.response
      : result.response ? [result.response] : [];

    return {
      images: photos,
      errors: null,
    };
  } catch (error) {
    console.error('Failed to get random Unsplash images:', error);
    return { images: [], errors: error };
  }
}

export default unsplashApi;