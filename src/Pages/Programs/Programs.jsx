import React from "react";
import "./Programs.css";

const programs = [
  {
    title: "Weight Training",
    description:
      "Build strength and muscle mass with guided resistance workouts.",
    icon: "🏋️‍♂️",
  },
  {
    title: "Cardio Blast",
    description: "Improve endurance and burn fat with high-intensity cardio.",
    icon: "🏃‍♀️",
  },
  {
    title: "CrossFit",
    description: "Challenge your limits with functional, full-body training.",
    icon: "🔥",
  },
  {
    title: "Yoga & Flexibility",
    description: "Relax, stretch, and balance both body and mind.",
    icon: "🧘‍♀️",
  },
  {
    title: "HIIT",
    description: "Short and intense routines for maximum results.",
    icon: "⚡",
  },
  {
    title: "Personal Training",
    description: "Custom plans from certified experts just for you.",
    icon: "🎯",
  },
  {
    title: "Functional Mobility",
    description:
      "Enhance joint flexibility, posture, and movement efficiency with guided mobility drills.",
    icon: "🧊",
  },
  {
    title: "Bootcamp Challenge",
    description:
      "A full-body outdoor workout combining strength, cardio, and endurance training.",
    icon: "💥",
  },
];

const Programs = () => {
  return (
    <section className="programs-section">
      <div className="programs-container">
        <h2 className="programs-heading">Our Programs</h2>
        <div className="program-grid">
          {programs.map((program, index) => (
            <div className="program-card" key={index}>
              <div className="program-icon">{program.icon}</div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-desc">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
