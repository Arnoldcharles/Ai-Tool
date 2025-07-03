"use client";

import { useState } from "react";

export default function ChatGPTTool() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const askGPT = async () => {
    const res = await fetch("/api/chatgpt", {
      method: "POST",
      body: JSON.stringify({ message: input }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl p-6 rounded-lg w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">ChatGPT Tool</h1>
        <textarea
          rows={4}
          placeholder="Ask me anything..."
          className="w-full p-3 border rounded mb-4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={askGPT}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded"
        >
          Ask ChatGPT
        </button>
        {response && <p className="mt-4 text-gray-700 text-left">{response}</p>}
      </div>
    </main>
  );
}
