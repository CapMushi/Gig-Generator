"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white text-black shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold tracking-wide">Gig-Generator</div>

      <nav className="space-x-2">
        <NavButton href="/" label="HOME" active={pathname === "/"} />
        <NavButton href="/about" label="ABOUT" active={pathname === "/about"} />
        <NavButton
          href="/gig-gen"
          label="GIG-GEN"
          active={pathname === "/gig-gen"}
        />
        <NavButton
          href="/contact"
          label="CONTACT US"
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
