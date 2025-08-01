import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../font.css";

const courseData = [
  {
    title: "Fashion Business",
    description:
      "The three-year course in “Fashion Business” is aimed at creating a new generation of creative leaders able to understand and manage the increasing social challenges of",
    image: "https://i.postimg.cc/4xrKFR75/Fashion-Business.jpg",
  },
  {
    title: "Fashion Design",
    description:
      "The three-year course in “Fashion Design” is aimed at empowering individuals to redefine trends and aesthetics through creativity and innovation.",
    image: "https://i.postimg.cc/ZRLCR9f7/Fashion-Design.avif",
  },
  {
    title: "Accessory Designing",
    description:
      "The three-year course in “Accessory Designing” is aimed at creating a new generation of creative leaders able to understand and manage the increasing social challenges of",
    image: "https://i.postimg.cc/vZ1gzZBT/Accessory-Design.jpg",
  },
  {
    title: "Interior Design",
    description:
      "The three-year course in Interior Design” is aimed at creating a new generation of innovative thinkers who can design practical and futuristic products.",
    image: "https://i.postimg.cc/BQbXSn2p/Interior-Design.png",
  },
];

const AUTO_INTERVAL = 6000;

export default function Courses() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % courseData.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(handleNext, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  const current = courseData[index];

 const springTransition = {
  type: "spring",
  stiffness: 500,   // Lower stiffness for slower, smoother motion
  damping: 40,     // Higher damping to remove overshoot and bounce
  mass: 0.1,       // Slightly higher mass makes motion feel more organic
};
  const slideVariants = {
    initial: { x: 60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -60, opacity: 0 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-serif text-white ">
    <div className="relative w-full min-h-screen h-auto overflow-hidden font-serif text-white bg-black">
    
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            className="absolute inset-0"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={springTransition}
          >
            <img
              src={current.image}
              className="w-full h-full object-cover"
              alt={current.title}
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Header */}
      <div style={{ fontFamily: 'Epika' }} className="absolute top-0 w-full text-center py-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold uppercase tracking-widest z-30">
        University by Streams
      </div>

      {/* Text + Card Content */}
      <div  className="relative z-30 flex flex-col md:flex-row items-center md:items-start h-full gap-4 px-3 sm:px-6 md:px-12 lg:px-20 pt-24 sm:pt-28 md:pt-36 lg:pt-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title + "-text"}
            className="w-full md:w-1/2 space-y-4 sm:space-y-6"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={springTransition}
          >
            <h1 style={{ fontFamily: 'Epika' }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase">
              {current.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
              {current.description}
            </p>
            <div className="pt-2">
              <button className="relative transition-all duration-300 ease-in-out shadow-[0_10px_20px_rgba(0,0,0,0.2)] py-2 px-5 bg-[#583827] rounded-full flex items-center justify-center cursor-pointer text-white gap-2 font-bold border-[3px] border-white/30 outline-none overflow-hidden text-[15px] hover:scale-105 hover:border-white/60 group">
                Learn More
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

      
      </div>

      
    </div>
    </div>
  );
}
