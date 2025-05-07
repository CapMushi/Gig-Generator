import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TeamMemberCard from "@/components/TeamMemberCard";

export default function About() {
  const members = [
    {
      name: "Muiz Ul Islam Khan",
      image: "/images/muiz.jpg",
      quote: "I'm not lazy, I'm just buffering.",
      source: "lifehack",
      about:
        "I'm passionate about full-stack development — from setting up Node.js APIs to crafting clean, reactive UIs with Next.js. I live for solving problems and debugging at 2AM.",
      color: "bg-white border-[#2F43A6] text-black",
      github: "https://github.com/muiz",
      linkedin: "https://linkedin.com/in/muiz",
    },
    {
      name: "Hamza Afzal",
      image: "/images/Hamza.png",
      quote: "Talk is cheap. Show me the code.",
      source: "Monkey D Luffy",
      about:
        "I specialize in frontend wizardry. Tailwind CSS and React are my go-to tools for building beautiful, responsive, and interactive user interfaces that don’t just work — they shine.",
      color: "bg-[#FDF6E3] border-yellow-500 text-black",
      github: "https://github.com/hamza",
      linkedin: "https://linkedin.com/in/hamza",
    },
    {
      name: "Ammad Ali",
      image: "/images/ammad.jpg",
      quote: "There’s no place like 127.0.0.1",
      source: "pubity",
      about:
        "I'm fascinated by backend systems and scalable architectures. Whether it's optimizing MongoDB queries or building RESTful APIs, I love making things efficient and reliable.",
      color: "bg-[#E0F7FA] border-cyan-600 text-black",
      github: "https://github.com/ammad",
      linkedin: "https://linkedin.com/in/ammad",
    },
    {
      name: "Taha Umar",
      image: "/images/taha.jpg",
      quote: "In a world of syntax errors, be a semicolon.",
      source: "VS Code",
      about:
        "Cybersecurity and systems programming are where I thrive. I enjoy digging into C++, memory management, and finding creative (but ethical!) ways to break and secure systems.",
      color: "bg-[#F3E5F5] border-purple-500 text-black",
      github: "https://github.com/taha",
      linkedin: "https://linkedin.com/in/taha",
    },
    {
      name: "Mustafa Sajid",
      image: "/images/mustafa.jpg",
      quote: "I turn coffee into algorithms.",
      source: "Stack Overflow",
      about:
        "Data structures, algorithms, and solving complex Leetcode problems are my jam. I enjoy breaking down logic and writing clean, efficient code in both C++ and Python.",
      color: "bg-[#FFF3E0] border-orange-500 text-black",
      github: "https://github.com/mustafa",
      linkedin: "https://linkedin.com/in/mustafa",
    },
  ];

  return (
    <main className="bg-[#2F43A6] text-white min-h-screen flex flex-col">
      <Header />
      <section className="flex flex-col items-center justify-start py-12 px-6 flex-1 overflow-y-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8">About Us</h1>
        <div className="flex flex-col gap-8 items-center w-full max-w-5xl">
          {members.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}