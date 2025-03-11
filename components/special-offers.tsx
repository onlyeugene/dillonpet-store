"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "./container";
import { Button } from "./ui/button";


import golden from '@/public/landing/golden.jpeg'
import Image from "next/image";

const offers = [
  {
    id: 1,
    title: "🐶 20% Off Golden Retrievers!",
    description: "Get a loving Golden Retriever at an exclusive discount.",
    image: golden,
    price: "$1200",
    discountPrice: "$960",
  },
  {
    id: 2,
    title: "🐕 Buy 1 Husky, Get Free Accessories!",
    description: "Purchase a Husky & get a free leash, collar, and dog bed!",
    image: golden,
    price: "$1500",
    discountPrice: "$1500 + Free Goodies",
  },
  {
    id: 3,
    title: "🐾 Premium French Bulldogs - 15% Off!",
    description: "Limited-time sale on the cutest French Bulldogs!",
    image: golden,
    price: "$2500",
    discountPrice: "$2125",
  },
];

const SpecialOffers = () => {
  const [showOffers, setShowOffers] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center bg-[#FFC107] p-6">
      <h2 className="mb-6 animate-bounce text-4xl font-bold text-yellow-900">
        🐾 Limited-Time Dog Sale Offers! 🐾
      </h2>
      <Button
        onClick={() => setShowOffers(!showOffers)}
        className="rounded-full bg-amber-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-[#FFC107]"
      >
        {showOffers ? "Hide Offers 🐶" : "View Special Offers 🛒"}
      </Button>

      <Container>
        {showOffers && (
          <div className="mt-6 grid w-full place-items-center grid-cols-3 gap-5">
            {offers.map((offer) => (
              <motion.div
                key={offer.id}
                className="flex w-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
               <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <Image
                    src={offer.image.src} // Use `.src` to get the image path
                    alt={offer.title}
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </motion.div>
                <h3 className="mt-4 text-2xl font-bold text-yellow-900">
                  {offer.title}
                </h3>
                <p className="text-yellow-800">{offer.description}</p>
                <p className="text-lg text-gray-600 line-through">
                  {offer.price}
                </p>
                <p className="text-xl font-bold text-red-600">
                  {offer.discountPrice}
                </p>
                <button className="mt-4 rounded-full bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-600">
                  Buy Now
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default SpecialOffers;
