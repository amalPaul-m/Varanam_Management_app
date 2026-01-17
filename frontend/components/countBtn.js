"use client"

const CountBtn = () => {
  return (
<div className="flex gap-3 w-full mx-3 my-3 md:mx-0 md:my-0 overflow-x-auto">

  <div className="min-w-30 text-start">
    <p className="text-xs md:text-lg text-black mb-1 ps-2">Total Guests</p>
    <div className="px-4 py-2 rounded-full bg-[#303030] text-white text-sm md:text-lg text-center">
      100
    </div>
  </div>

  <div className="min-w-30 text-start">
    <p className="text-xs md:text-lg text-black mb-1 ps-2">Total Guests</p>
    <div className="px-4 py-2 rounded-full bg-[#ffd85f] text-black text-sm md:text-lg text-center">
      100
    </div>
  </div>

  <div className="min-w-30 text-start">
    <p className="text-xs md:text-lg text-black mb-1 ps-2">Total Guests</p>
    <div className="px-4 py-2 rounded-full bg-[#f6f6f6] text-black text-sm md:text-lg text-center">
      100
    </div>
  </div>

  <div className="min-w-30 text-start">
    <p className="text-xs md:text-lg text-black mb-1 ps-2">Total Guests</p>
    <div className="px-4 py-2 rounded-full border text-black text-sm md:text-lg text-center">
      100
    </div>
  </div>

</div>


  )
}

export default CountBtn
