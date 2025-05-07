"use client";

import React from "react";
import TeamCard from "./TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [
  {
    image: "/images/duck.png",
    name: "Muiz Khan",
    role: "Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    image: "/images/cat.png",
    name: "Taha Umar",
    role: "Backend Developer",
    description:
      "Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
  },
  {
    image: "/images/duck.png",
    name: "Hamza Afzal",
    role: "UI/UX Designer",
    description:
      "Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
  },
  {
    image: "/images/cat.png",
    name: "Ammad Ali",
    role: "Full Stack Developer",
    description:
      "Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 bg-[#2F43A6]">
      <div className="max-w-7xl mx-auto">
        {/* Rounded Container with shadow */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Swiper Slider inside */}
          <Swiper
            navigation
            modules={[Navigation]}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <TeamCard {...member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
