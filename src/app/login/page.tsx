"use client";

import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen font-sans">
      {/* Left Section */}
      <div className="w-1/2 bg-blue-800 text-white flex flex-col p-8 relative">
        {/* Top Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">GIG-GENERATOR</h1>
        </Link>

        {/* Center Section */}
        <div className="flex flex-col items-left justify-center flex-grow space-y-16 mt-20">
          {/* Cat Section */}
          <div className="relative text-center">
            <Image
              src="/images/smiling_cat.png"
              alt="Cat"
              width={250}
              height={250}
            />
            <div className="absolute -top-1 -right-[-190px] bg-white text-black text-sm px-8 py-4 rounded-full border border-black font-irish">
              Back again, Huh? <br /> Let’s get you In!
              <div className="absolute -bottom-4 left-1 w-4 h-4 bg-white rounded-full border border-black"></div>
            </div>
          </div>

          {/* Duck Section */}
          <div className="relative text-center">
            <Image src="/images/duck.png" alt="Duck" width={250} height={250} />
            <div className="absolute -top-4 -right-[-130px] bg-white text-black text-sm px-8 py-4 rounded-full border border-black font-irish">
              Don’t have an account yet? <br /> Go Sign Up!
              <div className="absolute -bottom-4 left-1 w-4 h-4 bg-white rounded-full border border-black"></div>
            </div>
          </div>
        </div>

        {/* Socials at Bottom */}
        <div className="mt-5 text-sm">
          <p className="text-center mb-2">Follow Along</p>
          <div className="flex justify-center space-x-4">
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
            />
            <Image
              src="/icons/whatsapp.svg"
              alt="WhatsApp"
              width={20}
              height={20}
            />
          </div>
        </div>

        {/* Centered Login/Signup Buttons on the partition */}
        <div className="absolute top-1/2 right-[-1px] transform -translate-y-1/2 flex flex-col items-center space-y-4 z-10">
          <Link href="/login">
            <button className="bg-white text-blue-800 font-semibold px-10 py-2 rounded">
              LOGIN
            </button>
          </Link>
          <Link href="/signup">
            <button className="text-white font-semibold px-8 py-2 rounded">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-peach-50 p-16 flex flex-col justify-center items-center">
        <div className="p-4 rounded-md">
          <Image
            src="/images/bold_logo.png"
            alt="Main Icon"
            width={300}
            height={280}
          />
        </div>
        <h2 className="text-2xl font-bold mt-4 mb-6">GIG-GENERATOR</h2>
        <LoginForm />
      </div>
    </div>
  );
}
