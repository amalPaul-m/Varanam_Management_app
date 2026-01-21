"use client"
import { IoSettingsOutline } from "react-icons/io5"
import { FiBell } from "react-icons/fi"
import { Badge } from '@mui/material';
import { useState, useEffect, useRef } from "react";
import Avatar from '@mui/material/Avatar';

function stringAvatar(name = "") {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map(word => word[0].toUpperCase())
    .slice(0, 2)
    .join("")

  return {
    sx: {
      bgcolor: "#000000",
      width: 45,
      height: 45,
      fontSize: "1.2rem",
      fontWeight: "bold"
    },
    children: initials,
  }
}

const NavBar = () => {

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full px-5 sm:px-6 md:px-10 py-5">
      <div className="flex items-center justify-between">

        <h1 className="shrink-0 font-bold text-sm md:text-xl md:font-light text-black border border-black px-4 py-2 rounded-full">
          Event Management
        </h1>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">

          <div className="relative inline-block" ref={dropdownRef}>

          <button onClick={()=>setOpen(true)} className="flex items-center gap-2 cursor-pointer bg-white rounded-full px-3 sm:px-4 py-3 shadow text-black hover:scale-110 transition">
            <IoSettingsOutline className="text-lg md:text-xl transition-transform duration-300 ease-in-out hover:rotate-100" />
            <span className="hidden sm:inline">Settings</span>
          </button>

          {open && (
          <div className="absolute right-0 mt-2 w-30 bg-white shadow-lg rounded-4xl z-50">
          <ul className="flex flex-col p-2">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-4xl"
            >
              Dark
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-4xl"
            >
              Profile
            </li>
          </ul>
        </div>

        )}

        </div>

          <Badge
            color="error"
            overlap="circular"
            badgeContent={1} 
            className="cursor-pointer"
            >
            <div className="p-3 bg-white text-black rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-12">
                <FiBell className="text-lg md:text-xl" />
            </div>
          </Badge>

          <Avatar {...stringAvatar('Amal Paul')} />
        </div>

      </div>
    </header>
  )
}

export default NavBar
