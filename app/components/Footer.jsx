import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
<div className="footer-font bg-[#5B43F5] mt-[28.4%] ml-[10%] z-10 static overflow-hidden">
  {/* Navigation Menu */}
  <div className="absolute z-10 p-12">
    <nav className="footer-nav border-r border-white/20 pr-8">
      <ul className="space-y-6 mt-[10%]">
        <li>
          <a href="#lineup" className="text-white text-6xl font-bold italic hover:text-white/80 transition-colors">
            LINEUP
          </a>
        </li>
        <li>
          <a href="#event-info" className="text-white text-6xl font-bold italic hover:text-white/80 transition-colors">
            EVENT INFO
          </a>
        </li>
        <li>
          <a href="#schedule" className="text-white text-6xl font-bold italic hover:text-white/80 transition-colors">
            SCHEDULE
          </a>
        </li>
        <li>
          <a href="#news" className="text-white text-6xl font-bold italic hover:text-white/80 transition-colors">
            NEWS
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white text-6xl font-bold italic hover:text-white/80 transition-colors">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
    {/* Centered Image Below Text */}
    <div className="absolute inset-0 flex justify-center items-center z-0">
      <Image
        src="/mainbackground.svg"
        alt="Image Description"
        width={1000}  
        height={200}  
        className='max-w-[300%] items-center justify-center mx-auto ml-[78%] mt-[10%]'
      />
    </div>
  </div>

  {/* Decorative Shapes */}
  <div className="absolute top-0 right-0 w-1/3 h-full">
    <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6B00] transform rotate-45"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FFD600] rounded-full transform translate-x-1/2 translate-y-1/2"></div>
    <div className="absolute top-1/2 right-24 w-32 h-32 bg-[#5B43F5] rounded-full transform -translate-y-1/2"></div>
    <div className="absolute top-1/4 right-12 w-24 space-y-2">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-1 bg-[#FF6B00]"></div>
      ))}
    </div>

  </div>
      {/* New Image at Right 0 Top 0 */}
      <div className="absolute z-10  right-0 ">
      <Image
        src="footerbackground.svg"
        alt="New Image"
        width={300}
        height={100}
        className='h-[100%]'
      />
    </div>

</div>
  )
}

export default Footer