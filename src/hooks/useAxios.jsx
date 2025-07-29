import axios from "axios";

export default function useAxios() {
  const axiosInstance = axios.create({
    // baseURL: "https://hotel0-server.vercel.app",
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return axiosInstance;
}
