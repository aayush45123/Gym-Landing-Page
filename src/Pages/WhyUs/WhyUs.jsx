import React from "react";
import "./WhyUs.css";
import WhyUsImage from "../../assets/WhyChooseUs.png"; // Ensure this path is correct
import { NavLink } from "react-router";
const WhyUs = () => {
  return (
    <section className="whyus-section">
      <div className="whyus-container">
        <div className="whyus-image">
          <div className="image-wrapper">
            <img src={WhyUsImage} alt="Why choose our gym" />
          </div>
        </div>
        <div className="whyus-content">
          <h2 className="whyus-title">
            Why Choose <span className="highlight">MuscleUp</span>?
          </h2>
          <p className="whyus-description">
            At MuscleUp, we go beyond just fitness. We provide an environment
            that empowers you to become the best version of yourself — with
            expert trainers, top-tier equipment, and unmatched flexibility.
          </p>
          <ul className="whyus-list">
            <li>👨‍🏫 Certified professional trainers</li>
            <li>🏋️‍♀️ Latest machines & tech</li>
            <li>🕒 24/7 gym access for your convenience</li>
            <li>🤝 A powerful and supportive fitness community</li>
            <li>🧼 Spotless hygiene and safety guaranteed</li>
          </ul>
          <NavLink to={"/get-started"} className="join-button">
            <button className="btn-primary">Join the Family</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
