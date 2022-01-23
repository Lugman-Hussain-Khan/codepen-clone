import React from "react"

const Navbar = () => {
  return (
    <nav className="h-16 w-full bg-neutral-800 border-b-2 border-neutral-700 flex items-center justify-between px-4 relative">
      <button className="text-white">Dashboard</button>
      <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <input
          type="text"
          value="Untitled"
          className=" bg-transparent text-white text-center focus:outline-none focus:border-b border-white"
        />
      </form>
    </nav>
  )
}

export default Navbar
