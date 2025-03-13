"use client";

import React, { useState } from "react";
import { Trash2, X } from "lucide-react";
import Image from "next/image";
import { ProductType } from "@/types/product-types";
import { Button } from "./ui/button";

interface CartSidebarProps {
  isOpen: boolean;
  closeCart: () => void;
  cartItems: ProductType[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  closeCart,
  cartItems,
  setCartItems,
}) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleCountPlus = (index: number) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: (prev[index] || 1) + 1,
    }));
  };

  const handleCountMinus = (index: number) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: Math.max((prev[index] || 1) - 1, 1),
    }));
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const total = cartItems.reduce(
    (acc, item, index) => acc + Number(item.price) * (quantities[index] || 1),
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full w-[400px] transform bg-white shadow-2xl transition-transform duration-1200 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b p-5">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={closeCart} aria-label="Close Cart">
          <X size={24} className="text-gray-600 hover:text-black" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="h-[calc(95vh-250px)] space-y-4 overflow-y-auto p-5">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex gap-4 border-b pb-5">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
              <div className="flex flex-grow flex-col">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">
                  Age: <span className="font-medium">{item.ageRange}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Gender: <span className="font-medium">{item.gender}</span>
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4">
                  <div className="mt-3 flex w-24 items-center justify-between rounded-full border px-3 py-1 text-lg font-semibold">
                    <button
                      className="cursor-pointer text-gray-700 hover:text-black"
                      onClick={() => handleCountMinus(index)}
                    >
                      -
                    </button>
                    <span>{quantities[index] || 1}</span>
                    <button
                      className="cursor-pointer text-gray-700 hover:text-black"
                      onClick={() => handleCountPlus(index)}
                    >
                      +
                    </button>
                  </div>
                  <Trash2
                    className="h-4 w-4 text-red-500 mt-3 cursor-pointer"
                    onClick={() => handleRemoveItem(index)}
                  />
                </div>
              </div>
              <p className="text-md font-medium text-gray-700 ">
                ${Number(item.price) * (quantities[index] || 1)}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="border-t bg-gray-50 p-5">
        <h3 className="text-md font-medium">Order Special Instructions</h3>
        <textarea
          rows={3}
          className="mt-2 w-full rounded-md border p-2 text-sm focus:ring-2 focus:ring-gray-400"
          placeholder="Add notes for your order..."
        ></textarea>

        <div className="mt-4 flex justify-between transition-all duration-500 text-lg font-semibold">
          <p>Subtotal</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Taxes & shipping calculated at checkout.
        </p>

        <div className="mt-5 flex flex-col gap-3">
          <Button className="w-full bg-gray-900 text-white hover:bg-gray-700">
            View Cart
          </Button>
          <Button className="w-full bg-yellow-500 text-white hover:bg-yellow-400">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
