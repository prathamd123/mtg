// src/components/Hero.jsx
import HeroTitle from './HeroTitle';
import '../../src/index.css'; 
export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-70"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0" />
   <HeroTitle/> 
    </div>
  );
}
