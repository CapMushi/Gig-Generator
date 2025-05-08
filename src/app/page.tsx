import Header from "../components/Header";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#2F43A6] text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-0 px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-12 text-left">
          {/* Logo */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/images/logo.png"
              alt="Gig Generator Logo"
              className="w-72 lg:w-96 xl:w-[28rem]"
            />
          </div>

          {/* Text Block */}
          <div className="w-full lg:w-1/2 max-w-xl lg:max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold flex flex-col items-start gap-2 animate-fade-in">
              <div className="flex items-center gap-2">
                <span
                  className="text-5xl lg:text-6xl text-white"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  G
                </span>
                <span className="text-5xl lg:text-6xl">IG-</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-5xl lg:text-6xl">GENERAT</span>
                <img
                  src="/icons/cog.svg"
                  alt="Cog Icon"
                  className="inline w-14 lg:w-16 h-14 lg:h-16 animate-spin"
                />
                <span className="text-5xl lg:text-6xl">R</span>
              </div>
            </h1>
            <p className="mt-6 text-base lg:text-lg xl:text-xl animate-fade-in delay-200 tracking-widest leading-normal max-w-md">
              Stuck on an assignment? Call the pros who’ve already <br />
              <span className="block">cried, crumbled, and conquered —</span>
              <span className="block">
                you don’t have to rot your brain too!
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Meet The Team Header with Triangle */}
      <section className="relative bg-black text-white text-center overflow-visible">
        {/* Responsive Centered Text */}
        <div className="flex items-center justify-center h-16 sm:h-20 md:h-18">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
            MEET THE TEAM
          </h2>
        </div>

        {/* Attached Triangle */}
        <div
          className="absolute left-1/2 bottom-0 transform translate-y-full -translate-x-1/2 w-0 h-0 
               border-l-[16px] border-r-[16px] border-t-[16px] 
               border-l-transparent border-r-transparent border-t-black"
        ></div>
      </section>

      <TeamSection />
      <Footer />
    </main>
  );
}
