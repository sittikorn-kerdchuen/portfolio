import React, { useState } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// import image
import logo from '../assets/logo.png'

function Navbar({ isDark, dark }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <div className='fixed w-[100%] md:bg-zinc-900 md:bg-opacity-70'>
      {/* desk nav */}
      <div className={dark ? 'dark-theme p-5 flex justify-between sticky top-0 z-10 md:hidden' : 'p-5 flex justify-between light-nav sticky top-0 z-10 md:hidden'}>
        <div className=''>
          <img src={logo} width='50px' alt="" />
        </div>

        <div className=' relative top-2 lg:block md:hidden sm:hidden' id="navbar-default">
          <ul className='flex gap-5'>
            <li className='text-xl font-bold hover:cursor-pointer'><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='text-xl font-bold hover:cursor-pointer'><Link to="skill" smooth={true} duration={500}>Skill</Link></li>
            <li className='text-xl font-bold hover:cursor-pointer'><Link to="project" smooth={true} duration={500}>Project</Link></li>
            <li className='text-xl font-bold hover:cursor-pointer'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            <li className='text-xl font-bold hover:cursor-pointer'>
              <button className='bg-yellow-500 px-2 rounded' onClick={isDark}>Dark Mode</button>
            </li>
          </ul>
        </div>
      </div>

      {/* mobile nav */}
      <div className='2xl:hidden md:block relative mx-2' id="navbar-default">
        <div className='flex justify-between items-center'>
          <div className=''>
            <img src={logo} width='50px' alt="" />
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="  inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden md:block hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-900 dark:focus:ring-gray-600 relative z-20"
            aria-controls="navbar-default"
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"}
              />
            </svg>
          </button>
        </div>
        {mobileMenuOpen ? (
          <ul className='flex flex-col  duration-500 fixed w-1/2 right-0 h-screen text-center gap-5 top-0 bg-opacity-90 py-14 text-white bg-zinc-700'>
            <li className='text-xl font-bold'><Link to="home" smooth={true} duration={500} onClick={toggleMobileMenu} >Home</Link></li>
            <li className='text-xl font-bold'><Link to="skill" smooth={true} duration={500} onClick={toggleMobileMenu}>Skill</Link></li>
            <li className='text-xl font-bold'><Link to="project" smooth={true} duration={500} onClick={toggleMobileMenu}>Project</Link></li>
            <li className='text-xl font-bold'><Link to="contact" smooth={true} duration={500} onClick={toggleMobileMenu}>Contact</Link></li>
            <li className='text-xl font-bold mt-20'>
              <button className='bg-yellow-500 px-2 rounded text-black' onClick={()=>(isDark(),toggleMobileMenu())}>Dark Mode</button>
            </li>
          </ul>
        ) :
          <ul className='flex flex-col  translate-x-full duration-500 fixed left-96 py-14 text-white md:hidden sm:flex h-screen'>
            <li className='text-xl font-bold'><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='text-xl font-bold'><Link to="skill" smooth={true} duration={500}>Skill</Link></li>
            <li className='text-xl font-bold'><Link to="project" smooth={true} duration={500}>Project</Link></li>
            <li className='text-xl font-bold'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            <li className='text-xl font-bold'>
              <button className='bg-yellow-500 px-2 rounded text-black' onClick={isDark}>Dark</button>
            </li>
          </ul>}

      </div>
    </div>
  )
}

export default Navbar