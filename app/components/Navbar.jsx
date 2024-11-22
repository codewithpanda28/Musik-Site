'use client'

import { useState } from 'react'

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      title: 'SPEAKER',
      bgColor: 'bg-blue-500',
      subItems: ['Events', 'Schedule', 'Artists', 'Venues']
    },
    {
      title: ' BUY A TICKET',
      bgColor: 'bg-pink-500',
      subItems: ['Speakers', 'Conference Timetable', 'Panels', 'Receptions']
    },
    {
      title: 'ARTIST',
      bgColor: 'bg-yellow-400',
      subItems: ['About', 'Contact', 'FAQ', 'Location']
    }
  ]

  return (
  <nav className="relative z-99 w-[50%] text-white md:absolute lg:right-[0%] md:right-[25%]">
      <button
        className="block md:hidden p-2 text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      <div className={`flex flex-col ml-[15%] absolute md:flex-row ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative md:mx-3"
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a
              href="#"
              className={`main-desc block mx-[-30px] px-2 py-2 text-white transition-all duration-300 ${item.bgColor} hover:opacity-90 hover:transform hover:translate-x-[-30px] whitespace-nowrap overflow-hidden text-ellipsis z-100 `}
            >
              {item.title}
            </a>
            <div
              className={`absolute left-[-60%] w-40 overflow-hidden transition-all duration-300 ease-in-out ${
                activeMenu === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className={`${item.bgColor}`}>
                {item.subItems.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className="navbar-subnav block px-4 py-3 text-white hover:bg-black/10 transition-colors"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {isMenuOpen && (
   <div className="fixed inset-0 bg-white/40 flex flex-col items-end justify-end h-screen p-4 w-3/5 md:hidden">
  <button
    className="p-2 text-black mb-4"
    onClick={() => setIsMenuOpen(false)}
  >
    ✖
  </button>
  {menuItems.map((item, index) => (
    <div key={index} className="w-3/5">
      <a
        href="#"
        className={`block w-full px-2 py-2 text-black ${item.bgColor} hover:opacity-100`}
      >
        {item.title}
      </a>
      {item.subItems.map((subItem, subIndex) => (
        <a
          key={subIndex}
          href="#"
          className="block w-full px-4 py-2 text-black hover:bg-black/10"
        >
          {subItem}
        </a>
      ))}
    </div>
  ))}
</div>
      )}
    </nav>
  )
}