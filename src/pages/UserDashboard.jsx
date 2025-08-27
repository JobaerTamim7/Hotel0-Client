import React from "react";
import { Link } from "react-router";
import { MdHotel, MdRateReview, MdSettings } from "react-icons/md";

const UserDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-10 min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <MdHotel className="text-6xl text-primary mb-4" />
            <h2 className="card-title">My Rooms</h2>
            <p className="text-base-content/70">
              View and manage your booked rooms.
            </p>
            <div className="card-actions">
              <Link to="/my-rooms" className="btn btn-primary">
                Go to My Rooms
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <MdRateReview className="text-6xl text-secondary mb-4" />
            <h2 className="card-title">My Reviews</h2>
            <p className="text-base-content/70">
              See your submitted reviews and feedback.
            </p>
            <div className="card-actions">
              <Link to="/my-reviews" className="btn btn-secondary">
                View Reviews
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <MdSettings className="text-6xl text-accent mb-4" />
            <h2 className="card-title">Account Settings</h2>
            <p className="text-base-content/70">
              Update your profile and account information.
            </p>
            <div className="card-actions">
              <Link to="/settings" className="btn btn-accent">
                Account Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
