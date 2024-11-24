'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Automatically slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const diff = startX - currentX;
    if (diff > 50) {
      nextSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      prevSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length);
  };

  const getSlidesToShow = () => {
    if (window.innerWidth >= 1024) {
      return 3; // Large devices
    } else if (window.innerWidth >= 768) {
      return 1; // Tablet devices
    } else {
      return 1; // Mobile devices
    }
  };

  const newsItems = [
    {
      src: "news1.svg",
      alt: "Concert crowd",
      title: "Relive a handful of.",
      date: "17 November, 2024"
    },
    {
      src: "news1.svg",
      alt: "Concert crowd",
      title: "Relive a handful year's.",
      date: "17 November, 2024"
    },
    {
      src: "news1.svg",
      alt: "Microphone",
      title: "Epic weekend of music.",
      date: "19 August, 2024"
    },
    {
      src: "news1.svg",
      alt: "Concert crowd",
      title: "Relive a handful of.",
      date: "17 November, 2024"
    },
    {
      src: "news1.svg",
      alt: "Concert crowd",
      title: "Relive a handful year's.",
      date: "17 November, 2024"
    },
    {
      src: "news1.svg",
      alt: "Microphone",
      title: "Epic weekend of music. ",
      date: "19 August, 2024"
    },
    {
      src: "news1.svg",
      alt: "Concert crowd",
      title: "Relive a handful.",
      date: "17 November, 2024"
    },
    {
      src: "news1.svg",
      alt: "Concert crowd",
      title: "Relive a handful year's ",
      date: "17 November, 2024"
    },
    {
      src: "news1.svg",
      alt: "Microphone",
      title: "Epic weekend of music.",
      date: "19 August, 2024"
    },
  ];

  return (
    <>
    <div className=" bg-[#5B43F5] relative h-[100%] sm:h-[100vh] md:h-[95vh] text-white sm:w-full md:w-full lg:w-auto">
    <video
      src="/video.mp4"
      className="opacity-100 z-10 absolute w-full sm:w-full md:w-full lg:w-[87%] lg:left-[13%]"
      autoPlay
      loop
      muted
      onClick="if(this.paused) this.play(); else this.pause();"
  >
      Your browser does not support the video tag.
  </video>
  
  <div className="absolute top-0 right-0 p-4 flex items-center space-x-4 z-10"></div>
  <div className="absolute inset-10 flex justify-center z-10">
    <h1 className="video-heading text-3xl font-bold text-center sm:text-2xl sm:mt-4 md:mt-20 md:justify-center sm:text-center md:text-5xl lg:text-8xl lg:font-bold lg:w-full lg:justify-center lg:items-center lg:flex lg:mt-4">
      India first global <br /> music conference and <br /> showcase
      festival
    </h1>
  </div>
  </div>
  {/* <NewsSection/> */}
 
   <div className="newsdiv lg:w-[87%] lg:ml-[13%] lg:pl-[8%] bg-white lg:mx-auto lg:p-8 lg:mt-0 sm:mt-[-160%] md:mt-[-88%] sm:w-[100%] sm:p-10 z-10">
  <h1 className="news-heading text-6xl font-bold mb-8 italic transform -skew-x-12">NEWS</h1>
  <div 
    className="relative overflow-x-auto lg:overflow-x-hidden"
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    onMouseLeave={handleMouseUp}
    onTouchStart={handleMouseDown}
    onTouchMove={handleMouseMove}
    onTouchEnd={handleMouseUp}
  >
    <div className="flex transition-transform duration-300 ease-out" style={{ transform: `translateX(-${currentIndex * 100 / getSlidesToShow()}%)` }}>
      {newsItems.map((item, index) => (
        <div key={index} className="lg:w-1/3 md:w-1/2 xs:w-full flex-shrink-0 px-2" style={{ gap: '16px' }}>
          <Image
            src={item.src}
            alt={item.alt}
            width={300}
            height={200}
            className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          />
          <h2 className="news-title text-xl font-bold mt-4 whitespace-normal">{item.title}</h2>
          <p className="news-date text-gray-500">{item.date}</p>
        </div>
      ))}
    </div>
    {typeof window !== 'undefined' && window.innerWidth >= 1024 && (
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-end px-4">
        <button onClick={nextSlide} className="bg-gray-800 text-white p-2 rounded-full transition-transform transform hover:scale-110 hover:bg-gray-700">
          <ArrowRight />
        </button>
      </div>
    )}
  </div>
</div>
</>
  );
}