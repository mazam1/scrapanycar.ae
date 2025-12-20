# Vehicle CRM API Integration Documentation

This document outlines the integration of the external Vehicle CRM API with the form-section component.

## Overview

The `form-section.tsx` component has been refactored to integrate with an external Vehicle CRM API for:
1. Fetching car makes dynamically
2. Fetching car models based on selected make
3. Submitting car valuation leads

## Files Added/Modified

### New Files

1. **`lib/vehicle-api-types.ts`**
   - Contains TypeScript interfaces for API requests and responses
   - Defines types for: `CarMake`, `CarModel`, `CarValuationRequest`, `CarValuationResponse`

2. **`lib/vehicle-api.ts`**
   - API utility functions for making requests to the Vehicle CRM API
   - Functions: `fetchCarMakes()`, `fetchCarModels(makeId)`, `submitCarValuation(data)`
   - Handles authentication with Bearer token
   - Includes error handling and logging

### Modified Files

1. **`components/sections/home/form-section.tsx`**
   - Updated to use API for car makes and models instead of static data
   - Modified `FormData` interface to store `makeId` and `modelId` instead of names
   - Implemented loading states for API calls
   - Updated form validation to only require name and phone number
   - Added phone validation (minimum 10 digits)
   - Integrated form submission with API endpoint
   - Added visual indicators for required fields (asterisks)
   - Improved error handling with user-friendly messages

2. **`.env.local`**
   - Added `NEXT_PUBLIC_` prefix to environment variables
   - Variables are now accessible on the client-side

## Environment Variables

The following environment variables must be set in `.env.local`:

```env
# Vehicle CRM API Configuration
NEXT_PUBLIC_API_BASE_URL=https://vehiclecrm.local/api/
NEXT_PUBLIC_VEHICLE_CRM_API_TOKEN=your_api_token_here
```

**Important Notes:**
- The `NEXT_PUBLIC_` prefix is required for client-side access
- Never commit the actual API token to version control
- These variables are exposed to the browser, so use with caution

## API Endpoints

### 1. Fetch Car Makes
**Endpoint:** `GET {{BASE_URL}}/car-data/car-makes`

**Request Headers:**
```
Content-Type: application/json
Authorization: Bearer {VEHICLE_CRM_API_TOKEN}
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Toyota",
      "logo": "https://...",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### 2. Fetch Car Models
**Endpoint:** `GET {{BASE_URL}}/car-data/car-makes/{makeId}/models`

**Request Headers:**
```
Content-Type: application/json
Authorization: Bearer {VEHICLE_CRM_API_TOKEN}
```

**Response:**
```json
{
  "data": [
    {
      "id": 5,
      "car_make_id": 1,
      "name": "Camry",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### 3. Submit Car Valuation
**Endpoint:** `POST {{BASE_URL}}/leads/car-valuation`

**Request Headers:**
```
Content-Type: application/json
Authorization: Bearer {VEHICLE_CRM_API_TOKEN}
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone_number": "+971501234567",
  "city": "Dubai",
  "car_make_id": 1,
  "car_model_id": 5,
  "car_year": 2020,
  "car_condition": "good",
  "car_color": "White",
  "car_mileage": 45000,
  "has_leather_seats": true,
  "has_sunroof": false,
  "has_alloy_wheels": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Lead created successfully",
  "data": {
    "lead_id": 123,
    "valuation_estimate": 50000
  }
}
```

## Form Validation Changes

### Required Fields
Only two fields are now required:
1. **Name** - Must not be empty
2. **Phone** - Minimum 10 digits (numbers only)

### Optional Fields
All other fields are optional:
- Email (validated if provided)
- City
- Car make
- Car model
- Year
- Condition
- Color
- Mileage (validated if provided)
- Features (checkboxes)

## Component Behavior

### Loading States

1. **Car Makes Loading:**
   - Fetched on component mount
   - Select is disabled with "Loading makes..." text
   - Error toast shown if fetch fails

2. **Car Models Loading:**
   - Fetched when a car make is selected
   - Select is disabled with "Loading models..." text
   - Model selection is reset when make changes
   - Error toast shown if fetch fails

3. **Form Submission:**
   - Submit button shows "Submitting..." text
   - Button is disabled during submission
   - Success/error toast shown based on API response
   - Form is reset on successful submission

### Error Handling

1. **API Errors:**
   - Errors are logged to console
   - User-friendly toast notifications
   - Error alert banner for persistent issues
   - Graceful degradation (empty select options on failure)

2. **Validation Errors:**
   - Inline error messages below fields
   - Red border highlighting invalid fields
   - Error toast summarizing validation issues

### Features Mapping

Checkbox features are mapped to boolean API fields:
- "Leather Seats" → `has_leather_seats`
- "Sunroof" → `has_sunroof`
- "Alloy Wheels" → `has_alloy_wheels`

## Testing Recommendations

1. **Test API connectivity:**
   - Verify environment variables are set correctly
   - Check network tab for API calls
   - Confirm Bearer token authentication works

2. **Test form behavior:**
   - Submit with only required fields (name + phone)
   - Submit with all fields filled
   - Test phone validation with various formats
   - Verify car models load when make is selected
   - Verify model resets when make changes

3. **Test error scenarios:**
   - Network failure during makes fetch
   - Network failure during models fetch
   - Invalid API token
   - API endpoint down
   - Invalid form data submission

## Development Notes

- The component uses client-side data fetching (`fetch` API)
- All API calls disable caching (`cache: "no-store"`)
- TypeScript strict mode is enforced
- Accessibility attributes maintained (ARIA labels, roles)
- Animations respect `prefers-reduced-motion`
- All existing UI/UX features preserved

## Troubleshooting

### "Failed to load car makes"
- Check that `NEXT_PUBLIC_API_BASE_URL` is set correctly
- Verify API token is valid
- Check network connectivity to API server
- Review browser console for detailed error messages

### "Failed to load car models"
- Ensure a valid car make is selected
- Check that the selected make ID exists in the API
- Verify API endpoint format is correct

### Form submission fails
- Verify required fields (name, phone) are filled
- Check phone number has at least 10 digits
- Review API response in network tab
- Confirm API token has permission to create leads

## Future Enhancements

Potential improvements:
1. Add API response caching with React Query or SWR
2. Implement retry logic for failed API calls
3. Add request debouncing for model fetching
4. Add offline support with local storage fallback
5. Implement API rate limiting handling
6. Add request/response logging for debugging
7. Create Server Actions for API calls (if moving to SSR)
