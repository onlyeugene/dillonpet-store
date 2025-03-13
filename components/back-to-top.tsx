"use client";

import { ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed right-10 bottom-10 cursor-pointer">
      <a href="#navbar" aria-label="Back to Top" className="relative flex items-center justify-center">
        {/* Circular Progress */}
        <svg width="50" height="50" viewBox="0 0 50 50" className="absolute -top-2 -left-2">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="brown"
            strokeWidth="4"
            strokeDasharray="125.6" /* Circumference (2 * π * r) */
            strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
            strokeLinecap="round"
            transform="rotate(-90 25 25)" /* Rotates the progress to start from the top */
          />
        </svg>

        {/* Arrow Button */}
        <div className="w-13 h-13 bg-amber-400 rounded-full flex items-center justify-center">
          <ArrowUp size={32} className="text-white" />
        </div>
      </a>
    </div>
  );
};

export default BackToTop;
