import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/navigation-link";
import Footer from "@/components/footer";
// import Template from "./template";
import localFont from "next/font/local";
import AOSInitializer from "@/components/animation";

export const metadata: Metadata = {
  title: "Dillon Pet Kennel & Store",
  description: "",
};

const alpino = localFont({
  src: "../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alpino.className}`}>
        {/* <Template> */}
        <AOSInitializer />
        <Navigation />
        <main className="md:py-0 ">{children}</main>
        <Footer />
        {/* </Template> */}
      </body>
    </html>
  );
}
