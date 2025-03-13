"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Button } from "./ui/button";

import waylon from "@/public/profiles/waylon.jpg";
import reed from "@/public/profiles/reed.jpg";
import dorathy from "@/public/profiles/dorathy.jpg";
import caro from "@/public/profiles/caro.jpg";
import Container from "./container";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    comment: "My dog loves the treats from this store! Highly recommend!",
    image: waylon,
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "The grooming service was fantastic. My dog looks so happy!",
    image: dorathy,
  },
  {
    id: 3,
    name: "Mike Johnson",
    comment: "Great quality products and fast delivery. Will shop again!",
    image: reed,
  },
  {
    id: 4,
    name: "Sarah Lee",
    comment:
      "The training classes were amazing. My dog is so well-behaved now!",
    image: caro,
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="py-12" data-aos='fade-up'>
      <Container>
        <h2 className="mb-8 text-center text-5xl font-bold">
          What Our Customers Say
        </h2>
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation, Autoplay, EffectCards]}
            autoplay={{ delay: 7000 }}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="relative"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="relative flex h-80 flex-col items-center justify-center rounded-lg border border-gray-100 bg-white p-6 text-center shadow-lg">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={140}
                    height={140}
                    className="rounded-full"
                  />
                  <h3 className="mt-2 text-2xl font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="mt- text-gray-600">{testimonial.comment}</p>

                  {/* Pagination inside the Swiper board */}
                  <div className="swiper-pagination absolute bottom-0 flex justify-center"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <Button className="swiper-button-prev-custom absolute top-1/2 -left-4 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-[#FFC107] text-white shadow-lg transition-all hover:-left-6 hover:h-14 hover:w-14 hover:bg-gray-800">
            ❮
          </Button>
          <Button className="swiper-button-next-custom absolute top-1/2 -right-4 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-[#FFC107] text-white shadow-lg transition-all hover:-right-6 hover:h-14 hover:w-14 hover:bg-gray-800">
            ❯
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default TestimonialCarousel;
