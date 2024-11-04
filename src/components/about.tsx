/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import image from '../../public/image.jpg'
import Button from '../components/button'
import Link from "next/link"

const About = () => {
  return (
    <main className="bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8 max-w-6xl mx-auto">
        
        <div data-aos="zoom-in-up" className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1 mt-8 lg:mt-0">
          <Image
            src={image}
            alt='Profile picture'
            width={380}
            height={380}
            className="rounded-sm w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px]"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 order-1 lg:order-2">
          <p data-aos="zoom-in-up" className="text-purple-400 text-base sm:text-lg">WHO AM I?</p>
          <h2 data-aos="zoom-in-up" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">I'm Muhammad Huzaifa, a visual UI/UX Designer and Web Developer</h2>
          <p data-aos="zoom-in-up" className="text-gray-400 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi atque rem saepe ipsa distinctio soluta molestias harum aspernatur sequi explicabo architecto blanditiis repellat error in laborum libero optio dicta deserunt, facilis, sed fuga reprehenderit assumenda! Nesciunt aliquid ab dolor vero vel. Officia asperiores modi architecto!</p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Name:</h3>
                <p className="text-gray-400">Muhammad Huzaifa</p>
              </div>
              <div>
                <h3 className="font-semibold">Age:</h3>
                <p className="text-gray-400">17 Years</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">From:</h3>
                <p className="text-gray-400">Karachi, Pakistan</p>
              </div>
              <div>
                <h3 className="font-semibold">Email:</h3>
                <p className="text-gray-400 break-all">muhammadhuzaifa200t@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
          <Button title="Download CV" href="/MY-C.V.pdf" className="custom-class w-full sm:w-auto px-8 py-2"/>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 text-gray-400">
            <Link href="https://github.com/mk26408527" className="hover:text-white">Twitter</Link>
            <Link href="https://www.instagram.com/itx_hezzi/" className="hover:text-white">Instagram</Link>
            <Link href="https://facebook.com" className="hover:text-white">Facebook</Link>
            <Link href="https://www.linkedin.com/in/muhammad-huzaifa-9102282b7/" className="hover:text-white">LinkedIn</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About