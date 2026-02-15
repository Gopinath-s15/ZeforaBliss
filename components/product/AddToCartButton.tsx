"use client";
import { useCart } from "@/hooks/CartContext";

import { useState } from "react";


export default function AddToCartButton({ slug }: { slug: string }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-4">

      <div className="flex items-center border rounded">

        <button
          onClick={() =>
            setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
          }
          className="px-3 py-1"
        >
          -
        </button>

        <span className="px-4">{quantity}</span>

        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="px-3 py-1"
        >
          +
        </button>

      </div>

      <button
        onClick={() =>
          addToCart({ id: slug, quantity })
        }
        className="bg-dark text-white px-6 py-3 rounded hover:bg-primary transition"
      >
        Add to Cart
      </button>

    </div>
  );
}