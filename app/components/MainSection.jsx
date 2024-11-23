"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "./Navbar";

export default function MainSection() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2025-01-01`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Min: Math.floor((difference / 1000 / 60) % 60),
        Sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="bg-[#5A3EE5]  bg-cover bg-center relative overflow-hidden w-full">
      {/* Content */}
      <div className=" z-10 sm:h-[50vh] md:h-[38vh] lg:h-[100vh]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center p-4 min-h-[100px] min-w-full sm:justify-between lg:pl-24 lg:pt-12 lg:left-20">
        <div className="text-white text-3xl font-bold ml-10 z-[9999]">
          <img src="/logo.svg" alt="Description of the image" />
        </div>

        {/* navbar */}
        <Navbar />
      </header>
      {/* Header section end */}

      {/* Main Content */}
      <main className="text-center text-white mt-40 px-4 relative">
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <Image
            src="/mainbackground.svg"
            alt="Image Description"
            width={1100}
            height={500}
            className="mt-[-20%] "
          />
        </div>

        <div className=" relative z-10 sm:mt-[-45px] md:mt-[30px] lg:mt-0">
          {/* heading */}
          <div className="flex lg:justify-start md:justify-center sm:ml-[15px] lg:ml-0 sm:mr-24 md:mr-0">
            <div className="flex flex-col items-center ml-0 md:ml-64">
              <h1 className="main-heading text-7xl md:text-9xl font-bold mb-4">
                IIMV
              </h1>
            </div>
            <div className="flex flex-col items-center mr-80 sm:mt-0 md:mt-7 lg:mt-7">
              <span className="bg-black text-yellow-400 px-3 py-1 rounded-lg">
                GOA
              </span>
              <h2 className="main-2025 main-heading text-orange-500 mt-0 font-bold text-7xl md:text-8xl sm:text-6xl">
                2025
              </h2>
            </div>
          </div>

          {/* sub-description */}
          <p className=" main-desc text-2xl mb-8 mr-[20%] text-center sm:contents lg:block md:contents lg:font-black sm:font-bold   ">
            India's First <span className="text-orange-400">Global Music</span>{" "}
            Conference and <span> showcase</span> <br />{" "}
            <span className="lg:mr-[48%] lg:text-left">Festival.</span>
          </p>

          {/* Countdown */}
          <div className="main-count flex justify-center gap-4 mb-8 mr-[36%] sm:justify-center lg:justify-start lg:ml-64 sm:mr-0 sm:mt-[20px] lg:mt-0">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-white text-[#5a2d82] rounded-lg p-4 w-24"
              >
                <div className="text-4xl font-bold">{value}</div>
                <div className="text-sm">{unit}</div>
              </div>
            ))}
          </div>

          {/* button */}
          <button className="main-btn bg-[#EAF943] text-black px-8 py-3 rounded-full font-semibold text-xl mr-[47%]md:justify-center lg:justify-start">
            BECOME SPONSOR
          </button>
        </div>

        {/* card card */}
      <div className=" lg:flex mr-56 mt-12 mb-20 z-10 relative flex-col items-center text-center sm:flex-row  sm:hidden  ">

        {/* 1st card */}
  <div className="flex-1 flex flex-col text-left lg:ml-64 main-btn sm:mr-20">

    <div className="text-[#e1f12e] uppercase sm:ml-[38%] lg:ml-0">wed 05 feb</div>
    <ul>
      <li className="flex gap-2  sm:ml-[38%] lg:ml-0">
        <span className="text-[#FF7A05]"> &#8226; </span>
        <h3 className="main-bottom-h3"> Opening Night Performance</h3>
      </li>
    </ul>
  </div>
  {/* 2nd card */}
  <div className="flex-1 main-btn">
    <div className="text-[#e1f12e] mr-10 uppercase">thu 06 feb</div>
    <ul>
      <li className="flex ml-24 gap-2">
        <span className="text-[#FF7A05]">&#8226;</span>
        <h3 className="main-bottom-h3"> Pro Sessions</h3>
      </li>
    </ul>
    <ul>
      <li className="flex ml-24 gap-2">
        <span className="text-[#FF7A05]">&#8226;</span>
        <h3 className="main-bottom-h3"> Networking Events</h3>
      </li>
    </ul>
    <ul>
      <li className="flex ml-24 gap-2">
        <span className="text-[#FF7A05]">&#8226;</span>
        <h3 className="main-bottom-h3"> Evening Showcases</h3>
      </li>
    </ul>
  </div>

  {/* 3rd card */}
  <div className="flex-1 main-btn">
    <div className="text-[#e1f12e] mr-10 uppercase">fri 07 feb</div>
    <ul>
      <li className="flex ml-24 gap-2">
        <span className="text-[#FF7A05]">&#8226;</span>
        <h3 className="main-bottom-h3"> Pro Sessions</h3>
      </li>
    </ul>
    <ul>
      <li className="flex ml-24 gap-2">
        <span className="text-[#FF7A05]">&#8226;</span>
        <h3 className="main-bottom-h3"> Networking Events</h3>
      </li>
    </ul>
    <ul>
      <li className="flex ml-24 gap-2">
        <span className="text-[#FF7A05]">&#8226;</span>
        <h3 className="main-bottom-h3"> Evening Showcases</h3>
      </li>
    </ul>
  </div>
</div>
      </main>
      {/* main content end */}
      </div>

      {/* Added Image */}
      <Image
        src="/rightbackground.svg"
        alt="Right Background Image"
        width={320}
        height={320}
        className="absolute top-0 right-0 h-100vh z-10 hidden lg:block"
        unoptimized={true}
      />
    </div>
  );
}
