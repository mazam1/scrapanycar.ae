// TypeScript interfaces for Vehicle CRM API

export interface CarMake {
  id: number
  name: string
  logo?: string
  created_at?: string
  updated_at?: string
}

export interface CarModel {
  id: number
  car_make_id: number
  name: string
  created_at?: string
  updated_at?: string
}

export interface CarMakesResponse {
  data: CarMake[]
}

export interface CarModelsResponse {
  data: CarModel[]
}

export interface CarValuationRequest {
  name: string
  email?: string
  phone_number: string
  city?: string
  car_make_id?: number
  car_model_id?: number
  car_year?: number
  car_condition?: string
  car_color?: string
  car_mileage?: number
  has_leather_seats?: boolean
  has_sunroof?: boolean
  has_alloy_wheels?: boolean
}

export interface CarValuationResponse {
  success: boolean
  message: string
  data?: {
    lead_id: number
    valuation_estimate?: number
  }
}

export interface GetInTouchRequest {
  name: string
  phone_number: string
  email?: string
  questions?: string
}

export interface GetInTouchResponse {
  success: boolean
  message: string
  data?: {
    lead_id: number
  }
}
