import React from "react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
  learnMoreLink?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  role,
  description,
  learnMoreLink,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-br from-white to-[#F0F4FF] border border-[#dce3ff] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 w-full h-[400px] transform hover:-translate-y-2 rounded-xl">
      {/* Image Section */}
      <div className="md:w-1/2 w-full h-[400px] flex items-center justify-center bg-white p-0">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      {/* Info Section */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-between text-black h-[400px]">
        <div>
          <h3 className="text-2xl font-bold">{name}</h3>
          <hr className="my-2 border-[#94a3ff] w-20" />
          <p className="text-gray-600 font-semibold mb-2">{role}</p>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-end mt-4">
          {learnMoreLink ? (
            <a
              href={learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          ) : (
            <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300">
              Learn More
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
