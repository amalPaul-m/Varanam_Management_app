export default function Loading() {
  return (
    <>
    <div className="hidden md:block fixed inset-0 items-center justify-center bg-white z-50">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
    </div>

    {/* mobile view */}
    <div className="md:hidden p-6 space-y-4">

      <div className="flex content-between justify-between">
        <span className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
        <span className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
      </div>
    
      <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-42 bg-gray-200 rounded animate-pulse"
          />
        ))}
      </div>
    </div>
    </>
  )
}
