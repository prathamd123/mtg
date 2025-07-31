import React from 'react'
import '../../src/index.css';
function HeroTitle() {
    return (
        <>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl flex flex-col items-center justify-center z-10 px-2">
                <div className='flex flex-col items-center gap-3'>
                    <h1 className="bg-gradient-to-r from-gold1 via-gold2 to-gold3 bg-clip-text text-transparent font-cinzel text-2xl sm:text-3xl md:text-4xl leading-tight font-normal tracking-normal text-center">
                        Turn Your Study Abroad Dreams into REALITY
                    </h1>
                    <h2 className="w-full max-w-xl text-base sm:text-lg md:text-2xl leading-tight font-normal text-center font-antic bg-gradient-to-r from-gold4 via-gold5 to-gold6 bg-clip-text text-transparent">
                        Guiding You to a Global Future since 2009
                    </h2>   
                    <div className="flex flex-row gap-5 mt-2">
                    <button className="relative transition-all duration-300 ease-in-out shadow-[0_10px_20px_rgba(0,0,0,0.2)] py-2 px-5 bg-[#583827] rounded-full flex items-center justify-center cursor-pointer text-white gap-2 font-bold border-[3px] border-white/30 outline-none overflow-hidden text-[15px] hover:scale-105 hover:border-white/60 group">
      View Scholarships
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 transition-all duration-300 ease-in-out group-hover:translate-x-1"
      >
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
        />
      </svg>
      <span className="shine"></span>
    </button>
                    <button className="relative transition-all duration-300 ease-in-out shadow-[0_10px_20px_rgba(0,0,0,0.2)] py-2 px-5 bg-[#583827] rounded-full flex items-center justify-center cursor-pointer text-white gap-2 font-bold border-[3px] border-white/30 outline-none overflow-hidden text-[15px] hover:scale-105 hover:border-white/60 group">
      Check Eligibility
      <span className="shine"></span>
    </button>

  
</div>

                </div>
            </div>
        </>
    )
}

export default HeroTitle
