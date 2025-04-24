import TeamCard from "./TeamCard";

// Team member data
const teamMembers = [
  {
    name: "Muiz Khan",
    bio: "Born and raised in the icy swamps of Peshawar. Muiz Khan was no stranger to danger",
    image: "/duck.png", // Add this image to /public
  },
  {
    name: "Taha Umar",
    bio: "Lomri bhi taha umar ko kehti 'thas fished up'",
    image: "/cat.png",
  },
  {
    name: "Hamza Afzal",
    bio: "Once he killed a Siraiki with his eyelash muscles",
    image: "/duck.png",
  },
  {
    name: "Ammad Ali",
    bio: "Ye banda interviewer se bhi GPA chupata",
    image: "/cat.png",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#2F43A6] px-4 py-6 space-y-6">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={index}
          name={member.name}
          bio={member.bio}
          image={member.image}
        />
      ))}
    </section>
  );
}
