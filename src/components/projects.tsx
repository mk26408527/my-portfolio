'use client';
import Image from 'next/image';
import coffee from '../../public/coffee.jpg';
import sofa from '../../public/sofa.jpg';
import book from '../../public/book.jpg';
import portfolio from '../../public/portfolio.jpg';
import resume from '../../public/resume.jpg';
import fb from '../../public/fb.jpg';

import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Importing GitHub and External Link icons

export default function App() {
  return (
    <main className="py-8">
      <div>
        <h2 data-aos="fade-up" className="text-3xl font-extrabold text-center text-white">My Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-auto max-w-screen-lg px-4 sm:px-0">
        
        {[{ src: coffee, alt: "Coffee website", title: "Coffee Website", github: "https://github.com/mk26408527/Coffee-Website", demo: "https://coffee-website-flax.vercel.app" },
          { src: sofa, alt: "Sofa website", title: "Sofa Website", github: "https://github.com", demo: "https://sofa-set.vercel.app/" },
          { src: book, alt: "Book Store", title: "Book Store", github: "https://github.com/mk26408527/Book-store-landing-page", demo: "https://book-store-landing-page.vercel.app/" },
          { src: portfolio, alt: "Portfolio Website", title: "Portfolio Website", github: "https://github.com/mk26408527/Simple-Portfolio-", demo: "https://simple-portfolio-one-lyart.vercel.app/" },
          { src: resume, alt: "Static Resume", title: "Static Resume", github: "https://github.com/mk26408527/Hackhathone_Milestone/tree/main/MileStone-1", demo: "https://milestone-1-2-sigma.vercel.app/" },
          { src: fb, alt: "Facebook sign-up page", title: "Facebook sign-up page", github: "https://github.com/mk26408527/fb-signup-page", demo: "https://fb-signup-page-jwzu.vercel.app/" }]

          .map((project, index) => (
            <Card data-aos="zoom-in-up" key={index} className="border-2 border-white text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
              <CardBody data-aos="zoom-in-up" className="p-4 flex flex-col items-center">
                <Image
                  src={project.src}
                  alt={project.alt}
                  className="object-cover rounded-xl mb-4 w-full h-auto"
                  width={310}
                  height={300}
                />
                <CardHeader className="text-center">
                  <p className="text-sm uppercase font-bold">{project.title}</p>
                </CardHeader>
                <div className="flex justify-center gap-4 mt-4">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded transition-colors hover:bg-gray-700 flex items-center">
                      <FaGithub className="mr-2" />
                      GitHub
                    </button>
                  </Link>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded transition-colors hover:bg-gray-700 flex items-center">
                      <FaExternalLinkAlt className="mr-2" /> 
                      Live Demo
                    </button>
                  </Link>
                </div>
              </CardBody>
            </Card>
        ))}
      </div>
    </main>
  );
}
