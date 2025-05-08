"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Simulated user type
  const userType: "client" | "team" = "client"; // Change to "team" if needed

  return (
    <header className="bg-white text-black shadow-md py-3 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-4">
        {/* Hamburger icon with hover animation */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hover:scale-110 transition-transform duration-200"
            aria-label="Menu"
          >
            <Bars3Icon className="h-7 w-7 text-[#2F43A6]" />
          </button>

          {menuOpen && (
            <div className="absolute left-0 mt-2 w-44 bg-white/80 backdrop-blur-md border border-[#2F43A6] rounded-lg shadow-xl z-50">
              <DropdownLink
                href={userType === "client" ? "/Dashboard" : "/admin"}
                label="My Gigs"
              />
              <hr className="border-t border-[#2F43A6] opacity-30 my-1" />
              <DropdownLink href="/pricing-instructions" label="Instructions" />
            </div>
          )}
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-blue.png"
            alt="Gig Generator Logo"
            width={100}
            height={32}
            className="object-contain max-h-8"
            priority
          />
        </Link>
      </div>

      {/* Navigation Buttons */}
      <nav className="space-x-2">
        <NavButton href="/" label="HOME" active={pathname === "/"} />
        <NavButton href="/about" label="ABOUT" active={pathname === "/about"} />
        <NavButton
          href="/submit-gig"
          label="GIG-GEN"
          active={pathname === "/gig-gen"}
        />
        <NavButton
          href="/signup"
          label="SIGN UP"
          active={pathname === "/contact"}
        />
      </nav>
    </header>
  );
}

interface NavButtonProps {
  href: string;
  label: string;
  active: boolean;
}

function NavButton({ href, label, active }: NavButtonProps) {
  return (
    <Link href={href}>
      <button
        className={`px-4 py-1 rounded-full text-sm font-semibold border ${
          active
            ? "bg-[#2F43A6] text-white"
            : "border-[#2F43A6] text-[#2F43A6] hover:bg-[#2F43A6] hover:text-white transition"
        }`}
      >
        {label}
      </button>
    </Link>
  );
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}>
      <div className="px-4 py-2 text-sm hover:bg-[#2F43A6] hover:text-white transition cursor-pointer">
        {label}
      </div>
    </Link>
  );
}
