import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import MobileNav from "@/components/layout/MobileNav";
import { CartProvider } from "@/hooks/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ZeforaBliss | Premium Gifts & Lifestyle",
  description: "Luxury gifting and lifestyle products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} bg-[#f6efe8] text-[#333] antialiased`}
      >
        {/* ✅ Wrap everything with CartProvider */}
        <CartProvider>

          {children}
          <MobileNav />

        </CartProvider>
      </body>
    </html>
  );
}
