"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-[#f6efe8]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600">
            Something went wrong!
          </h2>

          <button
            onClick={() => reset()}
            className="mt-4 px-6 py-2 bg-black text-white rounded"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
