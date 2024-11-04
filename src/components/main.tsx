import Image from 'next/image';
import facebook from "../../public/facebook.jpg"; 
import calc from "../../public/calc.png";
import tic from "../../public/tic.png";
import Button from "../components/button";

export default function Main() {
  return (
    <section className="bg-black py-16">
      {/* Headings and text in center */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-white text-3xl mb-4">Project Overview</h2>
        <p className="text-gray-600 max-w-lg mb-24 leading-relaxed">
          This project showcases my early journey into design, where I faced challenges as a beginner but managed to create a clean and functional design, pushing myself to learn and grow along the way.
        </p>
      </div>

       {/* Tic Tac Toe Section */}
       <div data-aos="zoom-in-up" className="flex flex-col md:flex-row items-start justify-between max-w-5xl mx-auto mb-20">
        {/* Text section */}
        <div className="flex-1 mb-6 mt-3 md:mb-0 md:pr-8">
          <h2 className="text-white mb-4 text-3xl font-extrabold">Tic Tac Toe</h2>
          <p className="text-gray-600">
            I created a simple Tic Tac Toe game,<br /> focusing on user-friendly interface,<br /> interactive game play, and easy<br /> navigation. The design features<br /> clear grids and a responsive layout.
          </p>
          <Button title="View" href="https://tic-tac-game-design.vercel.app/" className="custom-class -mt-7" />
        </div>

        {/* Image section */}
        <div className="flex-1 mb-6 mt-3 md:mb-0">
          <Image 
            src={tic}
            alt="Simple Tic Tac Toe design"
            width={435} 
            height={310} 
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>

        {/* Calculator Design Section */}
        <div data-aos="zoom-in-up" className="flex flex-col md:flex-row items-start justify-between max-w-5xl mx-auto mb-20">
        {/* Image section */}
        <div className="flex-1 mb-6 mt-3 md:mb-0 md:pr-40">
          <Image 
            src={calc}
            alt="Simple Calculator design"
            width={435} 
            height={310} 
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Text section */}
        <div className="flex-1">
          <h2 className="text-white mb-4 text-3xl font-extrabold">Calculator Design</h2>
          <p className="text-gray-600">
            I created a simple calculator,<br /> focusing on basic operations like addition,<br /> subtraction, multiplication, and division.<br /> The design features a clean interface<br /> with clear buttons and a responsive layout.
          </p>
          <Button title="View" href="https://calculator-v1.vercel.app/" className="custom-class -mt-7" />
        </div>
      </div>


      {/* Facebook Clone Section */}
      <div data-aos="zoom-in-up" className="flex flex-col md:flex-row items-start justify-between max-w-5xl mx-auto mb-20">
        {/* Text section */}
        <div className="flex-1 mb-4 md:mb-0 md:pr-8">
          <h2 className="text-white mb-4 text-3xl font-extrabold">Facebook Clone</h2>
          <p className="text-gray-600">
            I created a replica of the Facebook login screen,<br /> emphasizing clean UI and Flexbox alignment. <br /> The design features input fields for email and password, <br /> a prominent login button, and a subtle hover effect.
          </p>
          <Button title="View" href="https://fb-signup-page-jwzu.vercel.app/" className="custom-class -mt-7" />
        </div>

        {/* Image section */}
        <div className="flex-1 mb-6 mt-3 md:mb-0 md:pl-8">
          <Image 
            src={facebook}
            alt="Facebook clone sign up page"
            width={435} 
            height={310} 
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
