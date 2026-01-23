"use client"

import { createContext, useContext, useEffect, useState } from "react"

const GuestDataContext = createContext(null)

export function GuestDataProvider({ children }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        // const result = await fetchProducts()
        const result = [
            {"id":100,"name":"Amal Paul","relation":"Close Relative","functions": ["Bachilor Party", "Maduram vepp", "wedding"],"total_guest":5, "food":"Veg", "mobile":"+91 8301877983", "address":"perumbavoor"},
            {"id":101,"name":"Anto Sunny","relation":"Relative","functions": ["Bachilor Party", "Maduram vepp", "wedding"],"total_guest":3, "food":"Non Veg", "mobile":"+91 8301877983", "address":"perumbavoor"},
            {"id":102,"name":"Anandu Saju","relation":"Friend","functions": ["Bachilor Party", "Maduram vepp", "wedding"],"total_guest":4, "food":"Non Veg", "mobile":"+91 8301877983", "address":"perumbavoor"}
        ]
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <GuestDataContext.Provider value={{ data, loading, error, setData }}>
      {children}
    </GuestDataContext.Provider>
  )
}

export function useGuestData() {
  const ctx = useContext(GuestDataContext)
  if (!ctx) throw new Error("useData must be used inside DataProvider")
  return ctx
}
