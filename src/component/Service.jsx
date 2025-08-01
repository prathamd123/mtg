import React from 'react';
import {
  FaPlaneArrival,
  FaHome,
  FaSimCard,
  FaUniversity,
  FaMapMarkedAlt,
  FaHeadset,
} from 'react-icons/fa';
import '../font.css';

const services = [
  {
    id: 1,
    icon: <FaPlaneArrival />,
    title: 'Pre Departure',
    desc: 'Guidance and preparation before you leave for your destination.',
  },
  {
    id: 2,
    icon: <FaHome />,
    title: 'Accommodation',
    desc: 'Helping students find a safe and affordable place to stay.',
  },
  {
    id: 3,
    icon: <FaSimCard />,
    title: 'SIM Card',
    desc: 'Providing connectivity solutions in your new country.',
  },
  {
    id: 4,
    icon: <FaUniversity />,
    title: 'University Selection',
    desc: 'Choosing the best university for your career goals.',
  },
  {
    id: 5,
    icon: <FaMapMarkedAlt />,
    title: 'Visa Guidance',
    desc: 'Step-by-step help with the visa application process.',
  },
  {
    id: 6,
    icon: <FaHeadset />,
    title: 'Post Arrival Support',
    desc: 'Ensuring a smooth transition after you arrive.',
  },
];

const metallicGold = '#D4AF37';

const Services = () => {
  return (
    <div className="py-8 px-2 m-0">
      <div className="max-w-5xl mx-auto text-center">
        <h2 style={{ fontFamily: 'Epika' }} className="text-5xl font-bold mb-8 text-[#eaa223] ">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative group bg-white p-6 rounded-2xl shadow-md min-h-[230px] flex flex-col justify-between`}
              style={{ border: `1px solid ${metallicGold}`, transition: 'background 0.5s, color 0.5s' }}
            >
              {/* Overlay a metallic gold bg on hover */}
              <div className="absolute inset-0 transition-all duration-500 ease-in-out rounded-2xl pointer-events-none group-hover:bg-[#D4AF37] z-0"></div>

              {/* Card Number Top Left */}
              <span className="absolute top-4 left-4 text-2xl font-bold text-[#D4AF37] group-hover:text-white z-10 transition-all duration-500 ease-in-out">
                {`0${service.id}`}
              </span>

              {/* Icon Top Right */}
              <div className="absolute top-4 right-4 text-6xl text-[#D4AF37] group-hover:text-white z-10 transition-all duration-500 ease-in-out">
                {service.icon}
              </div>
              
              {/* Content */}
              <div className="mt-16 mb-4 z-10 relative">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white mb-2 transition-all duration-500 ease-in-out">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white mb-4 text-sm transition-all duration-500 ease-in-out">
                  {service.desc}
                </p>
              </div>
              
              <button className="mt-auto self-start px-4 py-2 border-2 border-[#D4AF37] text-[#D4AF37] font-medium rounded-md group-hover:bg-white group-hover:text-[#D4AF37] transition-all duration-500 ease-in-out z-10 relative">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
