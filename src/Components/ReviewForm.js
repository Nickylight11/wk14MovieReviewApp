import { useState } from "react";
import ReviewList from "./ReviewList";
import stars from "./Stars";

const ReviewForm = ({ value, movie, hostReviews }) => {
  const [review, setReview] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);
  const [reviews, setReviews] = useState([]);

  const onChange = () => {
    const textAreaData = document.getElementById(
      `review-textarea-${movie.id}`
    ).value;
    setReview(textAreaData);
    hostReviews();
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Simulate a successful submission
    const newReview = {
      id: Date.now(), // Use a unique identifier, you can customize this
      text: review,
    };

    // Update the list of reviews
    setReviews([...reviews, newReview]);

    // Reset the review text and submit status
    setReview("");
    setSubmitStatus("success");
  };

  return (
    <div>
      <h3>Review Form</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor={`review-textarea-${movie.id}`}>Leave a Review:</label>
        <textarea
          id={`review-textarea-${movie.id}`}
          name="story"
          rows="5"
          cols="33"
          value={review}
          onChange={onChange}
        />
        <button type="submit">Submit Review</button>
      </form>
      {submitStatus && (
        <p>
          {submitStatus === "success"
            ? "Review submitted successfully!"
            : "Failed to submit review. Please try again."}
        </p>
      )}

      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ReviewForm;
