import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f6efe8]">
      <div className="text-center">

        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          404
        </h1>

        <p className="text-gray-600 mb-6">
          Page not found
        </p>

        <Link
          href="/"
          className="px-6 py-2 bg-black text-white rounded"
        >
          Go Home
        </Link>

      </div>
    </div>
  );
}
