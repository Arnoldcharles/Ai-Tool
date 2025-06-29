export default function Hero() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Build at the speed of light
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600">
          A modern landing page boilerplate built with Next.js 14, Tailwind CSS,
          and App Router.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#"
            className="px-6 py-3 bg-black text-white rounded-lg text-base font-medium hover:bg-gray-900 transition"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg text-base font-medium hover:bg-gray-200 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
