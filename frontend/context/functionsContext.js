"use client"

import { createContext, useContext, useEffect, useState } from "react"

const FunctionDataContext = createContext(null)

export function FunctionDataProvider({ children }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        // const result = await fetchProducts()
        const result = [
        {"id":100,"name":"Madhuram Veppu","date":"15-09-2025","time":"9.10 AM","location":"perumbavoor"},
        {"id":101,"name":"Wedding","date":"15-09-2025","time":"9.10 AM","location":"perumbavoor"},
        {"id":102,"name":"Engagement","date":"15-09-2025","time":"9.10 AM","location":"perumbavoor"}
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
    <FunctionDataContext.Provider value={{ data, loading, error, setData }}>
      {children}
    </FunctionDataContext.Provider>
  )
}

export function useFunctionData() {
  const ctx = useContext(FunctionDataContext)
  if (!ctx) throw new Error("useData must be used inside DataProvider")
  return ctx
}
