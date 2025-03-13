"use client";

import React, { useState } from "react";
import { Products } from "@/lib/db";
import Image from "next/image";
import { Button } from "./ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import CartSidebar from "./cart-sidebar";
import { ProductType } from "@/types/product-types";


const HeroProducts = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null); // Track hovered product ID

  //todo : call products from the backend
  //   const [products , setProducts] = useState()

  // useEffect(() => {
  // },[])

  const [cartOpen, setCartOpen] = useState(false);
 
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  
  const handleAddToCart = (product: ProductType) => {
    setCartItems((prev) => [...prev, product]);
    setCartOpen(true);
  };
  

  const sortedProducts = Products.slice(0, 9);

  return (
    <div className="container py-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Our Products</h1>
        <p className="capitalize">
          Here you find top quality Dillon Dogs for sale.
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-5 py-10 text-center md:grid-cols-3"
        data-aos="fade-right"
      >
        {sortedProducts.map((item) => (
          <div
            key={item.id}
            className="relative transition-all duration-300"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="w-full">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                priority
                className="h-auto w-full rounded-lg border"
              />
            </div>
            <p className="mt-2 text-xl font-bold">{item.name}</p>
            <span className="text-lg font-medium text-gray-700">
              {item.price}
            </span>

            {/* Show cart button when hovered */}
            {hoveredItem === item.id && (
              <div
                className="absolute bottom-20 left-1/2 flex -translate-x-1/2 transform gap-3 transition-all duration-200"
                data-aos="fade-up"
              >
                {/* Cart Button with Tooltip */}
                <div className="group relative">
                  {/* Tooltip Text */}
                  <div className="absolute -top-12 -left-6 w-24 rounded-md bg-black py-2 text-xs text-white opacity-0 transition-all duration-200 group-hover:opacity-100 before:absolute before:top-full before:left-10 before:border-8 before:border-x-transparent before:border-t-black before:border-b-transparent">
                    Add To Cart
                  </div>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="flex items-center gap-2 rounded-full border-2 border-transparent bg-black px-4 py-5 text-white shadow-md transition-all duration-200"
                  >
                    <ShoppingBag size={16} className="" />
                  </Button>
                </div>

                {/* Wishlist Button */}
                <div className="group relative">
                  <div className="absolute -top-12 -left-6 w-24 rounded-md bg-black py-2 text-xs text-white opacity-0 transition-all duration-200 group-hover:opacity-100 before:absolute before:top-full before:left-10 before:border-8 before:border-x-transparent before:border-t-black before:border-b-transparent">
                    Add To Wishlist
                  </div>

                  <Button className="flex items-center gap-2 rounded-full border-2 border-transparent bg-black px-4 py-5 text-white shadow-md transition-all duration-200">
                    <Heart size={16} />
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center pt-10">
        <Button className="bg-[#FFC107] text-white hover:bg-amber-600">
          See More...
        </Button>
      </div>


      <CartSidebar isOpen={cartOpen} closeCart={() => setCartOpen(false)} cartItems={cartItems}   setCartItems={setCartItems} />
    </div>
  );
};

export default HeroProducts;
