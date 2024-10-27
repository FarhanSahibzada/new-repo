import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
//import Navber from "@/Components/Navber";
import { Button } from "@/Components/ui/button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Music Web",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative w-full  flex justify-center items-center">
          {/* <Navber/> */}
          <Button >
            Click me
          </Button>
        </div>
        {children}
      </body>
    </html>
  );
}
