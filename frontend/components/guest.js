"use client"
import { MdArrowOutward } from "react-icons/md"
import Image from "next/image"

const Guest = () => {
  return (
    <div className="relative w-90 h-90 bg-[#f6f6f6] rounded-4xl overflow-hidden cursor-pointer mx-auto md:mx-0">

      <div className="absolute top-2 right-2 w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow-md z-10">
        <MdArrowOutward className="text-2xl" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-25 flex items-center justify-between px-4 backdrop-blur-xs rounded-b-4xl z-10">
        <div className="px-3">
        <h2 className="text-black font-bold md:font-light text-xl">Event Guests</h2>
        <p className="text-black">Manage your guests</p>
        </div>
      </div>

      <Image
        src="/man.jpg"
        alt="guest"
        fill
        className="object-cover object-top"
      />

    </div>



  )
}

export default Guest
