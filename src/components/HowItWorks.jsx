import React from "react";

const steps = [
  {
    step: "1",
    title: "Search",
    description: "Find doctors or hospitals based on your needs and location.",
    icon: "🔍",
  },
  {
    step: "2",
    title: "Book",
    description: "Schedule appointments easily with real-time availability.",
    icon: "📅",
  },
  {
    step: "3",
    title: "Heal",
    description: "Get the care you deserve and track your recovery progress.",
    icon: "❤️",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {steps.map(({ step, title, description, icon }) => (
            <div
              key={step}
              className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl mb-4">{icon}</div>
              <div className="text-2xl font-bold mb-2">Step {step}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 max-w-xs">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
