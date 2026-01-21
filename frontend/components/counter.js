"use client"
import { useEffect, useState } from "react"

const Counter = () => {

  const timeInDay = 3;
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60 * 1000 * timeInDay) // 1 day in ms
  

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1000)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000))

  const days = Math.floor(totalSeconds / (3600 * 24))
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const format = (val) => String(val).padStart(2, "0")

  return (
    <div className="flex flex-wrap gap-2 text-black font-light tracking-wider">
        <div className="text-lg sm:text-3xl md:text-4xl">
            {format(days)}<span className="text-xs sm:text-sm ml-1">Day</span>
        </div>
        <div className="text-lg sm:text-3xl md:text-4xl">
            {format(hours)}<span className="text-xs sm:text-sm ml-1">Hr</span>
        </div>
        <div className="text-lg sm:text-3xl md:text-4xl">
            {format(minutes)}<span className="text-xs sm:text-sm ml-1">Min</span>
        </div>
        <div className="text-lg sm:text-3xl md:text-4xl">
            {format(seconds)}<span className="text-xs sm:text-sm ml-1">Sec</span>
        </div>
        </div>
  )
}

export default Counter
