"use client";

import { useState } from "react";
import ToolSection from "../components/ToolSection";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="bg-[#0c0e1a] min-h-screen text-white px-4 sm:px-8 md:px-16 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          <span className="text-purple-500">AI</span> Tools Hub
        </h1>
        <input
          type="text"
          placeholder="🔍 Search 50+ Tools...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4 w-full max-w-md mx-auto bg-[#1a1c29] text-white px-4 py-2 rounded-full outline-none border border-[#2a2c3f] focus:border-purple-500 transition"
        />
      </div>

      {/* 🔽 Downloaders */}
      <ToolSection
        title="Downloaders"
        searchTerm={searchTerm}
        tools={[
          { name: "YouTube MP3", icon: "🎵", link: "/tool/youtube-mp3" },
          { name: "YouTube MP4", icon: "🎥", link: "/tool/youtube-mp4" },
          { name: "Facebook", icon: "📘", link: "/tool/facebook" },
          { name: "Instagram", icon: "📸", link: "/tool/instagram" },
          { name: "TikTok", icon: "🎶", link: "/tool/tiktok" },
          { name: "Twitter/X", icon: "✖️", link: "/tool/twitter" },
          { name: "Spotify", icon: "🎧", link: "/tool/spotify" },
          { name: "SoundCloud", icon: "🔊", link: "/tool/soundcloud" },
          { name: "MediaFire", icon: "💾", link: "/tool/mediafire" },
          {
            name: "All Video Downloader",
            icon: "📥",
            link: "/tool/all-download",
          },
          { name: "Google Drive", icon: "🟢", link: "/tool/drive" },
        ]}
      />

      {/* 🔽 AI Tools */}
      <ToolSection
        title="AI Tools"
        searchTerm={searchTerm}
        tools={[
          { name: "ChatGPT", icon: "💬", link: "/tool/chatgpt" },
          { name: "Image Generator", icon: "🖼️", link: "/tool/image-gen" },
          { name: "Photo Enhancer", icon: "✨", link: "/tool/enhancer" },
          { name: "Background Remover", icon: "🧹", link: "/tool/bg-remover" },
          { name: "Text to Speech", icon: "🗣️", link: "/tool/tts" },
          { name: "Voice AI", icon: "🎤", link: "/tool/voice-ai" },
          { name: "Stable Diffusion", icon: "🎨", link: "/tool/sd" },
          { name: "Image Scanner", icon: "🔍", link: "/tool/scanner" },
        ]}
      />

      {/* 🔽 Utilities */}
      <ToolSection
        title="Utilities"
        searchTerm={searchTerm}
        tools={[
          { name: "Wallpapers", icon: "🖼️", link: "/tool/wallpapers" },
          { name: "Lyrics Finder", icon: "🎶", link: "/tool/lyrics" },
          { name: "IMDb Info", icon: "🎬", link: "/tool/imdb" },
          { name: "Weather Forecast", icon: "☁️", link: "/tool/weather" },
          { name: "Text to PDF", icon: "📄", link: "/tool/pdf" },
          { name: "Screenshot Tool", icon: "📸", link: "/tool/screenshot" },
          { name: "Google Translate", icon: "🌐", link: "/tool/translate" },
        ]}
      />

      {/* 🔽 Entertainment */}
      <ToolSection
        title="Entertainment"
        searchTerm={searchTerm}
        tools={[
          { name: "Movie Downloader", icon: "📽️", link: "/tool/movies" },
          { name: "Trending Movies", icon: "🔥", link: "/tool/trending" },
          { name: "Truth or Dare", icon: "🎲", link: "/tool/tod" },
          { name: "Pickup Lines", icon: "💘", link: "/tool/pickup" },
          { name: "Fact Generator", icon: "💡", link: "/tool/facts" },
        ]}
      />

      {/* 🔽 Reference */}
      <ToolSection
        title="Reference"
        searchTerm={searchTerm}
        tools={[
          { name: "Bible", icon: "📖", link: "/tool/bible" },
          { name: "Quran", icon: "🕋", link: "/tool/quran" },
          { name: "Dictionary", icon: "📘", link: "/tool/dictionary" },
          { name: "APK Downloader", icon: "📦", link: "/tool/apk" },
          { name: "Premium Apps", icon: "💎", link: "/tool/premium" },
        ]}
      />

      {/* 🔽 Social Tools */}
      <ToolSection
        title="Social Tools"
        searchTerm={searchTerm}
        tools={[
          { name: "GitHub Stalker", icon: "🐙", link: "/tool/github" },
          { name: "TikTok Stalker", icon: "👀", link: "/tool/tiktok-stalker" },
          { name: "Pinterest Search", icon: "📌", link: "/tool/pinterest" },
          { name: "Image Search", icon: "🔎", link: "/tool/image-search" },
        ]}
      />

      {/* 🔽 Footer */}
      <footer className="mt-16 text-center text-gray-400 text-xs">
        © 2025 AI Tools Hub. Built by Charles.
      </footer>
    </main>
  );
}
