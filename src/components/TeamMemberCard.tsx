// File: src/components/TeamMemberCard.tsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface MemberProps {
  name: string;
  image: string;
  quote: string;
  source: string;
  about: string;
  github: string;
  linkedin: string;
  color: string;
}

const TeamMemberCard: React.FC<MemberProps> = ({
  name,
  image,
  quote,
  source,
  about,
  github,
  linkedin,
  color,
}) => {
  return (
    <div
      className={`relative rounded-2xl shadow-lg p-6 w-full flex flex-col md:flex-row items-center gap-6 border-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${color}`}
    >
      {/* Top-right GIF (giphy.webp) */}
      <img
        src="/images/giphy.webp"
        alt="GIF"
        className="absolute top-4 right-4 w-30 h-22 rounded-lg z-10"
      />

      {/* Profile Picture */}
      <div className="flex-shrink-0">
        <div className={`w-32 h-32 rounded-full overflow-hidden border-4 ${color.split(" ")[1]}`}>
          <img
            src={image}
            alt={`${name} Profile`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Member Details */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="italic text-gray-600">“{quote}”</p>
        <p className="text-sm text-gray-500 mb-2">- {source}</p>

        <div className="bg-[#fdecea] p-4 rounded-xl mt-4 flex items-center gap-4 w-[50rem] max-w-full">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1">A few words:</h3>
            <p className="text-sm leading-relaxed">{about}</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
