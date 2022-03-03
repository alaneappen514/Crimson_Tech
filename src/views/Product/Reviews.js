import React, { useState } from "react";

const Reviews = () => {
  const [review, setReview] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Review: ${review}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="pb-2 font-bold text-gray-800 dark:text-gray-100 ">
            Write Your Review
          </label>
          <textarea
            id="review"
            name="review"
            required
            className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm sm:text-base focus:outline-none focus:border-crimson-red resize-none placeholder-gray-500 text-gray-600"
            placeholder="Let the world know who you are"
            rows="5"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            value="Submit"
            className="bg-crimson-red text-white-smoke my-5 px-4 py-3 text-sm "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reviews;
