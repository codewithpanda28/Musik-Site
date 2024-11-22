'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  };

  const newsItems = [
    {
      src: "news1.svg",
      alt: "Concert crowd",
      title: "Relive a handful of year's tour.",
      date: "17 November, 2024"
    },
    {
      src: "news1.svg",
      alt: "Concert crowd",
      title: "Relive a handful year's tour.",
      date: "17 November, 2024"
    },
    {
      src: "news1.svg",
      alt: "Microphone",
      title: "Epic weekend of music. Here's a recap",
      date: "19 August, 2024"
    },
    {
      src: "news1.svg",
      alt: "Violinist",
      title: "The Stage is all set for Stars",
      date: "23 January, 2023"
    },
    {
      src: "news1.svg",
      alt: "Concert crowd",
      title: "Relive a handful year's tour.",
      date: "17 November, 2024"
    },
    {
      src: "news1.svg",
      alt: "Concert crowd",
      title: "Relive a from this year's tour.",
      date: "17 November, 2024"
    },
    {
      src: "news1.svg",
      alt: "Microphone",
      title: "Epic weekend of music recap",
      date: "19 August, 2024"
    },
    {
      src: "news1.svg",
      alt: "Violinist",
      title: "The Stage is all set Stars",
      date: "23 January, 2023"
    }
  ];

  return (
    <div className="newsdiv lg:w-[87%]  bg-[#5B43F5] lg:ml-[13%] lg:pl-[8%] bg-white  lg:mx-auto lg:p-8 lg:mt-0 sm:mt-[-160%] md:mt-[-88%]   sm:p-10 z-10">
      <h1 className="news-heading text-6xl font-bold mb-8 italic transform -skew-x-12">NEWS</h1>
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100 / 4}%)` }}>
          {newsItems.map((item, index) => (
<div key={index} className="lg:w-1/3 md:w-1/2 sm:w-full xs:w-full flex-shrink-0">
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h2 className="news-title text-xl font-bold mt-4">{item.title}</h2>
              <p className="news-date text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow-md"
        aria-label="Previous slide"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow-md"
        aria-label="Next slide"
      >
        &#9654;
      </button>
    </div>
  );
}