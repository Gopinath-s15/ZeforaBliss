import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
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
            <ProductCard
              key={item.slug}
              product={item}
            />
          ))}
        </div>

      </main>

      <Footer />
    </>
  );
}
