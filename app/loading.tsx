export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f6efe8]">
      <div className="text-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-pink-400 border-t-transparent mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
