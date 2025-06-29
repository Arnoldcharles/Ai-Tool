"use client";

import { useEffect, useState } from "react";
import { Loader2, Network, Clock } from "lucide-react";

export default function Landing() {
  const [ip, setIp] = useState("...");
  const [runtime, setRuntime] = useState("...");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch("/api/status");
        const data = await res.json();
        setIp(data.ip);
        setRuntime(`${data.runtime}s`);
      } catch (err) {
        setIp("Unavailable");
        setRuntime("Unavailable");
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0c0e1a] flex flex-col items-center justify-center text-center px-4">
      {/* Glow effect */}
      <div className="absolute right-10 bottom-10 w-72 h-72 bg-purple-700 rounded-full blur-3xl opacity-30" />

      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-600">
        AI TOOLS HUB
      </h1>

      <div className="mt-6 text-sm text-white space-y-1">
        <p className="flex items-center justify-center gap-2">
          <Network className="w-4 h-4" />
          IP: <span className="text-teal-400">{ip}</span>
        </p>
        <p className="flex items-center justify-center gap-2">
          <Clock className="w-4 h-4" />
          Runtime: <span className="text-green-400">{runtime}</span>
        </p>
      </div>

      <button className="mt-10 px-10 py-4 rounded-2xl border border-purple-500 text-white text-lg font-medium flex items-center gap-3 hover:bg-purple-900/20 transition">
        Continue to Site
        <Loader2 className="w-5 h-5 animate-spin text-pink-400" />
      </button>
    </section>
  );
}
