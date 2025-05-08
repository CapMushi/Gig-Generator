"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-black text-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-6 text-gray-300">
          Let's get in touch! Fill out the form below and I'll get back to you as soon as possible.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-400 text-[#2F43A6] px-6 py-2 rounded hover:bg-orange-500 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
