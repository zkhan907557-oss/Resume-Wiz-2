export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <div className="p-8 bg-white rounded-2xl shadow-xl text-center max-w-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to Resume-Wiz 👋
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Build your <span className="font-semibold text-blue-500">AI-powered</span> resume in minutes.
        </p>

        <div className="space-y-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold w-full transition">
            Start Building 🚀
          </button>
          <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold w-full transition">
            View Samples 📄
          </button>
        </div>

        <footer className="mt-8 text-sm text-gray-400">
          Made with ❤️ using React + TypeScript + Tailwind
        </footer>
      </div>
    </div>
  )
}

