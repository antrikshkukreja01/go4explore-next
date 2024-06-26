//  ==================== HOME ====================

import axios from "axios";

export async function fetchHomeData() {
  try {
    const response = await axios.get(
      "https://go4explore-api.cyberoze.com/api/home"
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

//  ==================== TRIPS ====================

export async function fetchTripsData() {
  try {
    const response = await axios.get(
      "https://go4explore-api.cyberoze.com/api/trips"
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}
