import React, { useEffect, useRef, useState } from 'react';

const images = [
  { title: 'Australia', num: '01', src: 'https://i.postimg.cc/505Rd32R/Australia.avif' },
  { title: 'Canada', num: '02', src: 'https://i.postimg.cc/RCRDgX83/Canada.webp' },
  { title: 'France', num: '03', src: 'https://i.postimg.cc/gjNtr2Ry/France.webp' },
  { title: 'Germany', num: '04', src: 'https://i.postimg.cc/dtVSpGP5/Germany.jpg' },
  { title: 'Italy', num: '05', src: 'https://i.postimg.cc/N0mNm4mj/Italy.jpg' },
  { title: 'Netherlands', num: '06', src: 'https://i.postimg.cc/Mpc3KxGR/Netherlands.jpg' },
  { title: 'United Kingdom', num: '07', src: 'https://i.postimg.cc/BQ7w0tJ4/United-Kingdom.jpg' },
  { title: 'United States', num: '08', src: 'https://i.postimg.cc/fR62VF3P/United-States.jpg' },
  { title: 'Oslo', num: '09', src: 'https://media.istockphoto.com/id/184316397/it/foto/londra-edifici-aziendali.jpg?s=612x612&w=0&k=20&c=XqrRxEPzFnwRFk7PQrCiu9-FPfCTPyMe5BKKaxYXCs8=' },
  { title: 'London', num: '10', src: 'https://media.istockphoto.com/id/184619832/it/foto/distretto-finanziario-al-crepuscolo-londra.jpg?s=612x612&w=0&k=20&c=RAThrJOBY6vhlT6-kQpu9-9jLEzWToYfdw46S8B0Mu0=' },
];

const clamp = (val, min, max) => Math.max(min, Math.min(val, max));
const step = 100 / (images.length - 1); // progress per card

const Carousel = () => {
  const [progress, setProgress] = useState(0);
  const [hideLeftImage, setHideLeftImage] = useState(false);
  const itemsRef = useRef([]);
  const carouselRef = useRef(null);
  const touchX = useRef(null);

  const getZindex = (array, index) =>
    array.map((_, i) => (index === i ? array.length : array.length - Math.abs(index - i)));

  const animate = () => {
    const activeIndex = Math.round(progress / step);
    setHideLeftImage(window.innerWidth >= 1024 && activeIndex > 2);

    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      const zIndex = getZindex(images, activeIndex)[index];
      const activeVal = (index - activeIndex) / images.length;
      item.style.zIndex = zIndex;
      item.style.transform = `translate(${activeVal * 800}%, -50%) rotate(${activeVal * 120}deg)`;
      item.style.opacity = window.innerWidth < 1024 ? 1 : clamp((zIndex / images.length) * 3 - 2, 0, 1);
    });
  };

  const handleWheel = (e) => {
    if (!carouselRef.current?.contains(e.target)) return;
    const delta = e.deltaY > 0 ? step : -step;
    const next = clamp(progress + delta, 0, 100);
    if (next !== progress) {
      e.preventDefault();
      setProgress(next);
    }
  };

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    if (touchX.current === null) return;
    const currentX = e.touches[0].clientX;
    const delta = currentX - touchX.current;

    if (Math.abs(delta) > 40) {
      const next = delta < 0 ? progress + step : progress - step;
      setProgress(clamp(next, 0, 100));
      touchX.current = currentX;
    }
  };

  const onTouchEnd = () => {
    touchX.current = null;
  };

  useEffect(() => {
    animate();
  }, [progress]);

  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;

    node.addEventListener('wheel', handleWheel, { passive: false });
    node.addEventListener('touchstart', onTouchStart, { passive: true });
    node.addEventListener('touchmove', onTouchMove, { passive: false });
    node.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      node.removeEventListener('wheel', handleWheel);
      node.removeEventListener('touchstart', onTouchStart);
      node.removeEventListener('touchmove', onTouchMove);
      node.removeEventListener('touchend', onTouchEnd);
    };
  }, [progress]);

  return (
    <section
      ref={carouselRef}
      className="relative min-h-screen overflow-hidden  flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0"
    >
      {/* Decorative image */}
      <div
        className={`z-0 flex items-center justify-center transition-opacity duration-500 ${hideLeftImage ? 'opacity-0' : 'opacity-100'} mb-6 lg:mb-0 lg:absolute lg:top-1/2 lg:left-[5%] lg:-translate-y-1/2`}
      >
        <div className="relative w-64 sm:w-80 mx-auto">
          <img src="/Carousel.png" alt="Decorative Left" className="w-full h-auto object-contain" />
          <h2 className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl sm:text-4xl font-light leading-snug text-center">
            Popular <br /> Destinations
          </h2>
        </div>
      </div>

      {/* Swipe hint for mobile */}
      <div className="lg:hidden text-white text-sm mb-4 animate-bounce">
        <span className="block text-center">⬅️ Swipe to explore ➡️</span>
      </div>

      {/* Card stack */}
      <div className="relative w-full flex-1 h-[65vh] lg:h-full">
        {images.map((img, idx) => (
          <figure
            key={idx}
            ref={(el) => (itemsRef.current[idx] = el)}
            className="absolute top-1/2 left-1/2 w-[clamp(160px,70vw,300px)] h-[clamp(200px,80vw,400px)] -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg overflow-hidden bg-black will-change-transform transition-transform duration-500 ease-[cubic-bezier(0,0.02,0,1)]"
          >
            <img src={img.src} alt={img.title} className="w-full h-full object-cover select-none" draggable={false} />
            <figcaption className="pointer-events-none">
              <span className="absolute bottom-4 left-4 text-white text-base sm:text-lg drop-shadow-md">
                {img.title}
              </span>
              <span className="absolute top-1 left-4 text-white text-2xl sm:text-4xl">
                {img.num}
              </span>
              <span className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent via-30% via-50% to-black/60" />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
