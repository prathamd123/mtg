import React, { useState } from "react";
import "../index.css";
import "../font.css";

const baseImages = [
  { src: "/1.png", title: "Mountains", desc: "Peaceful view of the mountains." },
  { src: "/2.png", title: "Ocean", desc: "Waves crashing onto the shore." },
  { src: "/3.png", title: "Forest", desc: "Nature’s untouched beauty." },
  { src: "/4.png", title: "Desert", desc: "The golden dunes of the desert." },
  { src: "/5.png", title: "City", desc: "Skyscrapers touching the clouds." },
  { src: "/6.png", title: "Valley", desc: "Green valleys and rivers flowing." },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = baseImages.length;

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);
  const getIndex = (offset) => (current + offset + total) % total;

  return (
    <div className="w-full flex flex-col items-center relative overflow-hidden px-2 sm:px-4">
      {/* Heading */}
      <h1 style={{ fontFamily: 'Epika' }} className="metalic text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D4AF37] font-extrabold z-40 text-center mb-4 mt-4">
        Scholarships
      </h1>

      {/* Navigation Buttons */}
      <button
  onClick={prev}
  className="absolute left-2 sm:left-4 md:left-6 top-[55%] z-40 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg hover:bg-[#EAB308] transition-all duration-300 flex items-center justify-center"
>
  <span className="text-3xl sm:text-3xl md:text-4xl pb-3 text-black leading-none">
    ‹
  </span>
</button>

<button
  onClick={next}
  className="absolute right-2 sm:right-4 md:right-6 top-[55%] z-40 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg hover:bg-[#EAB308] transition-all duration-300 flex items-center justify-center"
>
  <span className="text-3xl sm:text-3xl md:text-4xl pb-3 text-black leading-none">
    ›
  </span>
</button>


      {/* Carousel */}
      <div className="flex flex-row items-center justify-center w-full gap-2 sm:gap-1 md:gap-2 mb-6">
        {/* Left Image */}
        <div className="w-[25%] sm:w-[20%] opacity-50 scale-90 transition-all duration-700 relative">
          <img
            src={baseImages[getIndex(-1)].src}
            alt=""
            className="w-full h-[150px] sm:h-[250px] md:h-[400px] object-cover rounded-xl shadow-lg"
          />
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
            <HexButton />
          </div>
        </div>

        {/* Center Image */}
        <div className="w-[50%] sm:w-[65%] relative transition-all duration-700">
          <img
            src={baseImages[current].src}
            alt=""
            className="w-full h-[180px] sm:h-[300px] md:h-[550px] object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
            <HexButton />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[25%] sm:w-[20%] opacity-50 scale-90 transition-all duration-700 relative">
          <img
            src={baseImages[getIndex(1)].src}
            alt=""
            className="w-full h-[150px] sm:h-[250px] md:h-[400px] object-cover rounded-xl shadow-lg"
          />
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
            <HexButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function HexButton() {
  return (
    <button className="hex-button px-3 py-4 sm:px-4 sm:py-2 text-white bg-[#Ea8306] rounded-md font-semibold text-xs sm:text-sm hover:scale-110 transition-transform duration-300">
      Apply Now
    </button>
  );
}
