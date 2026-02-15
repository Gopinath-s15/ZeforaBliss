"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

type Order = {
  _id: string;
  items: {
    id: string;
    quantity: number;
  }[];
  status: string;
  createdAt: string;
};

export default function OrdersPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [orders, setOrders] = useState<Order[]>([]);
  const [fetching, setFetching] = useState(true);

  // Protect route
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Fetch orders
  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("zefora_token");

      const res = await fetch("/api/orders/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setOrders(data);
      }

      setFetching(false);
    };

    fetchOrders();
  }, []);

  if (loading || fetching) return null;

  return (
    <>
      <Navbar />

      <main className="container mx-auto px-6 py-16 max-w-4xl">

        <h1 className="font-playfair text-4xl mb-10 text-center">
          My Orders 📦
        </h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500">
            No orders yet
          </p>
        ) : (
          <div className="space-y-6">

            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white p-6 rounded-xl shadow"
              >
                <div className="flex justify-between mb-3">

                  <span className="font-medium">
                    Order ID: {order._id.slice(-6)}
                  </span>

                  <span className="text-primary font-semibold">
                    {order.status}
                  </span>

                </div>

                <p className="text-sm text-gray-500 mb-3">
                  {new Date(order.createdAt).toLocaleString()}
                </p>

                <ul className="text-sm space-y-1">

                  {order.items.map((item, i) => (
                    <li key={i}>
                      {item.id} × {item.quantity}
                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>
        )}

      </main>

      <Footer />
    </>
  );
}
