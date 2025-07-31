import { div } from "framer-motion/client";
import React from "react";
import "../font.css";

const ImageWithText = () => {
  return (
    <div>
    <div className="flex flex-row items-center justify-center m-auto mt-5">
        <h1 style={{ fontFamily: 'Epika' }} className="text-6xl font-bold text-[#D4AF37]">About</h1>
      </div>
  
    <div className="flex flex-row items-center max-w-6xl mx-auto  px-1 py-12 gap-10">   
      {/* Left Image - 30% */}
      <div className="w-2/3">
        <img
          src="/about.jpg"
          alt="Descriptive Alt"
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>

      {/* Right Text Content - 70% */}
      <div className="w-2/3">
        <h1 className="text-4xl font-bold text-[#9A7142] mb-4">Welcome to Maitri Global Education</h1>
        <h2 className="text-2xl font-semibold mb-2">Empowering Students Worldwide</h2>
        <p className="text-lg text-gray-700 mb-6">
          At Maitri Global Education, we provide expert guidance for international admissions, visa processing, and career counseling. 
          Our mission is to make global education accessible and hassle-free for every student.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
    </div>
  );
};

export default ImageWithText;
