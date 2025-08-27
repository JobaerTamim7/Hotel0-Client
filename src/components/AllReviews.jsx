import { useQuery } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa";
import useAxios from "../hooks/useAxios";
import Loading from "./Loading";

const AllReviews = ({ roomID }) => {
  const axiosInstance = useAxios();
  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews", roomID],
    queryFn: async () => {
      const response = await axiosInstance.get(`/reviews/${roomID}`);
      return response.data;
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!reviews || reviews.length === 0) {
    return <div className="text-center text-white">No reviews yet.</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-6">
      {reviews?.map((review, index) => (
        
        <div
          key={index}
          className="p-4 border rounded-lg bg-backgorund text-white"
        >
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < review.rating ? "text-yellow-500" : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-sm">({review.rating} Stars)</span>
          </div>
          <p className="text-sm mt-2">{review.userEmail}</p>
          <p className="mt-2">{review.comment}</p>
          <p className="mt-2 text-sm">
            Reviewed on {new Date(review.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllReviews;
