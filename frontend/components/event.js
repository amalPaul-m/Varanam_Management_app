"use client"
import { useRouter } from "next/navigation"
import { MdArrowOutward } from "react-icons/md"

const Event = () => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push("/dashboard/function")}
      className="relative min-w-90 h-60 md:h-90 bg-[#ffffff] md:bg-linear-to-br from-[#f6f6f6] to-[#ffe281] rounded-3xl overflow-hidden cursor-pointer mx-auto md:mx-0 flex flex-col"
    >

      <div className="flex items-center justify-between px-5 pt-5 shrink-0">
        <h1 className="text-lg md:text-2xl font-semibold md:font-light text-black">
          Functions
        </h1>
        <div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow-md">
          <MdArrowOutward className="text-lg md:text-2xl" />
        </div>
      </div>

      <div className="mt-4 px-5 mb-4 flex-1 overflow-y-auto scrollbar-thin">
        <div className="space-y-3">
          <div className="flex justify-between text-black">
            <p className="text-sm md:text-xl">Bachelor Party</p>
            <p className="text-xs md:text-lg">10 Days left</p>
          </div>
          <div className="flex justify-between text-black">
            <p className="text-sm md:text-xl">Madhuram vepp</p>
            <p className="text-xs md:text-lg">12 Days left</p>
          </div>
          <div className="flex justify-between text-black">
            <p className="text-sm md:text-xl">Wedding</p>
            <p className="text-xs md:text-lg">13 Days left</p>
          </div>

          <div className="flex justify-between text-black">
            <p className="text-sm md:text-xl">Bachelor Party</p>
            <p className="text-xs md:text-lg">10 Days left</p>
          </div>
          <div className="flex justify-between text-black">
            <p className="text-sm md:text-xl">Madhuram vepp</p>
            <p className="text-xs md:text-lg">12 Days left</p>
          </div>
          <div className="flex justify-between text-black">
            <p className="text-sm md:text-xl">Wedding</p>
            <p className="text-xs md:text-lg">13 Days left</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Event
