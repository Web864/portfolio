import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/img/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black h-20 px-6 flex items-center justify-between relative">
      <div className="flex items-center">
        <img src={logo} alt="Portfolio logo" className="h-20 w-24 object-contain" />
      </div>

      <ul className="hidden md:flex items-center gap-10 text-gray-400">
        <li><a href="#about" className="hover:text-white">About</a></li>
        <li><a href="#skills" className="hover:text-white">Skills</a></li>
        <li><a href="#projects" className="hover:text-white">Projects</a></li>
        <li><a href="#experience" className="hover:text-white">Experience</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
      </ul>

      <div className="flex items-center gap-4">
        <a href="#contact" className="hireBtn" onClick={() => setOpen(false)}>
          Hire Me
        </a>

        <button
          type="button"
          className="md:hidden text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={35} /> : <Menu size={35} />}
        </button>
      </div>

      {open && (
        <div className="absolute top-20 left-0 w-full bg-[#111118] md:hidden z-50">
          <ul className="flex flex-col items-center py-6 gap-6 text-gray-300">
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
            <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
