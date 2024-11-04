'use client'

import Link from "next/link";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <main>
      <div className="bg-black">
        <div className="bg-customBlack flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto py-4 pl-14 rounded-xl -mt-5">
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={25} className="text-gray-400" /> : <FaBars size={25} className="text-gray-400" />}
          </div>
          <nav>
            <ul className={`flex-col md:flex-row ${isOpen ? 'flex' : 'hidden'} md:flex gap-y-2 md:gap-x-28 text-gray-400`}>
              <Link href="/" className="underline underline-offset-4 decoration-2 hover:text-gray-300"><li>Home</li></Link>
              <Link href="/about" className="hover:text-gray-300 hover:underline underline-offset-4 decoration-2"><li>About</li></Link>
              <Link href="/project" className="hover:text-gray-300 hover:underline underline-offset-4 decoration-2"><li>Project</li></Link>
              <Link href="/contact" className="hover:text-gray-300 hover:underline underline-offset-4 decoration-2"><li>Contact</li></Link>
            </ul>
          </nav>
          <div className="flex justify-center flex-grow mt-4 md:mt-0">
            <Link href="https://www.linkedin.com/in/muhammad-huzaifa-9102282b7/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={25} className="text-gray-400 hover:text-gray-500 mx-2" />
            </Link>
            <Link href="https://www.instagram.com/itx_hezzi/" target="_blank" rel="noopener noreferrer">
              <SiInstagram size={25} className="text-gray-400 hover:text-gray-500 mx-2" />
            </Link>
            <Link href="https://github.com/mk26408527" target="_blank" rel="noopener noreferrer">
              <SlSocialTwitter size={25} className="text-gray-400 hover:text-gray-500 mx-2" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;