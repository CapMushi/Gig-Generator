'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const dummyReviews = [
    { stars: 5, text: "Amazing experience! Highly recommend it." },
    { stars: 4, text: "Great team, very professional." },
    { stars: 3, text: "It was good, but there is room for improvement." },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Top Section - Form */}
      <section className="flex flex-col lg:flex-row flex-1 min-h-[80vh]">
        {/* Left side - black */}
        <div className="bg-black text-white flex flex-col justify-center items-center p-10 w-full lg:w-1/2">
          <h1 className="text-5xl font-bold mb-4 text-center animate-bounce">Leave a review!</h1>
          <p className="text-lg text-gray-400 text-center">Let us know what you think of our work!</p>
        </div>

        {/* Right side - blue with form */}
        <div className="bg-[#2F43A6] flex flex-col justify-center items-center p-10 w-full lg:w-1/2">
          <form className="w-full max-w-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md text-black bg-white"
            />
            <textarea
              placeholder="Your Review"
              className="w-full px-4 py-2 rounded-md text-black bg-white"
              rows={4}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            {/* Stars */}
            <div className="flex justify-center gap-2 py-4">
              {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                    className="transition-transform duration-200 hover:scale-125"
                  >
                    <FaStar
                      size={30}
                      className={
                        ratingValue <= (hover || rating)
                          ? "text-yellow-400"
                          : "text-white"
                      }
                    />
                  </button>
                );
              })}
            </div>
            <button
              type="submit"
              className="bg-white text-[#2F43A6] px-6 py-2 rounded-md font-semibold hover:opacity-90"
            >
              Submit Review
            </button>
          </form>
        </div>
      </section>

      {/* Reviews Display Section */}
      <section className="bg-white py-16 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-black">What others are saying</h2>
        {dummyReviews.map((review, idx) => (
          <ReviewCard key={idx} stars={review.stars} text={review.text} />
        ))}
      </section>

      <Footer />
    </main>
  );
}
