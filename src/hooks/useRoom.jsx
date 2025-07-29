import { useMutation, useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";
import { toast } from "react-toastify";

export function useRoom() {
  const axiosInstance = useAxios();
  return useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const response = await axiosInstance.get("/rooms/all");
      return response.data;
    },
  });
}

export function useRoomDetails(roomId) {
  const axiosInstance = useAxios();
  return useQuery({
    queryKey: ["roomDetails", roomId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/rooms/${roomId}`);
      return response.data;
    },
  });
}

export function useRoomBooking(roomId) {
  const axiosInstance = useAxios();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post(`/rooms/book`, {
        userEmail: user.email,
        roomId: roomId,
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Room booked successfully!");
    },
  });
}
