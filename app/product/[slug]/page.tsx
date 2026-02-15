import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/product/AddToCartButton";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {

  // ✅ Await params (Next.js 16 fix)
  const { slug } = await params;

  // Find product
  const product = products.find(
    (item) => item.slug === slug
  );

  // 404 if not found
  if (!product) {
    return notFound();
  }

  return (
    <>
      <Navbar />

      <main className="container mx-auto px-6 py-16">

        <h1 className="font-playfair text-4xl mb-6">
          {product.name}
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Image */}
          <div className="relative w-full h-96">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Details */}
          <div>

            <p className="text-2xl text-primary font-semibold mb-4">
              ₹{product.price}
            </p>

            <p className="text-gray-600 mb-6">
              {product.description}
            </p>

            {/* ✅ Cart Button */}
            <AddToCartButton slug={product.slug} />

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}
