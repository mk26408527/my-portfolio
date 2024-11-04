"use client"

import { useEffect } from "react";
import Hero from "../components/hero"
import Main from "../components/main"
import AOA from "aos"
import 'aos/dist/aos.css';
import Aos from "aos";

export default function Home() {
  useEffect (() => {
    AOA.init ({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    Aos.refresh();
  },[] );
  return (
   
    <main >
      <Hero />
      <Main />
    </main>
  );
}