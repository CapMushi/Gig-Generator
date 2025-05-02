// File: src/app/about/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  const members = [
    {
      name: "Muiz Ul Islam Khan",
      image: "/images/muiz.jpg",
      quote: "you have to fight through some bad days to earn the best days of your life",
      source: "lifehack",
      about: "Im like a chameleon, the only diff is that I change careers instead of colors. I've even got a long toungue",
      color: "bg-white border-[#2F43A6] text-black",
    },
    {
      name: "Hamza Afzal",
      image: "/images/Hamza.png",
      quote: "Its better to piss on than to be pissed on",
      source: "Monkey D Luffy",
      about: "I am like, 88 percent sure theres some sort of drug activity going on in Breaking Bad, dont spoil pls",
      color: "bg-[#FDF6E3] border-yellow-500 text-black",
    },
    {
      name: "Ammad Ali",
      image: "/images/ammad.jpg",
      quote: "giraffes are tall as shi",
      source: "pubity",
      about: "I like ",
      color: "bg-[#E0F7FA] border-cyan-600 text-black",
    },
    {
      name: "Taha Umar",
      image: "/images/taha.jpg",
      quote: "...",
      source: "...",
      about: "...",
      color: "bg-[#F3E5F5] border-purple-500 text-black",
    },
    {
      name: "Mustafa Sajid",
      image: "/images/mustafa.jpg",
      quote: "...",
      source: "...",
      about: "...",
      color: "bg-[#FFF3E0] border-orange-500 text-black",
    },
  ];
  

  return (
    <main className="bg-[#2F43A6] text-white min-h-screen flex flex-col">
      <Header />

      <section className="flex flex-col items-center justify-start py-12 px-6 flex-1 overflow-y-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8">About Us</h1>

        <div className="flex flex-col gap-8 items-center w-full max-w-5xl">
        {members.map(({ name, image, quote, source, about, color }) => (
  <div
    key={name}
    className={`rounded-2xl shadow-lg p-6 w-full flex flex-col md:flex-row items-center gap-6 border-4 ${color}`}
  >
    {/* Profile Picture */}
    <div className="flex-shrink-0">
      <div className={`w-32 h-32 rounded-full overflow-hidden border-4 ${color.split(" ")[1]}`}>
        <img
          src={image}
          alt={`${name} Profile`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

              {/* Member Details */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="italic text-gray-600">“{quote}”</p>
                <p className="text-sm text-gray-500 mb-2">- {source}</p>

                <div className="bg-[#fdecea] p-4 rounded-xl mt-4 flex items-center gap-4 w-[50rem] max-w-full">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">A few words:</h3>
                    <p className="text-sm leading-relaxed">{about}</p>
                  </div>
                  <img
                    src="/images/inspiration-placeholder.png"
                    alt="Inspiration"
                    className="w-24 h-24 object-cover rounded-xl hidden md:block"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
