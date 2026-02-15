import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#a89682] text-white mt-20">

      <div className="container mx-auto grid gap-8 px-6 py-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h3 className="font-playfair text-xl mb-3">
            ZeforaBliss
          </h3>

          <p className="text-sm leading-relaxed">
            Premium gifts and lifestyle products crafted
            for memorable moments.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-poppins font-semibold mb-3">
            Explore
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/shop" className="hover:underline">
                Shop
              </Link>
            </li>

            <li>
              <Link href="/collections" className="hover:underline">
                Collections
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-poppins font-semibold mb-3">
            Support
          </h4>

          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Shipping Policy</li>
            <li>Returns & Refunds</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-poppins font-semibold mb-3">
            Contact
          </h4>

          <p className="text-sm">📧 support@zeforabliss.com</p>
          <p className="text-sm mt-1">📞 +91 90000 00000</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#9a8873] text-center text-sm py-4">
        © {new Date().getFullYear()} ZeforaBliss. All rights reserved.
      </div>

    </footer>
  );
}
