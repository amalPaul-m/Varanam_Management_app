"use client"
import { IoIosArrowForward } from "react-icons/io"
import Image from "next/image"

const Guest = () => {

  return (
    <div className="relative min-w-90 h-90 bg-[#f6f6f6] rounded-4xl overflow-hidden mx-auto md:mx-0">

      <div className="absolute cursor-pointer bottom-7 right-5 z-50 w-25 h-12 flex items-center justify-center border border-white text-white rounded-full shadow-md">
        <IoIosArrowForward className="text-2xl" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-25 flex items-center justify-between px-4 backdrop-blur-xs rounded-b-4xl z-10">
        <div className="px-3">
        <h2 className="text-white font-bold md:font-light text-xl">Event Guests</h2>
        <p className="text-white">Manage your guests</p>
        </div>
      </div>

      <Image
        src="/events.jpg"
        alt="guest"
        fill
        className="object-cover object-top"
      />

    </div>



  )
}

export default Guest
