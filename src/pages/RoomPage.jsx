import React from "react";
import { useRoom } from "../hooks/useRoom";
import RoomCard from "../components/RoomCard";
import Loading from "../components/Loading";

export default function RoomPage() {
  document.title = "Tanzar Rooms";
  const { data, isLoading, error } = useRoom();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Something went wrong.</div>;
  }
  console.log(data);

  return (
    <div className="py-10 px-4 md:px-10">
      <h1 className="text-3xl font-bold mb-6">Available Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((room) => (
          <RoomCard
            key={room.roomId}
            id={room.roomId}
            image={room.roomImage}
            title={room.roomCateory}
            description={room.roomDescription}
            status={room.roomStatus}
          />
        ))}
      </div>
    </div>
  );
}
