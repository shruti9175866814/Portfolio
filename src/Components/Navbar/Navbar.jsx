import { RiCloseLine,RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react'

const Navbar = () => {
    const [menu,openMenu]=useState(false);
    const [showMenu, setShowmenu]=useState(true);
  return (
    <nav className="bg-[#0f1b3d] text-white flex justify-between items-center px-10 md:px-20 h-16">
      <div className="flex items-center gap-1 cursor-pointer">
  <span
    className="text-2xl font-extrabold 
    bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 
    bg-clip-text text-transparent">
    Portfolio
  </span>
  <span className="text-blue-500 text-3xl leading-none">..</span>
</div>

      <ul className={`flex gap-8 font-medium ${menu ? "block absolute top-16 left-0 w-full bg-[#0f1b3d] p-4 md:static md:flex md:w-auto md:bg-transparent" : "hidden md:flex"}`}>
  <a href="#About"><li className="cursor-pointer hover:text-blue-400 py-2 md:py-0">About</li></a>
  <a href="#Experience"><li className="cursor-pointer hover:text-blue-400 py-2 md:py-0">Experience</li></a>
  <a href="#Projects"><li className="cursor-pointer hover:text-blue-400 py-2 md:py-0">Projects</li></a>
  <a href="#Footer"><li className="cursor-pointer hover:text-blue-400 py-2 md:py-0">Contact</li></a>
</ul>

      {showMenu ? (
        <RiMenu2Line 
        size={30}
         className="md:hidden absolute right-10 top-6 transition-all duration-300" 
         onClick={()=>
            {
            openMenu(!menu);
            setShowmenu(!showMenu);
        }} 
        />
      ):(
        <RiCloseLine
         size={30} 
         className="md:hidden absolute right-10 top-6 transition-all duration-300"/>
      )}
    </nav>
  )
}

export default Navbar
