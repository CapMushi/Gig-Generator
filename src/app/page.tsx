import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#2F43A6] text-white">
      <Header />

      {/* Logo under Header */}
      <div className="px-6 pt-6">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Hero Section */}
      <section className="flex items-center justify-center flex-col text-center py-32 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide">
          INNOVATE THE JOB HUNT
        </h1>
        <button className="flex items-center gap-2 bg-gradient-to-r from-white to-gray-300 text-[#2F43A6] font-semibold px-6 py-3 rounded-full hover:scale-105 hover:shadow-xl transition duration-300 animate-pulse">
          Let&apos;s get started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </section>

      {/* How It Works Section */}
      <section className="bg-black text-white py-20 px-6">
        <h2 className="text-4xl font-bold mb-12">HOW IT WORKS?</h2>

        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold">Step 1</h3>
              <p className="mt-2 text-gray-300">
                Upload your resume and let our AI do the matching.
              </p>
            </div>
            <div className="md:w-1/2 hidden md:flex justify-end"></div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2 hidden md:flex justify-start"></div>
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-semibold">Step 2</h3>
              <p className="mt-2 text-gray-300">
                Explore matching gigs curated just for your skills.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold">Step 3</h3>
              <p className="mt-2 text-gray-300">
                Apply directly and track your applications seamlessly.
              </p>
            </div>
            <div className="md:w-1/2 hidden md:flex justify-end"></div>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="bg-white text-black py-20 px-6">
        <h2 className="text-4xl font-bold mb-6">OUR OBJECTIVE:</h2>
        <p className="text-lg max-w-4xl">
          Our goal is to simplify and personalize the job hunt experience using
          AI-driven gig matching. We empower individuals by connecting them to
          opportunities that fit their unique skillsets.
        </p>
      </section>

      <Footer />
    </main>
  );
}
