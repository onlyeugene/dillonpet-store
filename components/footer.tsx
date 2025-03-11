import React from "react";
import Container from "./container";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className=" border-t py-10">
      <Container>
        <div className="lg:flex lg:flex-row md:grid md:grid-cols-2 flex flex-col w-full md:text-start text-center lg:items-start md:items-start items-center justify-between gap-5 pb-5">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
            <p className="text-gray-600 font-mono text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
              Facilis nostrum facere, officia eum voluptatibus <br />{" "}
              consequuntur totam quia deserunt natus provident.
            </p>

            <div className="flex w-full max-w-md overflow-hidden rounded-full border border-[#FFC107]">
              <Input
                placeholder="Email address"
                className="rounded-r-0 lg:w-80 w-full border-r-0 border-none px-4 py-3 focus:ring-0 focus:outline-none focus-visible:ring-0"
              />
              <Button className="rounded-full bg-[#FFC107] px-14 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-[#ffc107aa]">
                Sign up
              </Button>
            </div>

            <div className="flex items-center md:justify-start justify-center lg:gap-10 gap-10">
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
            <h1 className="text-3xl font-bold text-gray-900">DPK</h1>
            <p className="text-gray-600">
              Mayfair branch: Mayfair area, Ojeyemi complex besides Jesu towo,
              <br className="lg:block hidden"/>
              opposite slot, adjacent ACE supermarket, Ile-ife, osun state
            </p>
            <p className="text-gray-600">
              Aladanla branch: aladanla line 3 junction, opp, Rot-k plaza,
              <br className="lg:block hidden"/>
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
