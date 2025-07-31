import React, { useState } from "react";
import "../font.css";

const journeys = [
  {
    name: "Anjali Rao",
    text: "Studying in Europe was a dream, and Maitri helped turn it into reality. The counseling, interview prep, and support were incredible!",
    image: "/blog.jpg",
  },
  {
    name: "Rohit Sharma",
    text: "With Maitri’s constant support and step-by-step guidance, I was able to secure admission to my dream university in Canada.",
    image: "/b1.png",
  },
  {
    name: "Sneha Patel",
    text: "Maitri helped me through the visa process with ease. I never thought applying abroad could feel this smooth and empowering.",
    image: "/b2.jpg",
  },
];

function JourneyCard() {
  const [index, setIndex] = useState(0);
  const nextJourney = () => {
    setIndex((prev) => (prev + 1) % journeys.length);
  };

  const journey = journeys[index];

  return (
    <div className="w-full text-white font-cinzel px-4 py-10 relative overflow-hidden">
      {/* Heading */}
      <div className="flex justify-end pr-8">
        <div className="text-right w-full">
          <h2 className="text-2xl font-bold md:text-xl text-[#CA8304]">JOURNEY WITH</h2>
          <div className="w-full flex justify-end">
            <hr className="w-[92vw] max-w-full border-2 border-[#CA8304]" />
          </div>
          <h2 className="text-2xl font-bold md:text-xl text-[#CA8304]">MAITRI</h2>
        </div>
      </div>

      {/* Desktop/Tablet */}
      <div className="hidden md:flex relative max-w-5xl mx-auto mt-6 p-6 md:p-24 bg-[#3A2E2A] rounded-xl overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row h-full w-full">
          {/* Text Section */}
          <div className="flex-1 bg-[#ca81049a] text-black px-6 py-12 flex flex-col items-center justify-center relative text-center">
            <div className="absolute -top-14 -left-12 z-10">
              <div className="w-32 h-32 rounded-full bg-[#CA8304] relative z-10"></div>
              <img
                src={journey.image}
                alt="circle2"
                className="w-28 h-28 rounded-full border-4 absolute top-4 left-8 z-20"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{journey.name}</h3>
            <p className="text-sm leading-relaxed max-w-sm">{journey.text}</p>
          </div>

          {/* Image + Button */}
          <div className="w-full md:w-auto flex items-center gap-4 ml-3">
            <img
              src={journey.image}
              alt="video"
              className="w-52 h-52 object-cover rounded-lg"
            />
            <button
              onClick={nextJourney}
              className="w-12 h-12 flex ml-5 items-center justify-center bg-[#CA8304] rounded-full hover:scale-110 transition-transform duration-300"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOTAuMDYgNDE0bDE2My4xMi0xMzkuNzhhMjQgMjQgMCAwIDAgMC0zNi40NEwxOTAuMDYgOThjLTE1LjU3LTEzLjM0LTM5LjYyLTIuMjgtMzkuNjIgMTguMjJ2Mjc5LjZjMCAyMC41IDI0LjA1IDMxLjU2IDM5LjYyIDE4LjE4Ii8+PC9zdmc+"
                alt="arrow"
                className="hover:scale-120 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-col items-center justify-center max-w-xl mx-auto mt-6 p-6 bg-[#3A2E2A] rounded-xl shadow-lg">
        <div className="bg-[#ca81049a] text-black w-full py-8 px-4 flex flex-col items-center justify-center relative text-center">
          <img
            src={journey.image}
            alt="circle"
            className="w-28 h-28 rounded-full border-4 mb-4"
          />
          <h3 className="text-lg font-bold mb-2">{journey.name}</h3>
          <p className="text-sm leading-relaxed max-w-sm">{journey.text}</p>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6">
          <img
            src={journey.image}
            alt="video"
            className="w-52 h-52 object-cover rounded-lg"
          />
          <button
            onClick={nextJourney}
            className="w-12 h-12 flex items-center justify-center bg-[#CA8304] rounded-full"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOTAuMDYgNDE0bDE2My4xMi0xMzkuNzhhMjQgMjQgMCAwIDAgMC0zNi40NEwxOTAuMDYgOThjLTE1LjU3LTEzLjM0LTM5LjYyLTIuMjgtMzkuNjIgMTguMjJ2Mjc5LjZjMCAyMC41IDI0LjA1IDMxLjU2IDM5LjYyIDE4LjE4Ii8+PC9zdmc+"
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default JourneyCard;
