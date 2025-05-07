"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SubmitGigPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Form fields
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/gigs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        description,
        whatsapp,
        deadline,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setFormSubmitted(true);
    } else {
      alert("Something went wrong: " + result.error);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
        <section className="bg-[#1e3a8a] text-white p-10 flex flex-col justify-center items-center gap-6 relative overflow-hidden">
          <motion.img
            src="/images/logo.png"
            alt="Logo"
            className="w-32 lg:w-40 mb-2 cursor-pointer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <img
            src="/images/duck.png"
            alt="Mascot Duck"
            className="w-20 lg:w-24 animate-bounce"
          />
          <h2 className="text-4xl font-extrabold text-center leading-tight mt-4">
            Post a Gig Request
          </h2>
          <p className="text-center max-w-md text-lg text-blue-100">
            Need help? Post your gig, and we’ll reach out via WhatsApp to get
            started.
          </p>
          <div className="absolute w-40 h-40 bg-white rounded-full top-16 left-10 opacity-10 blur-2xl animate-pulse"></div>
        </section>

        <section className="bg-white p-6 lg:p-12 flex flex-col justify-center shadow-xl">
          {formSubmitted ? (
            <div className="max-w-xl mx-auto text-center space-y-6 animate-fade-in">
              <img
                src="/images/mascot-cat.png"
                alt="Mascot Cat"
                className="w-24 mx-auto animate-bounce"
              />
              <h3 className="text-2xl font-bold text-[#1e3a8a]">
                Submission Received!
              </h3>
              <p className="text-base text-gray-700">
                We will reach out to your WhatsApp number shortly to get started!
              </p>
            </div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 max-w-xl mx-auto animate-fade-in"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-semibold text-gray-800">
                    Gig Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-[#1e3a8a]"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-gray-800">
                    Category
                  </label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-[#1e3a8a]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-semibold text-gray-800">
                  Description
                </label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-[#1e3a8a]"
                  required
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-semibold text-gray-800">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    pattern="\+?[0-9]{10,15}"
                    placeholder="+923001234567"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-[#1e3a8a]"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-gray-800">
                    Deadline
                  </label>
                  <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-[#1e3a8a]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-semibold text-gray-800">
                  Upload Task File
                </label>
                <input type="file" className="w-full text-sm" disabled />
                {/* You can implement file upload later */}
              </div>

              <motion.button
                type="submit"
                className="bg-[#1e3a8a] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#172b66] transition duration-300 ease-in-out transform hover:scale-105"
                whileTap={{ scale: 0.95 }}
              >
                Submit Gig
              </motion.button>
            </motion.form>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
