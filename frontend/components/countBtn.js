"use client"

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
    <div className="px-4 py-4 rounded-xl bg-[#303030] text-white text-sm flex items-center justify-between">
      <div className="flex flex-col text-start">
        <p className="text-base font-bold">Guests</p>
        <p className="text-sm opacity-90">Total Count</p>
      </div>
      <span className="text-lg font-semibold">
        100
      </span>
    </div>
  </div>

  <div className="block md:hidden w-[48%]">
    <div className="px-4 py-4 rounded-xl bg-[#f5b400] text-white text-sm flex items-center justify-between">
      <div className="flex flex-col text-start">
        <p className="text-base font-bold">Vendors</p>
        <p className="text-sm opacity-90">Total Count</p>
      </div>
      <span className="text-lg font-semibold">
        100
      </span>
    </div>
  </div>

      <div className="block md:hidden w-[48%]">
    <div className="px-4 py-4 rounded-xl bg-[#b10044] text-white text-sm flex items-center justify-between">
      <div className="flex flex-col text-start">
        <p className="text-base font-bold">Guests</p>
        <p className="text-sm opacity-90">Total Count</p>
      </div>
      <span className="text-lg font-semibold">
        100
      </span>
    </div>
  </div>

  <div className="block md:hidden w-[48%]">
    <div className="px-4 py-4 rounded-xl bg-[#8d2302] text-white text-sm flex items-center justify-between">
      <div className="flex flex-col text-start">
        <p className="text-base font-bold">Vendors</p>
        <p className="text-sm opacity-90">Total Count</p>
      </div>
      <span className="text-lg font-semibold">
        100
      </span>
    </div>
  </div>

</div>


  )
}

export default CountBtn
