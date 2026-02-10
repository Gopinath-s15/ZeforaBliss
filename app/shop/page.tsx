import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <main className="container mx-auto px-6 py-16">

        <h1 className="font-playfair text-4xl mb-10 text-center">
          Shop Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

      </main>

      <Footer />
    </>
  );
}
