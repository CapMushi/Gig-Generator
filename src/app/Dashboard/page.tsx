'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type Gig = {
  id: number;
  title: string;
  description: string;
  status: 'In Progress' | 'Completed';
  icon: string;
};

const gigs: Gig[] = [
  {
    id: 1,
    title: 'Design a Logo',
    description: 'Need a sleek, modern logo for a tech startup.',
    status: 'In Progress',
    icon: '/design-icon.svg',
  },
  {
    id: 2,
    title: 'Analyze Sales Data',
    description: 'Crunch the numbers for last quarter’s e-commerce sales.',
    status: 'Completed',
    icon: '/dataicon.svg',
  },
];

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-r from-[#2F43A6] to-[#1D2B65] text-white flex flex-col justify-start items-center px-4 py-8">

        {/* Animated Duck Logo */}
        <motion.div
          initial={{ rotate: -10, opacity: 0, y: -20 }}
          animate={{ rotate: 0, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="mb-6"
        >
          <Image
            src="/images/duck.png"
            alt="Duck Logo"
            width={80}
            height={80}
            className="rounded-full shadow-xl"
          />
        </motion.div>

        <motion.h1
          className="text-4xl font-extrabold mb-4 text-center tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to Your Gig Dashboard
        </motion.h1>

        {/* Gig Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full mb-6 px-2">
          {gigs.map((gig) => (
            <motion.div
              key={gig.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className={`p-5 rounded-xl shadow-lg bg-white text-black flex flex-col justify-between border-l-8 ${
                gig.status === 'Completed' ? 'border-green-500' : 'border-yellow-500'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Image src={gig.icon} alt="Icon" width={32} height={32} />
                <h2 className="text-xl font-semibold">{gig.title}</h2>
              </div>
              <p className="text-sm text-gray-700">{gig.description}</p>
              <span
                className={`mt-4 self-start text-xs px-3 py-1 rounded-full font-bold ${
                  gig.status === 'Completed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {gig.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Cool Message */}
        <motion.div
          className="mt-2 text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="italic text-[#c5cfff]">
            “Keep grinding… even if you're not *feline* it today!”
          </p>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
