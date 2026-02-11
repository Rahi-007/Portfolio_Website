"use client";

import Navbar from "../components/layouts/Navbar";
import Hero from "../components/layouts/Hero";
import About from "../components/layouts/About";
import Experience from "../components/layouts/Experience";
import Tech from "../components/layouts/Tech";
import Works from "../components/layouts/Works";
import Feedbacks from "../components/layouts/Feedbacks";
import Stars from "../components/layouts/canvas/Stars";
import Contact from "../components/layouts/Contact";
import "../style/globals.css";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div>
        <Contact />
        <Stars />
      </div>
      {/* <div className="flex justify-center items-center h-screen">
        Home Page
      </div> */}
    </>
  );
}
