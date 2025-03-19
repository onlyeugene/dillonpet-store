import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DILLONPET_BASE_URL, // Ensure the correct env variable
  headers: {
    "Content-Type": "application/json",
  },
});

// Remove auth logic from here
instance.interceptors.request.use((config) => {
  return config;
});

// Handle unauthorized (401) responses
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      console.error("Unauthorized: Logging out user");
      // Handle logout here if needed
    }
    return Promise.reject(error);
  }
);

export default instance;
