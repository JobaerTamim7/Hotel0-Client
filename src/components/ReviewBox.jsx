import { useForm, Controller } from "react-hook-form";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const ReviewForm = ({ roomID }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const axiosInstance = useAxios();
  const reviewMutation = useMutation({
    mutationKey: ["submitReview"],
    mutationFn: async (data) => {
      const response = await axiosInstance.post("/reviews", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Review submitted successfully!");
    },
    onError: (error) => {
      toast.error(`Failed to submit review: ${error.message}`);
    },
  });

  const onSubmit = (data) => {
    reviewMutation.mutate({
      rating: data.rating,
      comment: data.comment,
      roomId: roomID,
      userEmail: user.email,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-base-100 shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-semibold text-center text-white mb-4">
        Leave a Review
      </h2>

      {/* Rating Input */}
      <div className="mb-4">
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-white/60"
        >
          Rating (1 to 5)
        </label>
        <Controller
          name="rating"
          control={control}
          defaultValue={0}
          rules={{ required: "Please select a rating" }}
          render={({ field }) => (
            <Rating
              {...field}
              items={5}
              value={field.value}
              onChange={field.onChange}
              itemShapes="star"
              activeFillColor="#ffd700"
              inactiveFillColor="#e0e0e0"
            />
          )}
        />
        {errors.rating && (
          <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
        )}
      </div>

      {/* Comment Input */}
      <div className="mb-4">
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-white/60"
        >
          Comment
        </label>
        <textarea
          id="comment"
          rows="4"
          className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Write your review here..."
          {...register("comment", {
            required: "Please enter a comment",
            minLength: {
              value: 10,
              message: "Your comment must be at least 10 characters long",
            },
          })}
        />
        {errors.comment && (
          <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
