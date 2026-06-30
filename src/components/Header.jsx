import React from 'react'
import logo from '../assets/img/logo.png'

function Header() {
  return (
    <div className='w-full flex justify-around items-center bg-black h-20'>
        <div className="nav-logo">
            <img src={logo} alt="Portfolio logo" className="h-[80px] w-[100px]" />
        </div>
        <div className="header-pages-list text-gray-500 ">
            <ul className='flex justify-between gap-10 '>
                <li className='hover:text-white'><a href="#about">About</a></li>
                <li className='hover:text-white'><a href="#skills">Skills</a></li>
                <li className='hover:text-white'><a href="#projects">Projects</a></li>
                <li className='hover:text-white'><a href="#experince">Experience</a></li>
                <li className='hover:text-white'><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div className="hireBtn">
            <button className=''><a href="#contact">Hire Me</a></button>
        </div>
    </div>
  )
}

export default Header