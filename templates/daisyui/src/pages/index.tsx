export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-base-200 p-8">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Welcome to Your DaisyUI App!
        </h1>
        <p className="text-lg text-base-content">
          This is a clean starter template using DaisyUI with Next.js.
        </p>
        <div className="mt-6">
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </div>
    </main>
  );
}
