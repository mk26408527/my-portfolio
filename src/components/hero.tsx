import Image from "next/image"
import image from "../../public/image.jpg"
import logos from "../../public/logos.png"
import Button from "../components/button"

export default function Hero() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 lg:py-20">
      <div className="flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-xl mx-auto">
          <div className='flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0 lg:pr-4 w-full lg:max-w-xl'>
            <h1 data-aos="zoom-in-up" className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 whitespace-normal lg:whitespace-nowrap px-4 lg:px-0'>
              {"Hi, I'm Muhammad Huzaifa"}
            </h1>
            <p data-aos="zoom-in-up" className='text-sm sm:text-base md:text-lg text-gray-600 mb-6 px-4 lg:px-0'>
              A Front-end web developer with 2 months of experience.
              I specialize in HTML, CSS, JavaScript, Next.js,
              TypeScript, ShadCN UI, and Tailwind CSS.
            </p>
            <Button title="Download CV" href="/MY-C.V.pdf" className="custom-class w-full sm:w-auto px-8 py-2"/>
          </div>
          <div className="flex justify-center lg:justify-end mb-8 lg:mb-0">
            <Image 
              data-aos="zoom-in-up" 
              src={image} 
              alt="Portfolio Photo"
              width={300}
              height={300}
              className="rounded w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] h-auto lg: mr-10"
            />
          </div>
        </div>
        {/* Bottom logos */}
        <div className="w-full mt-8 lg:mt-16">
          <div className="flex justify-center">
            <Image 
              src={logos} 
              alt="Logos"
              width={1400}
              height={100}
              className="h-auto w-full max-w-[280px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1400px]"
            />
          </div>
        </div>
      </div>
    </main>
  )
}