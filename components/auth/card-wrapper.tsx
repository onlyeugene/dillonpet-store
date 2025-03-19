import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { BackButton } from "./back-button";
import Image from "next/image";
import { motion } from "framer-motion";

import image from "@/public/landing/dog-group.jpg";
import image2 from "@/public/landing/pet.jpg";
import { usePathname } from "next/navigation";
import Container from "../container";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  title: string;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  title
}: CardWrapperProps) => {
  const path = usePathname();
  return (
    <Card className="flex items-center justify-center border-none pt-20 pb-10 shadow-none md:pt-60 lg:pt-50">
      <Container>
        <CardContent
          className={` ${path === "/register" ? "flex flex-col md:flex-row" : "flex flex-col md:flex-row-reverse"} w-full overflow-hidden rounded-xl border border-gray-100 p-0 shadow-lg`}
        >
          {/* Image Side */}
          <motion.div
            className="relative w-full overflow-hidden md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative h-full">
              {path === "/register" ? (
                <Image
                  src={image}
                  alt="image for sign up"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              ) : (
                <Image
                  src={image2}
                  alt="image for sign up"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              )}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {path === "/register" ? (
                    <div>
                      <h1 className="text-2xl font-bold text-white">
                        Need A Dog?
                      </h1>
                      <p className="text-sm text-white/90 md:text-base">
                        Create your account and get your own dog today.
                      </p>
                    </div>
                  ) : (
                    <div className="text-end text-2xl font-bold text-white">
                      <h2>Welcome Back</h2>
                      <h1>Take a dive back into getting your own Dog.</h1>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            className="flex w-full flex-col bg-white px-4 py-8 text-center md:w-1/2 md:px-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <CardHeader className="flex items-center justify-center">
              <Header label={headerLabel} title='' />
            </CardHeader>
            <CardContent className="flex flex-grow items-center justify-center">
              {children}
            </CardContent>
            <CardFooter className="flex items-center justify-center">
              <BackButton
                href={backButtonHref}
                label={backButtonLabel}
                title={title}
              />
            </CardFooter>
          </motion.div>
        </CardContent>
      </Container>
    </Card>
  );
};

export default CardWrapper;
