import axios from "axios";

export default function useAxios() {
  const axiosInstance = axios.create({
    baseURL: "https://hotel0-server.vercel.app",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return axiosInstance;
}
