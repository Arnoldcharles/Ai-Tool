"use client";

import { useState } from "react";

export default function IMDbInfoTool() {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState<any>(null);

  const fetchMovie = async () => {
    const res = await fetch(`/api/imdb?title=${encodeURIComponent(title)}`);
    const data = await res.json();
    setInfo(data);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">IMDb Info Tool</h1>
        <input
          type="text"
          placeholder="Enter movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        />
        <button
          onClick={fetchMovie}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded"
        >
          Search
        </button>

        {info && info.Response !== "False" ? (
          <div className="mt-6 text-left">
            <p>
              <strong>Title:</strong> {info.Title}
            </p>
            <p>
              <strong>Year:</strong> {info.Year}
            </p>
            <p>
              <strong>Rating:</strong> {info.imdbRating}
            </p>
            <p>
              <strong>Plot:</strong> {info.Plot}
            </p>
            <img
              src={info.Poster}
              alt={info.Title}
              className="mt-4 w-32 rounded"
            />
          </div>
        ) : info?.Response === "False" ? (
          <p className="mt-4 text-red-500">Movie not found</p>
        ) : null}
      </div>
    </main>
  );
}
