import { Bolt, Layers, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Bolt className="w-8 h-8 text-blue-600" />,
    title: "Fast Performance",
    description:
      "Built with modern frameworks to ensure your site loads fast and runs smoothly.",
  },
  {
    icon: <Layers className="w-8 h-8 text-blue-600" />,
    title: "Modular Code",
    description: "Structured and scalable codebase you can build on with ease.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Secure by Default",
    description: "Best practices and secure defaults included out of the box.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Why choose this stack?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
