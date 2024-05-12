import React from 'react'

export default function Loader() {
  return (
    <>
        <div className="relative  h-8 w-8 rounded-full animate-spin">
            <span className="h-3 w-3 border rounded-full absolute left-0 top-0 bg-green-700 "></span>
            <span className="h-3 w-3 border rounded-full absolute right-0 top-0 bg-fuchsia-700"></span>
            <span className="h-3 w-3 border rounded-full absolute left-0 bottom-0 bg-amber-600"></span>
            <span className="h-3 w-3 border rounded-full absolute right-0 bottom-0 bg-blue-500"></span>
        </div>
    </>
  )
}
