import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { BackButton } from "./back-button";
import Image from "next/image";
import { motion } from "framer-motion";

import image from "@/public/landing/golden.jpeg";
import { usePathname } from "next/navigation";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) => {
  const path = usePathname();
  return (
    <Card className="flex items-center justify-center border-none py-10 shadow-none md:py-20 lg:py-40">
      <CardContent className="flex w-full max-w-5xl flex-col overflow-hidden rounded-xl border p-0 shadow-lg md:flex-row">
        {/* Image Side */}
        <motion.div
          className="relative w-full overflow-hidden p-0 md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative h-60 md:h-full">
            <Image
              src={image}
              alt="image for sign up"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {path === "/auth/register" ? (
                  <div>
                    <h1 className="text-2xl font-bold text-white">
                      Join Our Community
                    </h1>
                    <p className="text-sm text-white/90 md:text-base">
                      Create your account and start your journey with us today.
                    </p>
                  </div>
                ) : (
                  <div>
                    <h2>Welcome Back</h2>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div
          className="flex w-full flex-col px-4 py-8 text-center md:w-1/2 md:px-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <CardHeader className="flex items-center justify-center">
            <Header label={headerLabel} title="Create Account" />
          </CardHeader>
          <CardContent className="flex flex-grow items-center justify-center">
            {children}
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <BackButton
              href={backButtonHref}
              label={backButtonLabel}
              title=""
            />
          </CardFooter>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default CardWrapper;
