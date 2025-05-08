export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#FFEBDD] to-[#FFFFFF] text-black mt-0 w-full rounded-t-3xl px-6 py-4 sm:py-5 md:py-6 shadow-md font-sans">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        {/* Left: Logo and Website Name */}
        <div className="flex items-center gap-3 justify-center lg:justify-start">
          <img
            src="/images/logo-black.png"
            alt="Gig Generator Logo"
            className="w-10 h-10 object-contain hover:rotate-3 hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center lg:text-left">
            <p className="text-base font-semibold">Gig Generator</p>
            <p className="text-xs text-gray-500 font-light">
              © 2025 All rights reserved
            </p>
          </div>
        </div>

        {/* Center: Message */}
        <div className="text-center">
          <p className="font-medium text-sm lg:text-base">
            Made with 🖤 by FAST Students
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-center lg:gap-4">
          <div className="hidden lg:block h-6 border-l-2 border-black" />
          <span className="text-[15px] font-bold">Follow Along</span>
          <div className="flex gap-4">
            {[
              { src: "/icons/instagram.svg", alt: "Instagram" },
              { src: "/icons/linkedin.svg", alt: "LinkedIn" },
              { src: "/icons/whatsapp.svg", alt: "WhatsApp" },
            ].map((icon) => (
              <img
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                className="w-6 h-6 hover:scale-110 transition-transform duration-200 ease-in-out"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
