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
      <Link href={href} className="font-medium sm:text-lg text-xs hover:unuderline hover:underline-offset-3">
        {" "}
        {label}
      </Link>
    </div>
  );
};
