"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/hooks/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-bg py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">

          <h1 className="font-playfair text-3xl mb-6 text-dark">
            Your Cart 🛒
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-10">

              <p className="text-gray-600 mb-4">
                Your cart is empty
              </p>

              <Link
                href="/shop"
                className="bg-dark text-white px-6 py-2 rounded-full hover:bg-primary transition"
              >
                Go Shopping
              </Link>

            </div>
          ) : (
            <>
              <ul className="space-y-4">

                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b pb-3"
                  >
                    <div>
                      <p className="font-medium text-dark">
                        {item.id}
                      </p>

                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </li>
                ))}

              </ul>

              <div className="mt-6 flex justify-between items-center">

                <button
                  onClick={clearCart}
                  className="text-red-600 hover:underline"
                >
                  Clear Cart
                </button>

                <Link
                  href="/checkout"
                  className="bg-dark text-white px-6 py-2 rounded-full hover:bg-primary transition"
                >
                  Checkout
                </Link>

              </div>
            </>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
