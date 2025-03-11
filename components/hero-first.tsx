"use client";

import React, { useState } from "react";
import Container from "./container";
import Image from "next/image";
import { Button } from "./ui/button";

// Import images
import pup1 from "@/public/landing/pup.png";
import pup2 from "@/public/landing/slide.png";
import pup3 from "@/public/landing/pup3.png";

// import gif from "@/public/landing/gif.gif";

import arrow_right from '@/public/landing/right.png'

const slides = [
  {
    id: 1,
    image: pup1,
    title: "Professional Training",
    subtitle: (
      <div>
        <h2>
          Give your <br />
          dog the best
          <br />
          training experience
        </h2>
      </div>
    ),
    description:
      "We provide world-class training tailored for your pet's needs.",
  },
  {
    id: 2,
    image: pup2,
    title: "Healthy & Happy Pets",
    subtitle: (
      <div>
        <h2>
          Premium care
          <br />
          for your furry
          <br />
          friends
        </h2>
      </div>
    ),
    description:
      "Ensure your dog gets the best food, grooming, and medical care.",
  },
  {
    id: 3,
    image: pup3,
    title: "Adopt a Companion",
    subtitle: (
      <div>
        <h2>
          Find your <br />
          perfect <br /> pet match
        </h2>
      </div>
    ),
    description: "Rescue and adopt dogs that need loving homes.",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <main
      className="relative overflow-hidden bg-gradient-to-tr from-[#FFC107] to-[#FF9800] bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: "url('/landing/wave.svg')" }}
    >
      <Container>
        <div className="flex md:flex-row flex-col md:min-h-[700px] min-h-[500px] items-center md:text-start text-center md:justify-between justify-center"
          data-aos='fade-up'
        >
          {/* Dog Image */}
          <div className="relative h-auto w-160">
            <Image
              key={slides[activeIndex].id}
              src={slides[activeIndex].image}
              alt="Dog"
              priority
              className={`md:block hidden object-contain transition-opacity duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            />

          </div>
            {/* <Image src={gif} alt="dog playing"  className="absolute w-20 h-20 rounded-full top-50 right-160"/> */}

            <h1 className="text-[54px] absolute rounded-full top-60 animate-bounce delay-150 duration-[4000ms] transition-all right-0">🐾 </h1>

          {/* Text Content */}
          <div
            className={`space-y-6 transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <h1 className="text-xl font-medium text-black">
              {slides[activeIndex].title}
            </h1>
            <h2 className="text-5xl leading-relaxed font-bold">
              {slides[activeIndex].subtitle}
            </h2>
            <p className="text-lg">{slides[activeIndex].description}</p>

            <div className="flex gap-4 md:justify-start justify-center">
              <Button className="bg-[#FFC107] px-5 text-lg hover:bg-[#FF9800]">
                Shop Now
              </Button>
            </div>
          </div>
        </div>

        {/* Content list */}
        <div className="absolute top-[50%] right-5 mt-4 flex flex-col justify-center gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${
                activeIndex === index ? "bg-black" : "bg-gray-400"
              } transition-all duration-300`}
            />
          ))}
        </div>

        {/* toggle butto for the content  */}
        <Button
          onClick={nextSlide}
          className="absolute bottom-80 left-0 -rotate-90 border-none bg-transparent px-5 text-lg text-black shadow-none hover:bg-transparent flex items-center"
        >
          Next Slide
          <Image src={arrow_right}  alt="arrow" priority width={13}/>
        </Button>

        {/* <svg
          version="1.1"
          className="icon icon-slider"
          style="width:60px; height:60px;"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 20 20"
          xml:space="preserve"
        >
          <g id="Iconly_Bulk_Arrow---Right" transform="translate(-3 -6)">
            <g id="Arrow---Right" transform="translate(3 22.667) rotate(-90)">
              <path
                id="Fill-1"
                d="M6.072,8.302L5.908,6.366
			c0-0.439,0.34-0.794,0.759-0.794c0.419,0,0.759,0.356,0.759,0.794L7.263,8.302c0,0.344-0.267,0.623-0.595,0.623
			C6.338,8.925,6.072,8.646,6.072,8.302"
              ></path>
              <path
                id="Fill-4"
                d="M6.102,14.805c-0.029-0.03-0.153-0.143-0.255-0.249
			c-0.826-0.907-1.506-1.949-2.012-3.085c-0.082-0.201-0.138-0.412-0.168-0.627c0-0.165,0.037-0.329,0.108-0.476
			c0.102-0.19,0.262-0.339,0.454-0.424c0.175-0.056,0.352-0.101,0.532-0.136c0.63-0.096,1.266-0.139,1.903-0.128
			C7.28,9.674,7.896,9.712,8.507,9.793c0.226,0.041,0.448,0.102,0.664,0.182c0.302,0.161,0.493,0.484,0.496,0.839v0.03
			c-0.036,0.243-0.105,0.48-0.204,0.703c-0.504,1.109-1.173,2.127-1.983,3.015c-0.087,0.092-0.18,0.178-0.277,0.257
			C7.049,14.938,6.862,15.001,6.67,15c-0.205,0.002-0.405-0.067-0.569-0.196"
              ></path>
            </g>
          </g>
        </svg> */}
      </Container>
    </main>
  );
};

export default Hero;
