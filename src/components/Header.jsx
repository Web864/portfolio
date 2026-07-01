import React, { useState } from "react";
import logo from "../assets/img/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black h-20 px-6 flex items-center justify-between relative">

      {/* Logo */}
      <div>
        <img src={logo} alt="Portfolio logo" className="h-20 w-24 object-contain" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 text-gray-400">
        <li><a href="#about" className="hover:text-white">About</a></li>
        <li><a href="#skills" className="hover:text-white">Skills</a></li>
        <li><a href="#projects" className="hover:text-white">Projects</a></li>
        <li><a href="#experience" className="hover:text-white">Experience</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Hire Button */}
        <a href="#contact" className="hireBtn hidden md:block">
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-[#111118] md:hidden z-50">
          <ul className="flex flex-col items-center py-6 gap-6 text-gray-300">
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
            <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
            <li>
              <a href="#contact" className="hireBtn" onClick={() => setOpen(false)}>
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}

    </header>
  );
}