import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-bg min-h-screen">

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-40 text-center relative overflow-hidden">

          {/* Soft Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-[#f6efe8] to-rose-100 opacity-60 -z-10"></div>

          <h1 className="font-playfair text-5xl md:text-6xl mb-6 text-dark leading-tight">
            Take a Moment For Yourself
          </h1>

          <p className="font-poppins text-lg mb-10 text-gray-600 max-w-2xl mx-auto">
            Premium gifts, wallets & lifestyle products curated with elegance
          </p>

          <Link
            href="/shop"
            className="inline-block bg-dark text-white px-10 py-4 rounded-full hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-pink-300/50 hover:scale-105"
          >
            Shop Now
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}
