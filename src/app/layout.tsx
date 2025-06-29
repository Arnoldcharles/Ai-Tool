import "./globals.css";

export const metadata = {
  title: "Special Landing",
  description: "Landing page built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">{children}</body>
    </html>
  );
}
