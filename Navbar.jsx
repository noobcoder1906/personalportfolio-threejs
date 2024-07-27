import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-gray-500 items-center justify-center flex font-bold shadow-md">

        <p>SS</p>
      </NavLink>
      
      <nav className="flex text-lg gap-9 font-serif"/>

      <NavLink to="/aboutme" className={({isActive}) => isActive ? 'text-red-300': 'text-black-500'}>
        <p>AboutMe</p>


      </NavLink>
      <NavLink to="/mystuffs" className={({isActive}) => isActive ? 'text-red-300': 'text-black-500'}>
        <p>MyStuffs</p>
      </NavLink>
      <NavLink to="/contact"className={({isActive}) => isActive ? 'text-red-300': 'text-black-500'}>
        <p>Contact</p>
      </NavLink>
    </header>
  );
}


export default Navbar;
