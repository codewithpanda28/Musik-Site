import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
<div className="footer-font bg-[#5B43F5] lg:mt-[28.4%] lg:ml-[10%] z-10 static overflow-hidden md:mt-[-30%]
sm:mt-[-60%] " >
  {/* Navigation Menu */}
  <div className="absolute z-10 p-12">
    <nav className="footer-nav border-r border-white/20 pr-8">
      <ul className="space-y-6 mt-[10%] ">
        <li>
          <Link href="#lineup" className=" text-white sm:text-4xl md:text-5xl lg:text-6xl font-bold italic hover:text-white/80 transition-colors">
            LINEUP
          </Link>
        </li>
        <li>
          <Link href="#event-info" className="text-white sm:text-4xl md:text-5xl lg:text-6xl  font-bold italic hover:text-white/80 transition-colors">
            EVENT INFO
          </Link>
        </li>
        <li>
          <Link href="#schedule" className="text-white sm:text-4xl md:text-5xl lg:text-6xl  font-bold italic hover:text-white/80 transition-colors">
            SCHEDULE
          </Link>
        </li>
        <li>
          <Link href="#news" className="text-white sm:text-4xl md:text-5xl lg:text-6xl  font-bold italic hover:text-white/80 transition-colors">
            NEWS
          </Link>
        </li>
        <li>
          <Link href="#contact" className="text-white sm:text-4xl md:text-5xl lg:text-6xl  font-bold italic hover:text-white/80 transition-colors">
            CONTACT
          </Link>
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
        className=' lg:max-w-[300%] sm:max-w-[120%] items-center justify-center mx-auto lg:ml-[78%] mt-[10%]'
      />
    </div>
  </div>

  {/* Decorative Shapes */}
  <div className="absolute top-0 right-50 w-1/3 h-full">
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
      <div className="absolute z-10 right-0 hidden lg:block">
      <Image
        src="footerbackground.svg"
        alt="New Image"
        width={300}
        height={100}
        className='h-[100%]  bg-[#5B43F5]'
      />
    </div>

</div>
  )
}

export default Footer