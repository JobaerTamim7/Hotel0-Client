import { useLocation, useParams } from "react-router";
import {
  useRoomDetails,
  useRoomBooking,
  useRoomDelete,
} from "../hooks/useRoom";
import ReviewForm from "../components/RoomDetails/ReviewBox";
import AllReviews from "../components/RoomDetails/AllReviews";
import Loading from "../components/Loading";

export default function RoomDetails() {
  document.title = "Tanzar Room Details";
  const { roomID } = useParams();
  const location = useLocation();
  const mybooked = location.state?.mybooked || false;
  const deleteMutation = useRoomDelete(roomID);

  const bookMutation = useRoomBooking(roomID);

  const { data, isLoading, error } = useRoomDetails(roomID);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <>
      <div className="shadow-[0px_0px_10px] shadow-white/60 rounded-lg overflow-hidden max-w-4xl mx-auto my-10">
        {/* Room Image */}
        <figure>
          <img
            src={data.roomImage}
            alt={data.roomCateory}
            className="w-full h-64 md:h-80 object-cover"
          />
        </figure>

        {/* Room Info */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-primary">
            {data.roomCateory}
          </h1>
          <p className="text-lg text-gray-600 mt-1">Room #{data.roomNumber}</p>

          {/* Price */}
          <div className="mt-4">
            <span className="text-2xl font-semibold text-secondary">
              ৳{data.roomPrice}
            </span>
            <span className="text-sm text-gray-500"> / per night</span>
          </div>

          {/* Status Badge */}
          <div className="mt-3">
            <span
              className={`badge ${
                data.roomStatus === "available"
                  ? "badge-success"
                  : "badge-error"
              } text-black ${mybooked ? "badge-info" : ""}`}
            >
              {mybooked
                ? "Booked"
                : data.roomStatus.charAt(0).toUpperCase() +
                  data.roomStatus.slice(1)}
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 text-gray-100 leading-relaxed">
            {data.roomDescription}
          </p>

          {/* Book Now Button */}
          {mybooked ? (
            <button
              className="btn bg-red-100 text-red-500 mt-8 w-full md:w-auto"
              onClick={() => deleteMutation.mutate()}
            >
              Cancel
            </button>
          ) : (
            <div className="mt-8">
              {data.roomStatus === "available" ? (
                <button
                  className="btn btn-primary text-white w-full md:w-auto"
                  onClick={() => bookMutation.mutate()}
                >
                  Book Now
                </button>
              ) : (
                <button className="btn btn-secondary w-full md:w-auto" disabled>
                  Unavailable
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {data.roomDetails && (
        <div className="overflow-x-auto mt-4 mx-auto max-w-4xl px-4">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data.roomDetails).map(([key, value]) => (
                <tr key={key}>
                  <td className="font-bold">{key}</td>
                  <td>{String(value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <AllReviews roomID={roomID} />
      {mybooked && <ReviewForm roomID={roomID} />}
    </>
  );
}
