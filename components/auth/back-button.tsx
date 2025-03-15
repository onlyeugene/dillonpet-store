"use client";

import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
  title: string;
}

export const BackButton = ({ label, href, title }: BackButtonProps) => {
  return (
    <div className="flex items-center gap-2"> 
      <p className="md:text-lg text-sm">{title}</p>
      <Link href={href} className="font-bold  text-pink-600 sm:text-lg text-xs">
        {" "}
        {label}
      </Link>
    </div>
  );
};
