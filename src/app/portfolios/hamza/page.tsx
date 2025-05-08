// File: src/app/portfolios/hamza/page.tsx

"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef } from "react";

export default function HamzaPortfolio() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-[#2F43A6] text-white min-h-screen flex flex-col">
      <Header />

      <section className="flex flex-col md:flex-row items-center justify-center flex-1 px-6 py-12 max-w-7xl mx-auto gap-12">
        {/* Left Side - Text Content */}
        <div className="flex-1">
          <p className="text-lg font-semibold">Hi</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            I'm <span className="text-orange-400">Hamza</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            a Frontend Developer
          </h2>

          <p className="mt-6 text-gray-200 max-w-xl">
            I specialize in creating stunning and responsive UIs using React and Tailwind CSS.
            My goal is always to blend functionality with aesthetic appeal — turning complex
            layouts into pixel-perfect designs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="bg-white text-[#2F43A6] px-6 py-2 rounded-md hover:opacity-90 font-semibold"
            >
              Hire Me
            </button>
            <button className="bg-orange-400 text-[#2F43A6] px-6 py-2 rounded-md hover:bg-orange-500 font-semibold">
              Experience
            </button>
          </div>
        </div>

        {/* Right Side - Circular Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/Hamza.png"
            alt="Hamza Afzal"
            className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-white"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="bg-black text-white py-12 px-6 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-[#2F43A6] font-semibold px-6 py-2 rounded-md"
          >
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
