import React from "react";
import { MdRateReview, MdStar, MdEdit, MdDelete } from "react-icons/md";

const MyReviews = () => {
  // Mock data - replace with actual data from API
  const reviews = [
    {
      id: 1,
      roomName: "Deluxe Ocean View",
      rating: 5,
      comment:
        "Amazing room with beautiful ocean view. The staff was very friendly and helpful.",
      date: "2025-08-15",
    },
    {
      id: 2,
      roomName: "Standard Room",
      rating: 4,
      comment: "Good value for money. Clean and comfortable room.",
      date: "2025-07-20",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 min-h-[60vh]">
      <div className="flex items-center gap-3 mb-6">
        <MdRateReview className="text-3xl text-primary" />
        <h1 className="text-3xl font-bold">My Reviews</h1>
      </div>

      {reviews.length === 0 ? (
        <div className="text-center py-10">
          <MdRateReview className="text-6xl text-base-content/30 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-base-content/70">
            No reviews yet
          </h2>
          <p className="text-base-content/60">
            Start by booking a room and sharing your experience!
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="card-title text-lg">{review.roomName}</h3>
                    <div className="flex items-center gap-2 my-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <MdStar
                            key={i}
                            className={`text-lg ${
                              i < review.rating
                                ? "text-warning"
                                : "text-base-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-base-content/60">
                        {review.rating}/5
                      </span>
                    </div>
                    <p className="text-base-content/80 mb-2">
                      {review.comment}
                    </p>
                    <p className="text-sm text-base-content/60">
                      Reviewed on {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="dropdown dropdown-left">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-sm"
                    >
                      •••
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                      <li>
                        <a className="text-info">
                          <MdEdit /> Edit Review
                        </a>
                      </li>
                      <li>
                        <a className="text-error">
                          <MdDelete /> Delete Review
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
