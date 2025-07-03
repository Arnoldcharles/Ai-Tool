'use client';

import { useState } from 'react';

export default function YouTubeMP3Downloader() {
  const [url, setUrl] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = () => {
    if (!url) return alert('Enter YouTube URL');

    // Example third-party redirect URL
    const videoId = url.split('v=')[1]?.split('&')[0];
    if (!videoId) return alert('Invalid URL');

    setLink(`https://api.vevioz.com/api/button/mp3/${videoId}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">YouTube MP3 Downloader</h1>
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full border px-4 py-2 rounded-md mb-4 outline-none"
        />
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-6 py-2 rounded-md"
        >
          Download MP3
        </button>

        {link && (
          <a href={link} target="_blank" className="block mt-4 text-blue-600 underline">
            Open MP3 Download Page
          </a>
        )}
      </div>
    </main>
  );
}
