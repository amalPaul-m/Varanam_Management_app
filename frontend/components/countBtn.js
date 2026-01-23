"use client"
import { IoPeopleSharp, IoPerson } from "react-icons/io5"
import { BiSolidParty } from "react-icons/bi"
import { IoMdPricetags } from "react-icons/io"

const CountBtn = () => {
  return (
<div className="flex flex-wrap gap-3 w-full mx-3 my-1 md:mx-0 md:my-0">

  <div className="hidden md:block min-w-30 text-start">
    <p className="text-xs md:text-lg text-black mb-1 ps-2">Total Guests</p>
    <div className="px-4 py-2 rounded-full bg-[#303030] text-white text-sm md:text-lg text-center">
      100
    </div>
  </div>
  
  <div className="hidden md:block min-w-30 text-start">
    <p className="text-xs md:text-lg text-black mb-1 ps-2">Total Guests</p>
    <div className="px-4 py-2 rounded-full bg-[#ffd85f] text-black text-sm md:text-lg text-center">
      100
    </div>
  </div>
  

  <div className="hidden md:block min-w-30 text-start">
    <p className="text-xs md:text-lg text-black mb-1 ps-2">Total Guests</p>
    <div className="px-4 py-2 rounded-full bg-[#f6f6f6] text-black text-sm md:text-lg text-center">
      100
    </div>
  </div>

  <div className="hidden md:block  min-w-30 text-start">
    <p className="text-xs md:text-lg text-black mb-1 ps-2">Total Guests</p>
    <div className="px-4 py-2 rounded-full border text-black text-sm md:text-lg text-center">
      100
    </div>
  </div>


  {/* make Mobile view */}

    <div className="block md:hidden w-[48%]">
    <div className="px-4 py-4 rounded-xl bg-[#1a1a1a] text-white text-sm flex items-center justify-between">
      <div className="flex flex-col text-start">
        <p className="text-base font-bold">Guests</p>
        <p className="text-sm opacity-90">100</p>
      </div>
      <span className="text-3xl font-semibold">
        <IoPeopleSharp />
      </span>
    </div>
  </div>

  <div className="block md:hidden w-[48%]">
    <div className="px-4 py-4 rounded-xl bg-[#f5b400] text-white text-sm flex items-center justify-between">
      <div className="flex flex-col text-start">
        <p className="text-base font-bold">Vendors</p>
        <p className="text-sm opacity-90">25</p>
      </div>
      <span className="text-3xl font-semibold">
        <IoPerson />
      </span>
    </div>
  </div>

      <div className="block md:hidden w-[48%]">
    <div className="px-4 py-4 rounded-xl bg-[#b10044] text-white text-sm flex items-center justify-between">
      <div className="flex flex-col text-start">
        <p className="text-base font-bold">Functions</p>
        <p className="text-sm opacity-90">8</p>
      </div>
      <span className="text-3xl font-semibold">
        <BiSolidParty />
      </span>
    </div>
  </div>

  <div className="block md:hidden w-[48%]">
    <div className="px-4 py-4 rounded-xl bg-[#8d2302] text-white text-sm flex items-center justify-between">
      <div className="flex flex-col text-start">
        <p className="text-base font-bold">Budget</p>
        <p className="text-sm opacity-90">₹ 300000</p>
      </div>
      <span className="text-3xl font-semibold">
        <IoMdPricetags />
      </span>
    </div>
  </div>

</div>


  )
}

export default CountBtn
