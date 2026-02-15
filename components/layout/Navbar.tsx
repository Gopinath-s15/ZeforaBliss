"use client";

import Link from "next/link";
import { ShoppingCart, Search, User, LogOut } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-playfair font-bold text-dark"
        >
          ZeforaBliss
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 font-poppins text-sm">

          <Link href="/shop" className="hover:text-primary transition">
            Shop
          </Link>

          <Link href="/collections" className="hover:text-primary transition">
            Collections
          </Link>

          <Link href="/gifts" className="hover:text-primary transition">
            Gifts
          </Link>

          <Link href="/about" className="hover:text-primary transition">
            About
          </Link>

        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5 text-dark">

          {/* Search */}
          <button className="hover:text-primary transition">
            <Search size={20} />
          </button>

          {/* User / Auth */}
          {isAuthenticated ? (
            <div className="flex items-center gap-3">

              <span className="text-sm hidden md:block">
                Hi, {user?.name}
              </span>

              <button
                onClick={() => {
                  logout();
                  router.push("/login");
                }}
                className="hover:text-red-500 transition"
                title="Logout"
              >
                <LogOut size={20} />
              </button>

            </div>
          ) : (
            <Link
              href="/login"
              className="hover:text-primary transition"
              title="Login"
            >
              <User size={20} />
            </Link>
          )}

          {/* Cart */}
          <Link href="/cart" className="hover:text-primary transition">
            <ShoppingCart size={20} />
          </Link>

        </div>

      </div>
    </header>
  );
}
