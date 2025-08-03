import "@/styles/globals.css";
import { Metadata } from "next";
import { Providers } from "@/app/providers";
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
          {children}
        </Providers>
      </body>
    </html>
  );
}