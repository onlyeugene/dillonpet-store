import { Barlow } from "next/font/google";

// import { cn } from "@/lib/utils";

const font = Barlow({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
  title: string;
}

export const Header = ({ label,title}: HeaderProps) => {
  return (
    <div className=" flex flex-col gap-x-4 items-center justify-center">
      <h1 className={`text-black md:text-4xl text-xl ${font.className}`}>{title}</h1>
      <p className='md:text-base text-sm'>{label}</p>
    </div>
  );
};
