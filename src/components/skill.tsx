"use client";

import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiHtml5, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FaCss3Alt, FaSquareGithub } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";

const skills = [
  { name: "JavaScript", Icon: IoLogoJavascript, color: "text-yellow-400", description: "Powerful scripting language." },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-600", description: "JavaScript with types." },
  { name: "HTML5", Icon: SiHtml5, color: "text-orange-500", description: "Markup for web structure." },
  { name: "CSS3", Icon: FaCss3Alt, color: "text-blue-400", description: "Styling for web design." },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-teal-400", description: "Utility-first CSS framework." },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-black dark:text-white", description: "React framework for production." },
  { name: "React", Icon: RiReactjsLine, color: "text-blue-500", description: "Library for UI building." },
  { name: "GitHub", Icon: FaSquareGithub, color: "text-gray-800 dark:text-white", description: "Version control platform." },
];

export default function Skills() {
  return (
    <section className="py-16 from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 data-aos="fade-up" className="text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white underline underline-offset-8">
          Skills
        </h2>
        <div data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name} data-aos="fade-up"
              className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div data-aos="fade-up" className="p-5 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <skill.Icon className={`text-5xl ${skill.color}`} />
              </div>
              <span data-aos="fade-up" className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
              <p data-aos="fade-up" className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-[8rem]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
