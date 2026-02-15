"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      <h2 className="text-2xl font-bold mb-4">
        Something went wrong 😢
      </h2>

      <button
        onClick={() => reset()}
        className="bg-dark text-white px-4 py-2 rounded"
      >
        Try again
      </button>

    </div>
  );
}
