"use client";

import React, { useState, useEffect } from "react";
import Container from "../container";
import UserMenu from "./user-menu";
import MenuIcons from "./menu-icons";
import Search from "./search";
import Logo from "./logo";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full  border-gray-300 z-20 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md text-black border-b" :
        //  "bg-gradient-to-br from-[#FFC107] to-[#FF] text-white"
        "bg-[#FFC107]"
      }`}
    >
      <Container className="flex flex-col items-center">
        <div className="w-full p-5 flex flex-row place-items-center justify-between">
          <Logo />
          <Search />
          <MenuIcons />
        </div>
        <div className="py-5">
          <UserMenu />
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
