import React from "react";
import { Link } from "react-router";

export default function NoRoomBooked() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center gap-5">
      <p className="font-semibold">No Rooms Still Booked</p>
      <Link to={"/rooms"}>
        <button className="btn btn-primary px-6 py-3">Book Now</button>
      </Link>
    </div>
  );
}
