import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    feedback:
      "The platform made booking an appointment so simple and quick. Highly recommended!",
  },
  {
    id: 2,
    name: "Mark Stevens",
    feedback:
      "I found an excellent specialist nearby with just a few clicks. Great service.",
  },
  {
    id: 3,
    name: "Sara Williams",
    feedback:
      "Tracking my appointments and medical history here is super convenient.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">What Our Users Say</h2>
        <div className="space-y-8">
          {testimonials.map(({ id, name, feedback }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto"
            >
              <p className="text-gray-800 italic mb-4">"{feedback}"</p>
              <p className="font-semibold text-blue-700">- {name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
