import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend-api.com/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
