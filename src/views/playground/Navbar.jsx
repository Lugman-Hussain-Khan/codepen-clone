import React from "react"
import LikeButton from "./components/LikeButton"
import SaveButton from "./components/SaveButton"

const Navbar = () => {
  return (
    <nav className="h-16 w-full bg-neutral-800 border-b-2 border-neutral-700 flex items-center justify-between relative px-4">
      <button className="text-white flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
        <h1 className="text-sm">Dashboard</h1>
      </button>
      <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <input
          type="text"
          value="Untitled"
          className=" bg-transparent text-white text-center focus:outline-none"
        />
      </form>
      <div className="flex items-center gap-3">
        <SaveButton />
        <LikeButton />
      </div>
    </nav>
  )
}

export default Navbar
