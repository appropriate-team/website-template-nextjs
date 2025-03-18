export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Your Tailwind App!
        </h1>
        <p className="text-lg text-gray-600">
          This is a clean starter template using Tailwind CSS with Next.js.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
