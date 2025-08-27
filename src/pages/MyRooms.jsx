import Loading from "../components/Loading";
import NoRoomBooked from "../components/NoRoomBooked";
import RoomCard from "../components/RoomDetails/RoomCard";
import { useMyRooms } from "../hooks/useRoom";

export default function MyRoomPage() {
  document.title = "Tanzar My Rooms";
  const { data, isLoading, error } = useMyRooms();

  if (Array.isArray(data) && data.length === 0) {
    return (
      <div className="py-10 px-4 md:px-10">
        <h1 className="text-3xl font-bold mb-6">Available Rooms</h1>
        <div>No rooms booked yet.</div>
      </div>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <NoRoomBooked />;
  }

  if (!data) {
    return <NoRoomBooked />;
  }

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
            hideStatus={true}
            mybooked={true}
          />
        ))}
      </div>
    </div>
  );
}
