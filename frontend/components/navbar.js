"use client"
import { IoSettingsOutline } from "react-icons/io5"
import { FiBell } from "react-icons/fi"
import Image from "next/image"
import { Badge } from '@mui/material';

const NavBar = () => {
  return (
    <header className="w-full px-5 sm:px-6 md:px-10 py-5">
      <div className="flex items-center justify-between">

        <h1 className="shrink-0 font-bold text-sm md:text-xl md:font-light text-black border border-black px-4 py-2 rounded-full">
          Varanam
        </h1>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">

          <button className="flex items-center gap-2 cursor-pointer bg-white rounded-full px-3 sm:px-4 py-3 shadow text-black hover:scale-110 transition">
            <IoSettingsOutline className="text-xl transition-transform duration-300 ease-in-out hover:rotate-100" />
            <span className="hidden sm:inline">Settings</span>
          </button>

          <Badge
            color="error"
            overlap="circular"
            badgeContent={1} 
            className="cursor-pointer"
            >
            <div className="p-3 bg-white text-black rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-12">
                <FiBell className="text-xl" />
            </div>
          </Badge>

          <Image
            src="/favicon.ico"
            alt="User avatar"
            width={45}
            height={45}
            className="rounded-full"
          />
        </div>

      </div>
    </header>
  )
}

export default NavBar
