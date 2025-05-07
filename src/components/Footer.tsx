// File: src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#FFEBDD] text-black mt-12 mx-4 rounded-xl px-6 py-3 shadow-md font-sans">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        {/* Left: Logo and Website Name */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo-black.png"
            alt="Gig Generator Logo"
            className="w-10 h-10 object-contain"
          />
          <div>
            <p className="text-base font-semibold">Gig Generator</p>
            <p className="text-xs text-gray-600">© 2025 All rights reserved</p>
          </div>
        </div>

        {/* Center: Message */}
        <div className="text-center">
          <p className="font-medium text-sm lg:text-base">
            Made with 🖤 by FAST Students
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4">
          <div className="h-6 border-l-2 border-black"></div>
          <span className="text-[15px] font-bold">Follow Along</span>
          <div className="flex gap-5">
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="w-6 h-6"
            />
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
