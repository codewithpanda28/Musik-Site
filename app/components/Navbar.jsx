'use client'

import { useState, useEffect } from 'react'

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      title: 'BUY TICKET',
      bgColor: 'bg-blue-500',
      subItems: ['BUY TICKET','Events', 'Schedule', 'Artists', 'Venues']
    },
    {
      title: ' SPEAKER ',
      bgColor: 'bg-pink-500',
      subItems: ['SPEAKER', 'Conference Timetable', 'Panels', 'Receptions']
    },
    {
      title: 'ARTIST ',
      bgColor: 'bg-yellow-400',
      subItems: ['ARTIST', 'Contact', 'FAQ', 'Location']
    }
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-container') && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <nav className="relative z-50 w-[42%] text-white md:absolute lg:right-0 sm:right-[-25%] md:right-0">
      <button
        className="block md:hidden p-2 text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      <div className={`menu-container flex flex-col ml-auto absolute md:flex-row ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
        {(() => {
          const items = [];
          for (let index = 0; index < menuItems.length; index++) {
            const item = menuItems[index];
            items.push(
              <div
                key={index}
                className="relative md:mx-3"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href="#"
                  className={`main-desc block mx-[-30px] px-2 py-2 text-white transition-all duration-300 ${item.bgColor} hover:opacity-100 hover:transform hover:translate-x-[-30px] whitespace-nowrap overflow-hidden text-ellipsis z-100 hidden md:block`}
                >
                  {item.title}
                </a>
                <div
                  className={`absolute left-[-90%] w-70 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeMenu === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`${item.bgColor}`}>
                    {(() => {
                      const subItems = [];
                      for (let subIndex = 0; subIndex < item.subItems.length; subIndex++) {
                        const subItem = item.subItems[subIndex];
                        subItems.push(
                          <a
                            key={subIndex}
                            href="#"
                            className="navbar-subnav block px-4 py-3 text-white hover:bg-black/10 transition-colors"
                          >
                            {subItem}
                          </a>
                        );
                      }
                      return subItems;
                    })()}
                  </div>
                </div>
              </div>
            );
          }
          return items;
        })()}
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/100 z-99 flex flex-col items-start justify-start h-screen p-4 w-3/5 md:hidden z-10">
          <button
            className="p-2 text-black mb-4 transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105 hover:shadow-lg hover:translate-y-1 hover:translate-x-1"
            onClick={() => setIsMenuOpen(false)}
          >
            ✖
          </button>
          {(() => {
            const items = [];
            for (let index = 0; index < menuItems.length; index++) {
              const item = menuItems[index];
              items.push(
                <div key={index} className="w-full">
                  <a
                    href="#"
                    className={`block w-full px-2 py-2 text-black ${item.bgColor} hover:opacity-100 text-left hidden md:block`}
                  >
                    {item.title}
                  </a>
                  {(() => {
                    const subItems = [];
                    for (let subIndex = 0; subIndex < item.subItems.length; subIndex++) {
                      const subItem = item.subItems[subIndex];
                      subItems.push(
                        <a
                          key={subIndex}
                          href="#"
                          className="menu-nav block w-full px-4 py-2 text-black hover:bg-black/30 text-left"
                        >
                          {subItem}
                        </a>
                      );
                    }
                    return subItems;
                  })()}
                </div>
              );
            }
            return items;
          })()}
        </div>
      )}
    </nav>
  )
}

export default Navbar