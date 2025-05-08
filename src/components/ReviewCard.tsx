import React from 'react';
import { FaStar } from 'react-icons/fa';

interface ReviewCardProps {
  stars: number;
  text: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ stars, text }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-4 max-w-xl w-full">
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-yellow-400 transition-transform ${
              i < stars ? 'opacity-100' : 'opacity-30'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-800">{text}</p>
    </div>
  );
};

export default ReviewCard;
