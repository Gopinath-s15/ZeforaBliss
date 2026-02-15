"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/hooks/CartContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const { user, loading } = useAuth();
  const router = useRouter();

  const [placing, setPlacing] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const placeOrder = async () => {
    if (items.length === 0) return;

    setPlacing(true);

    const token = localStorage.getItem("zefora_token");

    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        items,
      }),
    });

    if (res.ok) {
      clearCart();
      router.push("/profile");
    }

    setPlacing(false);
  };

  if (loading) return null;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-bg py-12 px-6">

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">

          <h1 className="font-playfair text-3xl mb-6 text-dark">
            Checkout 💳
          </h1>

          {items.length === 0 ? (
            <p className="text-gray-600 text-center">
              Your cart is empty
            </p>
          ) : (
            <>
              <ul className="space-y-4 mb-6">

                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between border-b pb-2"
                  >
                    <span>{item.id}</span>
                    <span>Qty: {item.quantity}</span>
                  </li>
                ))}

              </ul>

              <button
                onClick={placeOrder}
                disabled={placing}
                className="w-full bg-dark text-white py-3 rounded-full hover:bg-primary transition"
              >
                {placing ? "Placing Order..." : "Place Order"}
              </button>
            </>
          )}

        </div>

      </main>

      <Footer />
    </>
  );
}
