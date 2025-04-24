// File: src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#FFEBDD] w-full py-2 px-6 flex flex-col lg:flex-row justify-between items-center text-black">
      {/* Left: Logo */}
      <div className="mb-2 lg:mb-0">
        <img src="/logo.png" alt="Gig Generator Logo" className="w-10 h-10" />
      </div>

      {/* Right: Social */}
      <div className="flex flex-col items-center lg:flex-row lg:items-center gap-2 lg:gap-4">
        <div className="hidden lg:block border-l h-6 border-gray-400"></div>
        <span className="text-xs font-semibold">Follow Along</span>
        <div className="flex gap-4 items-center">
          <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
          <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
        </div>
      </div>
    </footer>
  );
}
