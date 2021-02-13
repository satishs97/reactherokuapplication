import React, { useState } from 'react'

const NavBar = ({ onFilter }) => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-3 lg:px-48 py-3 lg:py-4 text-black">
      <div className="font-bold text-base lg:text-lg cursor-pointer flex items-center">
      </div>

      <div className="flex items-center">
        <span>
          <input
            type="text"
            className=" border-grey  w-40 lg:w-40 "
            placeholder="Search..."
            onChange={onFilter}
          />
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>      </div>
    </nav>
  )
}

export default NavBar