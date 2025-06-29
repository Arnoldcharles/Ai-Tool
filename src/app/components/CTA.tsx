export default function CTA() {
  return (
    <section className="py-20 bg-black text-white text-center px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to get started?
        </h2>
        <p className="mb-8 text-gray-300">
          Join the waitlist and be the first to know when we launch.
        </p>

        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="you@example.com"
            className="px-4 py-3 rounded-md w-full sm:w-auto text-black"
            required
          />
          <button
            type="submit"
            className="bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
}
