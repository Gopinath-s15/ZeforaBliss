import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-bg">

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-32 text-center">
          <h1 className="font-playfair text-5xl mb-6 text-dark">
            Take a Moment For Yourself
          </h1>

          <p className="font-poppins text-lg mb-8 text-gray-600">
            Premium gifts, wallets & lifestyle products curated with elegance
          </p>

          <Link
            href="/shop"
            className="inline-block bg-dark text-white px-8 py-3 rounded hover:bg-primary transition"
          >
            Shop Now
          </Link>
        </section>

      </main>

      <Footer />
    </>
  );
}
