'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function PricingInstructionsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission delay
    setTimeout(() => {
      setSubmitted(true);
      // Reset the form after a delay
      setTimeout(() => setSubmitted(false), 3000);
    }, 500);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#e0f2fe] via-[#dbeafe] to-[#e0e7ff] text-gray-800 px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
          {/* Animated header section with logo */}
          <motion.div
            className="flex items-center gap-6 bg-[#1e3a8a] px-6 py-4 rounded-2xl shadow-lg w-full max-w-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-[#0f172a] p-3 rounded-xl shadow-md"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <img
                src="/images/logo.png"
                alt="Gig Generator Logo"
                className="w-24 h-24 object-contain"
              />
            </motion.div>
            <div className="flex flex-col text-left">
              <h1 className="text-white text-3xl font-extrabold">Gig Generator</h1>
              <p className="text-white text-sm opacity-80">Your academic & creative partner</p>
            </div>
            <img
              src="/images/duck.png"
              alt="Duck Mascot"
              className="w-20 lg:w-24 animate-bounce ml-auto hidden sm:block"
            />
          </motion.div>

          <motion.h2
            className="text-4xl font-extrabold text-center text-[#1e3a8a]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pricing & Instructions
          </motion.h2>

          <div className="bg-white shadow-xl rounded-2xl p-8 w-full space-y-8 border border-blue-100">
            <section>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">⏳ Time Required</h3>
              <p>Most tasks take between <strong>2–5 days</strong>. We provide a final timeline after reviewing your gig submission.</p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">💵 Pricing & Advance</h3>
              <p>Prices depend on task complexity. We require an <strong>advance (30–50%)</strong> after discussion and agreement.</p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">📜 Refund Policy</h3>
              <p>If we cannot complete your task, your <strong>advance will be refunded in full</strong>. You will be informed <strong>at least 2 days</strong> before your deadline.</p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">📇 Task Manager Contact</h3>
              <p>
                <strong>Name:</strong> Hamza Afzal<br />
                <strong>Role:</strong> Assignment Manager<br />
                <strong>Email:</strong> <a href="mailto:support@giggenerator.com" className="text-blue-700 underline">support@giggenerator.com</a><br />
                <strong>WhatsApp:</strong> 0341 9696 709
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">📝 Price Negotiation</h3>
              <p>Found our price too high? You can send us a feedback request to reconsider:</p>
              <form className="mt-4 space-y-4 relative" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
                <textarea
                  rows={4}
                  placeholder="Explain your concern"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#153179] transition"
                >
                  Submit Request
                </button>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 flex flex-col items-center justify-center rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.img
                        src="/images/duck.png"
                        alt="Success Duck"
                        className="w-24 h-24 mb-4 animate-bounce"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <motion.h4
                        className="text-xl font-bold text-blue-800"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2 }}
                      >
                        Feedback Submitted!
                      </motion.h4>
                      <p className="text-gray-600 mt-2 text-center">
                        Thank you for your input. We'll review your request and get back to you soon.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
