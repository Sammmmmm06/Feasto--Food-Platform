import apiClient from "./apiClient";

// Get all restaurants
export const getAllRestaurants = async () => {
  try {
    const response = await apiClient.get("/restaurants");
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return [];
  }
}; 
