// File: src/components/TeamCard.tsx

// Props interface to ensure proper typing
interface TeamCardProps {
  name: string;
  bio: string;
  image: string;
}

// Functional Component for Team Card
export default function TeamCard({ name, bio, image }: TeamCardProps) {
  return (
    <div className="bg-[#D9D9D9] rounded-xl p-4 flex items-center justify-between max-w-3xl mx-auto border-4 border-black">
      {/* Left character icon */}
      <img src={image} alt={name} className="w-16 h-16" />

      {/* Middle text content */}
      <div className="flex-1 px-4 text-left">
        <h3 className="font-bold text-black">{name}</h3>
        <p className="text-sm text-gray-800">{bio}</p>
        <a href="#" className="text-blue-600 text-xs underline">
          learn more
        </a>
      </div>

      {/* Right character icon (mirroring left) */}
      <img src={image} alt={name} className="w-16 h-16" />
    </div>
  );
}
