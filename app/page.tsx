export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Ebrikkho
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A modern web application built with Next.js and TypeScript
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
            Get Started
          </button>
          <button className="border border-gray-300 hover:border-gray-400 px-6 py-2 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}
