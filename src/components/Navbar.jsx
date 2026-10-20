import { Link } from "react-router-dom";
import { useState } from "react";


function Navbar() {
  

  return (
    <nav className=" w-full z-50 bg-gray-950 text-white shadow-md" >
     <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-evenly" >
          
           <div className="mx-25 hover:text-xl text-white-500 hover:text-violet-600">
            <span>Pradum Sonkar</span>
          </div>

            <div className=" hover:text-violet-600">
            <Link to="/"  >
              Home
            </Link></div>

            <div className=" hover:text-violet-600">
            <Link to="/about" >
              About
            </Link></div>

            <div className="hover:text-violet-600">
            <Link to="/skills" >
              Skills
            </Link></div>

            <div className=" hover:text-violet-600">
            <Link to="/projects" >
              Projects
            </Link></div>

            <div className=" hover:text-violet-600">
            <Link to="/education" >
              Education
            </Link></div>

            <div className=" hover:text-violet-600">
            <Link to="/contact">
              Contact Us
            </Link>
            </div>

          </div>
        </div>
    </nav>
  );
}

export default Navbar;

