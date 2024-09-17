import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-plus-jakarta-san'
});

export const metadata: Metadata = {
  title: "ADINSPIRATION",
  description: "We analyze over 3175 fast-growing eCommerce brands every week, handpicking their best organic viral videos and top-performing Meta ads to save you time, money, and frustration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, plusJakarta.variable, 'flex flex-col items-center relative')}>
        <Header className="absolute top-0 z-50" />

        <main className="mx-auto flex size-full flex-col">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
