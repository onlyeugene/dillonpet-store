"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Use Next.js navigation to detect route changes

const Template = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname(); // Track route changes

  useEffect(() => {
    setIsLoading(false);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulating a loading time

    return () => clearTimeout(timer);
  }, [pathname]); // Runs on route change

  return (
    <div>
      {isLoading ? (
        <div className="text-xl font-semibold animate-pulse min-h-screen flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Template;
