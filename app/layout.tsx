import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/navigation-link";
import Footer from "@/components/footer";
// import Template from "./template";
import localFont from "next/font/local";
import AOSInitializer from "@/components/animation";
import AuthProvider from "@/providers/sessionprovider";
import ToastProvider from "@/providers/toastprovider";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { auth } from "@/auth";

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

// const queryClient = new QueryClient();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${alpino.className}`}>
        {/* <Template> */}
        <AOSInitializer />
        {/* <QueryClientProvider client={queryClient}> */}
          <AuthProvider session={session}>
            <Navigation />
            <ToastProvider />
            <main className="md:py-0">{children}</main>
          </AuthProvider>
        {/* </QueryClientProvider> */}
        <Footer />
        {/* </Template
        > */}
      </body>
    </html>
  );
}
