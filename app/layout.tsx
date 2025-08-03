// app/layout.tsx

import "@/styles/globals.css"; // <-- INI DIA KUNCINYA, BARIS INI WAJIB ADA
import { Metadata } from "next";
import { Providers } from "./providers";
import GrovsNavbar from "@/components/Navbar"; // Pastikan path ini benar
import Footer from "@/components/Footer";     // Pastikan path ini benar
import { Poppins, Lora } from "next/font/google";
import clsx from "clsx";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "GROVS - Belajar Geguritan Modern",
  description: "Platform pembelajaran Geguritan berbasis nilai luhur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable,
          lora.variable
        )}
      >
        <Providers>
          <div className="relative flex flex-col h-screen">
            <GrovsNavbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}