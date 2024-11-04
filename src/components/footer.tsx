import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Mission Section */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-lg font-bold mb-2">Our Mission</h2>
            <p className="text-gray-300">
              We aim to create innovative solutions that enhance user experience and drive success.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-lg font-bold mb-2">Explore</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Our Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Get in Touch</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-lg font-bold mb-2">Connect With Us</h2>
            <div className="flex justify-start md:justify-end space-x-4 mr-44">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-7 h-7 hover:text-yellow-400 transition-colors duration-200" />
              </Link>
              <Link href="https://github.com/mk26408527" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare className="w-7 h-7 hover:text-yellow-400 transition-colors duration-200" />
              </Link>
              <Link href="https://www.instagram.com/itx_hezzi/" target="_blank" rel="noopener noreferrer">
                <BsInstagram className="w-7 h-7 hover:text-yellow-400 transition-colors duration-200" />
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-huzaifa-9102282b7/" target="_blank" rel="noopener noreferrer">
                <CiLinkedin className="w-7 h-7 hover:text-yellow-400 transition-colors duration-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <h2 className="text-lg font-bold mb-2">Get In Touch</h2>
          <p className="text-gray-300">Email: info@example.com</p>
          <p className="text-gray-300">Phone: +123-456-7890</p>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">© 2024 Portfolio Website M.H. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
