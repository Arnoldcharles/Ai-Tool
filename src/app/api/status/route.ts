import { NextResponse } from 'next/server'

let startTime = Date.now();

export async function GET() {
  const ip = "102.89.41.130"; // Replace with real IP logic if needed
  const runtimeSeconds = Math.floor((Date.now() - startTime) / 1000);

  return NextResponse.json({
    ip,
    runtime: runtimeSeconds,
  });
}
