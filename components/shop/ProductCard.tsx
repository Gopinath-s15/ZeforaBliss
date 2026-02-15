"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/CartContext";

type Product = {
  name: string;
  price: number;
  image: string;
  slug: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">

      {/* CLICKABLE AREA */}
      <Link href={`/product/${product.slug}`}>
        <div>
          <div className="relative h-56 w-full mb-3">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded"
            />
          </div>

          <h3 className="font-playfair text-lg">
            {product.name}
          </h3>

          <p className="font-poppins text-primary font-semibold">
            ₹{product.price}
          </p>
        </div>
      </Link>

      {/* ADD TO CART BUTTON */}
      <button
        type="button"
        onClick={() =>
          addToCart({ id: product.slug, quantity: 1 })
        }
        className="mt-3 w-full bg-dark text-white py-2 rounded hover:bg-primary transition"
      >
        Add to Cart
      </button>

    </div>
  );
}
