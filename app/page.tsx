"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useState, useEffect } from "react";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const titles = ["UI/UX Designer", "Full Stack Developer", "Graphic Designer"];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % titles.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-0">
            <span className="text-xl">
              Aspiring <span className={`text-accent transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>{titles[currentIndex]}</span>
            </span>
            <h1 className="h1">
              Hello, I&apos;m <br /> <span className="text-accent">Raymond Bondoc</span>
            </h1>
            <p className="max-w-[600px] mb-9 text-white/80 px-6 xl:px-0">I am a Graphic Designer with a foundation in Electronics Engineering. This background fuels my passion for crafting elegant digital experiences and drives me to learn programming languages and technologies. I&apos;m actively expanding my expertise into UI/UX Design and Full Stack Development, motivated by the curiosity to not just design the vision, but to help build the entire system.</p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"></FiDownload>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-0 mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
