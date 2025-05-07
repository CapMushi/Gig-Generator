'use client';

import SignUpForm from "@/components/SignUpForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="flex min-h-screen font-sans">
      {/* Left Section */}
      <div className="w-1/2 bg-blue-800 text-white flex flex-col p-8 relative">
        {/* Top Logo */}
        <div>
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">GIG-GENERATOR</h1>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-left justify-center flex-grow space-y-16 mt-20">
          {/* Cat Section */}
          <div className="relative text-center">
            <Image src="/images/smiling_cat.png" alt="Cat" width={250} height={250} />
            <div className="absolute -top-1 -right-[-190px] bg-white text-black text-sm px-8 py-4 rounded-full border border-black font-irish">
              Welcome! <br /> Join the Club!
              <div className="absolute -bottom-4 left-1 w-4 h-4 bg-white rounded-full border border-black"></div>
            </div>
          </div>

          {/* Duck Section */}
          <div className="relative text-center">
            <Image src="/images/duck.png" alt="Duck" width={250} height={250} />
            <div className="absolute -top-4 -right-[-140px] bg-white text-black text-sm px-6 py-8 rounded-full border border-black font-irish">
              Already have an account? <br /> Go Log In!
              <div className="absolute -bottom-4 left-1 w-4 h-4 bg-white rounded-full border border-black"></div>
            </div>
          </div>
        </div>

        {/* Socials at Bottom */}
        <div className="mt-5 text-sm">
          <p className="text-center mb-2">Follow Along</p>
          <div className="flex justify-center space-x-4">
            <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
          </div>
        </div>

        {/* Centered Login/Signup Buttons on the partition */}
        <div className="absolute top-1/2 right-[-1px] transform -translate-y-1/2 flex flex-col items-center space-y-4 z-10">
          <Link href="/login">
            <button className="text-white font-semibold px-8 py-2 rounded">
              LOGIN
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-white text-blue-800 font-semibold px-10 py-2 rounded">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-peach-50 p-16 flex flex-col justify-center items-center">
        {formSubmitted ? (
          <div className="max-w-xl mx-auto text-center space-y-6 animate-fade-in">
            <Image src="/images/duck.png" alt="Mascot Duck" width={96} height={96} className="mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold text-blue-800">Sign-Up Successful!</h3>
            <p className="text-base text-gray-700">
              Welcome aboard! You're all set to start using Gig-Generator.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mt-4 mb-6">GIG-GENERATOR</h2>
            <SignUpForm onSubmit={() => setFormSubmitted(true)} />
          </>
        )}
      </div>
    </div>
  );
}
