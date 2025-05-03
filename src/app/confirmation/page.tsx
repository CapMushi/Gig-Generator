'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function GigConfirmationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#dbeafe] via-[#f0f9ff] to-[#fefce8] px-4 text-center relative overflow-hidden">
        <motion.div
          className="bg-white shadow-2xl rounded-3xl p-10 max-w-xl w-full relative z-10 border border-blue-200"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="text-green-500 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 8 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <h1 className="text-4xl font-bold text-[#1d4ed8] mb-4">Gig Submitted!</h1>
          <p className="text-gray-700 text-lg mb-6">
            Your request was sent successfully. We'll get in touch with you on WhatsApp soon. Thanks for trusting <span className="font-semibold text-[#1e3a8a]">Gig Generator</span>!
          </p>
          <img src="/images/mascot-cat.png" alt="Mascot" className="w-24 mx-auto animate-bounce" />
        </motion.div>

        {/* Simple falling dots using Tailwind animation */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-[fall_3s_linear_infinite] absolute top-0 left-[10%]"></div>
          <div className="w-2 h-2 bg-yellow-300 rounded-full animate-[fall_3s_linear_infinite_0.2s] absolute top-0 left-[30%]"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-[fall_3s_linear_infinite_0.4s] absolute top-0 left-[50%]"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-[fall_3s_linear_infinite_0.6s] absolute top-0 left-[70%]"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-[fall_3s_linear_infinite_0.8s] absolute top-0 left-[90%]"></div>
        </div>

        <style jsx global>{`
          @keyframes fall {
            0% {
              transform: translateY(-20px) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
