"use client";

import Link from "next/link";
import { Home, ShoppingCart, User, Store } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/CartContext";


export default function MobileNav() {
  const { cartCount } = useCart();
  const { isAuthenticated } = useAuth();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow md:hidden">

      <div className="flex justify-around items-center py-3">

        {/* Home */}
        <Link href="/" className="flex flex-col items-center text-xs">
          <Home size={20} />
          Home
        </Link>

        {/* Shop */}
        <Link href="/shop" className="flex flex-col items-center text-xs">
          <Store size={20} />
          Shop
        </Link>

        {/* Cart */}
        <Link href="/cart" className="relative flex flex-col items-center text-xs">

          <ShoppingCart size={20} />

          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-[10px] px-1 rounded-full">
              {cartCount}
            </span>
          )}

          Cart
        </Link>

        {/* Profile */}
        <Link
          href={isAuthenticated ? "/profile" : "/login"}
          className="flex flex-col items-center text-xs"
        >
          <User size={20} />
          Profile
        </Link>

      </div>
    </nav>
  );
}
