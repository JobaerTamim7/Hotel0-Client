import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["bookRoom", roomId],
    mutationFn: async () => {
      const response = await axiosInstance.patch(`/rooms/book`, {
        userEmail: user.email,
        roomId: roomId,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["roomDetails", roomId]);
      queryClient.invalidateQueries(["rooms"]);
      toast.success("Room booked successfully!");
    },
  });
}

export function useMyRooms() {
  const axiosInstance = useAxios();
  const { user } = useAuth();

  return useQuery({
    queryKey: ["myRooms", user.email],
    queryFn: async () => {
      const response = await axiosInstance.get(`/rooms/my-rooms/${user.email}`);
      return response.data;
    },
  });
}
