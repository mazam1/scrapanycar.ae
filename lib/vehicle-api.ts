// Vehicle CRM API utility functions

import type {
  CarMakesResponse,
  CarModelsResponse,
  CarValuationRequest,
  CarValuationResponse,
  GetInTouchRequest,
  GetInTouchResponse,
} from "./vehicle-api-types"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL
const API_TOKEN = process.env.NEXT_PUBLIC_VEHICLE_CRM_API_TOKEN || process.env.VEHICLE_CRM_API_TOKEN

if (!API_BASE_URL) {
  console.warn("API_BASE_URL is not defined in environment variables")
}

if (!API_TOKEN) {
  console.warn("VEHICLE_CRM_API_TOKEN is not defined in environment variables")
}

/**
 * Fetches all available car makes from the API
 */
export async function fetchCarMakes(): Promise<CarMakesResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/car-data/car-makes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      cache: "no-store", // Disable caching for dynamic data
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch car makes: ${response.status} ${response.statusText}`)
    }

    const data: CarMakesResponse = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching car makes:", error)
    throw error
  }
}

/**
 * Fetches car models for a specific car make
 * @param makeId - The ID of the car make
 */
export async function fetchCarModels(makeId: number): Promise<CarModelsResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/car-data/car-makes/${makeId}/models`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      cache: "no-store", // Disable caching for dynamic data
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch car models: ${response.status} ${response.statusText}`)
    }

    const data: CarModelsResponse = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching car models:", error)
    throw error
  }
}

/**
 * Submits a car valuation lead to the API
 * @param data - The car valuation request data
 */
export async function submitCarValuation(
  data: CarValuationRequest
): Promise<CarValuationResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/leads/car-valuation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`Failed to submit valuation: ${response.status} ${response.statusText}`)
    }

    const result: CarValuationResponse = await response.json()
    return result
  } catch (error) {
    console.error("Error submitting car valuation:", error)
    throw error
  }
}

/**
 * Submits a get in touch lead to the API
 * @param data - The get in touch request data
 */
export async function submitGetInTouch(
  data: GetInTouchRequest
): Promise<GetInTouchResponse> {
  try {
    // Only send fields that have values
    const requestBody: Partial<GetInTouchRequest> = {
      name: data.name,
      phone_number: data.phone_number,
    }

    if (data.email) {
      requestBody.email = data.email
    }

    if (data.questions) {
      requestBody.questions = data.questions
    }

    const response = await fetch(`${API_BASE_URL}/leads/get-in-touch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      throw new Error(`Failed to submit get in touch: ${response.status} ${response.statusText}`)
    }

    const result: GetInTouchResponse = await response.json()
    return result
  } catch (error) {
    console.error("Error submitting get in touch:", error)
    throw error
  }
}
