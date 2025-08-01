import React from "react";
import '../font.css';

const ImageWithText = () => {
  return (
    <div className="bg-[#fefefe]">
      {/* Section Heading */}
      <div className="flex justify-center m-auto ">
        <h1 style={{ fontFamily: 'Epika' }} className="text-6xl font-bold text-[#eaa223]">About</h1>
      </div>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-stretch max-w-6xl mx-auto px-4 py-8 gap-10">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/about.jpg"
            alt="Descriptive Alt"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#9A7142] mb-4">
            Welcome to Maitri Global Education
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Empowering Students Worldwide
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            At Maitri Global Education, we provide expert guidance for international
            admissions, visa processing, and career counseling. Our mission is to
            make global education accessible and hassle-free for every student.
          </p>
          <button className="relative transition-all duration-300 ease-in-out shadow-[0_10px_20px_rgba(0,0,0,0.2)] py-2 px-5 bg-[#3A2E2A] rounded-full flex items-center justify-center cursor-pointer text-white gap-2 font-bold border-[3px] border-white/30 outline-none overflow-hidden text-[15px] hover:scale-105 hover:border-white/60 group">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;