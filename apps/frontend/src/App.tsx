import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Vite + React + TS + Tailwind
        </h1>

        <div className="flex flex-col items-center">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Count: {count}
          </button>

          <p className="text-gray-600 text-center">
            Edit
            <code className="font-mono bg-gray-100 p-1 rounded">
              src/App.tsx
            </code>
            and save to test HMR
          </p>
        </div>
        <p className="mt-6 text-gray-500 text-sm text-center">
          Click on the Vite, React, TypeScript, and Tailwind logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
