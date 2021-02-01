import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-sans bg-green-100 text-green-900 h-screen p-4">
      <p>
        <button
          className="rounded border border-green-700 px-1"
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
      </p>
    </div>
  );
}

export default App;
