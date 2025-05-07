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

const DashboardPage = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen px-6 py-10 bg-[#2F43A6] text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Gig Dashboard</h1>

        {/* Gig Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {gigs.length > 0 ? (
            gigs.map((gig) => (
              <motion.div
                key={gig.id}
                className="bg-white text-black rounded-2xl shadow-md p-6 border-l-8"
                style={{
                  borderColor: gig.status === 'Completed' ? '#3bb36b' : '#f59e0b',
                }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-4">
                  <Image src={gig.icon} alt="Icon" width={40} height={40} />
                  <h2 className="text-xl font-semibold">{gig.title}</h2>
                </div>
                <p className="mt-2 text-sm text-gray-700">{gig.description}</p>
                <p
                  className={`mt-4 inline-block text-xs font-bold px-3 py-1 rounded-full ${
                    gig.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {gig.status}
                </p>
              </motion.div>
            ))
          ) : (
            <div className="text-center">
              <Image
                src="/icons/undraw_no-data_ig65.svg"
                alt="No gigs"
                width={300}
                height={300}
                className="mx-auto"
              />
              <p className="mt-4 text-gray-300">No gigs submitted yet. Get started!</p>
            </div>
          )}
        </div>

        {/* Funny Cat Section */}
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ rotate: -10, y: 10 }}
            animate={{ rotate: 0, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/images/cat.png" alt="Funny Cat" width={180} height={180} className="rounded-xl" />
          </motion.div>
          <p className="text-center text-sm text-[#d1d5ff] italic">
            "Keep grinding... even if you're not feline it today!"
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DashboardPage;
