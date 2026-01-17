"use client"
import { useRouter } from "next/navigation"
import { MdArrowOutward } from "react-icons/md"

const Event = () => {

  const router = useRouter()
  return (
    <div onClick={() => router.push("/dashboard/function")} className="relative min-w-90 h-90 bg-linear-to-br from-[#f6f6f6] to-[#ffe281] rounded-4xl overflow-hidden cursor-pointer mx-auto md:mx-0">

      <h1 className="absolute top-8 left-5 text-2xl font-semibold md:font-light text-black">Functions</h1>
      <div className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow-md z-10">
        <MdArrowOutward className="text-2xl" />
      </div>
      <div className="relative top-25 md:top-30 left-5 text-xl space-y-3 max-h-50 overflow-y-auto scrollbar-thin">
        <div className="flex justify-between max-w-75 text-black">
          <p className="text-lg sm:text-xl">Bachelor Party</p>
          <p className="text-sm sm:text-lg">10 Days left</p>
        </div>
        <div className="flex justify-between max-w-75 text-black">
          <p className="text-lg sm:text-xl">Madhuram vepp</p>
          <p className="text-sm sm:text-lg">12 Days left</p>
        </div>
        <div className="flex justify-between max-w-75 text-black">
          <p className="text-lg sm:text-xl">Wedding</p>
          <p className="text-sm sm:text-lg">13 Days left</p>
        </div>

        <div className="flex justify-between max-w-75 text-black">
          <p className="text-lg sm:text-xl">Bachelor Party</p>
          <p className="text-sm sm:text-lg">10 Days left</p>
        </div>
        <div className="flex justify-between max-w-75 text-black">
          <p className="text-lg sm:text-xl">Madhuram vepp</p>
          <p className="text-sm sm:text-lg">12 Days left</p>
        </div>
        <div className="flex justify-between max-w-75 text-black">
          <p className="text-lg sm:text-xl">Wedding</p>
          <p className="text-sm sm:text-lg">13 Days left</p>
        </div>
        
      </div>

    </div>



  )
}

export default Event
