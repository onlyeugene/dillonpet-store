import React from "react";
import Container from "./container";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Instagram } from "lucide-react";
import Image from "next/image";

import husky from "@/public/landing/husky.png";

const Footer = () => {
  return (
    <div className="border-t py-10">
      <Container>
        <div className="flex w-full flex-col items-center justify-between gap-10 pb-5 text-center md:grid md:grid-cols-2 md:items-start md:gap-5 md:text-start lg:flex lg:flex-row lg:items-start">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
            <p className="font-mono text-lg text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
              Facilis nostrum facere, officia eum voluptatibus <br />{" "}
              consequuntur totam quia deserunt natus provident.
            </p>

            <div className="flex w-full max-w-md overflow-hidden rounded-full border border-[#FFC107]">
              <Input
                placeholder="Email address"
                className="rounded-r-0 w-full border-r-0 border-none px-4 py-3 focus:ring-0 focus:outline-none focus-visible:ring-0 lg:w-80"
              />
              <Button className="rounded-full bg-[#FFC107] px-14 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-[#ffc107aa]">
                Sign up
              </Button>
            </div>

            <div className="flex items-center justify-center gap-10 md:justify-start lg:gap-10">
              <h2 className="text-xl font-bold">FOLLOW US</h2>
              <div>
                <a href="https://www.instagram.com/dillonpetkennelandstore_">
                  <Instagram
                    size={18}
                    className="h-10 w-10 rounded-full border bg-[#FFC107] py-2 text-white"
                  />
                </a>
                <a href="https://www.tiktok.com/dillonpetkennelandstore">
                  {/* <Tiktok /> */}
                </a>
                <a href="https://www.snapchat.com/dillionpetkennelandstore"></a>
              </div>
            </div>
          </div>
          <div className="space-y-6 font-mono text-lg">
            <div className="relative">
              <h1 className="text-3xl font-bold text-gray-900">DPK</h1>
              <Image
                src={husky}
                alt="husky"
                width={100}
                className="absolute lg:-top-15 md:-top-10 right-30 md:left-20"
              />
            </div>
            <p className="text-gray-600">
              Mayfair branch: Mayfair area, Ojeyemi complex besides Jesu towo,
              <br className="hidden lg:block" />
              opposite slot, adjacent ACE supermarket, Ile-ife, osun state
            </p>
            <p className="text-gray-600">
              Aladanla branch: aladanla line 3 junction, opp, Rot-k plaza,
              <br className="hidden lg:block" />
              adjacent DE MOON PHARMACY, ile-ife, osun state
            </p>

            <p>
              Mobile: <br /> +234 810 902 7768 <br /> +234 915 147 5324 <br />{" "}
              +234 708 770 1706
            </p>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">Know Us</h1>

            <ul className="flex flex-col gap-3 pt-6 font-mono text-lg">
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>About</li>
              </a>
              <a href="">
                <li>Services</li>
              </a>
              <a href="">
                <li>Contact</li>
              </a>
              <a href="">
                <li>Wishlist</li>
              </a>
            </ul>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Useful Links</h1>

            <ul className="flex flex-col gap-3 pt-6 font-mono text-lg">
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>About</li>
              </a>
              <a href="">
                <li>Services</li>
              </a>
              <a href="">
                <li>Contact</li>
              </a>
              <a href="">
                <li>Wishlist</li>
              </a>
            </ul>
          </div>
        </div>
      </Container>
      <hr />
      <div className="container py-2">
        <p>&copy; {new Date().getFullYear()}</p>
        <span></span>
      </div>
    </div>
  );
};

export default Footer;
