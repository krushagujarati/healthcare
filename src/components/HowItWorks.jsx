import React from "react";
import '../styles/howItWorks.css';

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
    <section className="how-it-works-section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-wrapper">
          {steps.map(({ step, title, description, icon }) => (
            <div key={step} className="step-card">
              <div className="step-icon">{icon}</div>
              <div className="step-number">Step {step}</div>
              <h3 className="step-title">{title}</h3>
              <p className="step-description">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
