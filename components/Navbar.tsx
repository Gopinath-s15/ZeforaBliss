import Link from "next/link";
import { ShoppingCart, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
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

          <Link
            href="/shop"
            className="hover:text-primary transition"
          >
            Shop
          </Link>

          <Link
            href="/collections"
            className="hover:text-primary transition"
          >
            Collections
          </Link>

          <Link
            href="/gifts"
            className="hover:text-primary transition"
          >
            Gifts
          </Link>

          <Link
            href="/about"
            className="hover:text-primary transition"
          >
            About
          </Link>

        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 text-dark">

          <button className="hover:text-primary transition">
            <Search size={20} />
          </button>

          <button className="hover:text-primary transition">
            <User size={20} />
          </button>

          <Link href="/cart" className="hover:text-primary transition">
            <ShoppingCart size={20} />
          </Link>

        </div>

      </div>
    </header>
  );
}
