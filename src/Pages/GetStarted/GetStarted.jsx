import React, { useState } from "react";
import "./GetStarted.css";
import bg from "../../assets/background.jpg";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Monthly",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem("admissions")) || [];
    submissions.push(formData);
    localStorage.setItem("admissions", JSON.stringify(submissions));
    alert("Successfully Submitted!");
    setFormData({ name: "", email: "", phone: "", plan: "Monthly" });
  };

  return (
    <section className="get-started-section">
      <div className="get-started-container">
        <div className="get-started-left">
          <img src={bg} alt="Join MuscleUp Gym" className="get-started-img" />
        </div>
        <div className="get-started-form">
          <h2>Start Your Transformation</h2>
          <p>Fill in your details and choose a plan to get started!</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select name="plan" value={formData.plan} onChange={handleChange}>
              <option value="Monthly">Monthly</option>
              <option value="6 Months">6 Months</option>
              <option value="Annual">Annual</option>
            </select>
            <button type="submit">Join Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
