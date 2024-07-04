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

//  ==================== TRIPS CATEGORY ====================

export async function fetchTripsCategoryData(slug) {
  try {
    const response = await axios.get(
      "https://go4explore-api.cyberoze.com/api/trips-category/" + params
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}
//  ==================== Blogs ====================

export async function fetchBlogData(slug) {
  try {
    const response = await axios.get(
      "https://go4explore-api.cyberoze.com/api/blogs/"
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}
//  ==================== Fourms ====================

export async function fetchForumsData() {
  try {
    const response = await axios.get(
      "https://go4explore-api.cyberoze.com/api/forums"
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}
