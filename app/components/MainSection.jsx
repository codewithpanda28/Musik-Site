"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";


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
    <div className="bg-[#5A3EE5] min-h-screen bg-cover bg-center relative overflow-hidden w-full">
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 min-h-[100px] min-w-full pl-11 pt-12">
          <div className="text-white text-3xl font-bold ml-36 z-[9999]">
            <img src="/logo.svg" alt="Description of the image" />
            
          </div>
{/* nav start */}
 <nav className="hidden lg:flex flex items-center mr-[30%] mt-4 ">
 <Link
    href="#"
    className={`absolute text-lg font-bold text-red-400 transition-transform duration-300 hover:z-10`}
    style={{
      backgroundColor: "#ffba08",
      padding: "15px 15px",
      zIndex: 2,
      transform: "translateX(100%)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      transition: "transform 0.3s",
      width: "auto",
    }}
    onMouseEnter={(e) => {
      console.log('Hovering SPEAKERS');
      e.currentTarget.style.transform = "translateX(0)";
      e.currentTarget.style.overflow = "visible";
      e.currentTarget.style.zIndex = 10;
      e.currentTarget.style.padding = `15px 35px`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateX(100%)";
      e.currentTarget.style.overflow = "hidden";
      e.currentTarget.style.zIndex = 2;
      e.currentTarget.style.padding = `15px 15px`;
    }}
  >
    <span className="absolute inset-0 flex items-center justify-center">
      SPEAKERS
    </span>
  </Link>
  <Link
    href="#"
    className={`absolute text-lg font-bold text-red-400 transition-transform duration-300 hover:z-10`}
    style={{
      backgroundColor: "#e63946",
      padding: "15px 25px",
      zIndex: 1,
      transform: "translateX(100%)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      transition: "transform 0.3s",
      width: "auto",
    }}
    onMouseEnter={(e) => {
      console.log('Hovering ARTIST');
      e.currentTarget.style.transform = "translateX(0)";
      e.currentTarget.style.overflow = "visible";
      e.currentTarget.style.zIndex = 10;
      e.currentTarget.style.padding = `15px 40px`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateX(100%)";
      e.currentTarget.style.overflow = "hidden";
      e.currentTarget.style.zIndex = 1;
      e.currentTarget.style.padding = "15px 30px";
    }}
  >
    <span className="absolute inset-0 flex items-center justify-center">
      ARTIST
    </span>
  </Link>
  <Link
    href="#"
    className={`absolute text-lg font-bold text-red-400 transition-transform duration-300 hover:z-10`}
    style={{
      backgroundColor: "#ffba08",
      padding: "15px 40px",
      zIndex: 0,
      transform: "translateX(100%)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      width: "auto",
    }}
    onMouseEnter={(e) => {
      console.log('Hovering TICKET');
      e.currentTarget.style.transform = "translateX(0)";
      e.currentTarget.style.overflow = "visible";
      e.currentTarget.style.zIndex = 10;
      e.currentTarget.style.padding = `15px 40px`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateX(100%)";
      e.currentTarget.style.overflow = "hidden";
      e.currentTarget.style.zIndex = 0;
      e.currentTarget.style.padding = "15px 45px";
    }}
  >
    <span className="absolute inset-0 flex items-center justify-center">
      TICKET
    </span>
  </Link>
</nav>
         


         
     





          <div className="flex items-center gap-4 lg:hidden mr-80 mt-4">
            <button className="buy-ticket bg-[#EAF943] text-[#5A3EE5] px-7 py-2 rounded-full">
              BUY TICKETS
            </button>
            <div className="p-2 rounded-md bg-[#E9F943]">
              <Menu className="text-[#5A3EE5] w-8 h-8" />
            </div>
          </div>
        </header>
        {/* Header section end */}

        {/* Main Content */}
        <main className="text-center text-white mt-40 px-4 relative">
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <Image
              src="/mainbackground.svg"
              alt="Image Description"
              width={1100}
              height={500}
              className="mt-[-20%] "
            />
          </div>

          <div className=" relative z-10">
            {/* heading */}
            <div className="flex">
              <div className="flex flex-col items-center  ml-64">
                <h1 className="main-heading text-9xl font-bold mb-4">IIMV</h1>
              </div>
              <div className="flex flex-col items-center mr-80 mt-7">
                <span className="bg-black text-yellow-400 px-3 py-1  rounded-lg">
                  GOA
                </span>
                <h2 className="main-2025 main-heading text-8xl font-bold text-orange-500 mt-0">
                  2025
                </h2>
              </div>
            </div>

            {/* sub-description */}
            <p className="main-desc text-2xl mb-8 mr-[20%]">
              India's First{" "}
              <span className="text-orange-400">Global Music</span> Conference
              and showcase <br /> Festival.
            </p>

            {/* Countdown */}
            <div className="main-count flex justify-center gap-4 mb-8 mr-[36%] ">
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
            <button className="main-btn text-[#EAF943] px-8 py-3 rounded-full font-semibold text-xl mr-[47%]">
              BECOME SPONSOR
            </button>
          </div>

          {/* 1st card */}
        <div class="flex mr-56 mt-12 mb-20">
            <div class="flex-1 flex flex-col text-left ml-64 main-btn ">
              <div className="text-[#e1f12e] uppercase">wed 05 feb</div>
              <ul>
                <li className="flex gap-2">
                  <span className="text-[#FF7A05]"> &#8226;  </span>
                  <h3 className="main-bottom-h3"> Opening Night Performance</h3>
                </li>
              </ul>
            </div>
            {/* 2nd card */}
            <div class="flex-1 main-btn">
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
             <div class="flex-1 main-btn">
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
  className="absolute top-0 right-0 h-100vh z-50 hidden lg:block"
  unoptimized={true}
/>
    </div>
  );
}
