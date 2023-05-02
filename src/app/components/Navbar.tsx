"use client";
import { useState } from "react";

import { Squash as Hamburger } from "hamburger-react";

function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);

  const handleMobile = () => {
    setOpenMobile(!openMobile);
    
    if (openMobile) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="bg-[#F9F5EE] text-black z-10">
      <hr className="border-none h-4 bg-black" />
      <button
        onClick={handleMobile}
        className="md:hidden absolute z-10 right-8 top-8"
      >
        <Hamburger color={`${openMobile ? "#fff" : "#000"}`} />
      </button>

      <div
        className={`flex items-center justify-center h-20 ${
          openMobile
            ? "bg-black translate-y-0 h-mobile"
            : "-translate-y-0 "
        } bg-[#F9F5EE] transition-all duration-500 ease-out`}
      >
        <ul className={`flex gap-4`}>
          <li className="absolute left-8 top-6 md:static">
            SINCRO<strong>PLAN</strong>
          </li>
          <ul className="flex flex-col gap-4 md:flex-row">
            <li className="hidden md:flex">QUEM SOMOS</li>
            <li className="hidden md:flex">PROJETOS DESENVOLVIDOS</li>
            <li className="hidden md:flex">SOFTWARES</li>
            <li className="hidden md:flex">EXPLORAR</li>
          </ul>
        </ul>
      </div>
      <div>
        <ul
          className={`absolute top-28 left-8 flex flex-col gap-5 z-30 text-lg text-white ${
            openMobile ? "animate-fade-in-down" : "invisible"
          }`}
        >
          <li>QUEM SOMOS</li>
          <li>PROJETOS DESENVOLVIDOS</li>
          <li>SOFTWARES</li>
          <li>EXPLORAR</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
