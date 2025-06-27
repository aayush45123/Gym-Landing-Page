import React from "react";
import "./Hero.css";
import hero from "../../assets/hero.png";
import { Link, NavLink } from "react-router";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your Body
              <span className="highlight"> Build Your </span>
              Dreams
            </h1>
            <p className="hero-description">
              Join MuscleUp and unlock your full potential with professional
              training, state-of-the-art equipment, and a community that pushes
              you to achieve greatness.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">550+</span>
                <span className="stat-label">Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Trainers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Access</span>
              </div>
            </div>
            <div className="hero-buttons">
              <NavLink to={"/get-started"} className="btn-link">
                <button className="btn-primary">Start Your Journey</button>
              </NavLink>
              <a href="#plans">
                <button className="btn-secondary">View Plans</button>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <img
              src={hero}
              alt="Professional gym equipment and training area"
            />
          </div>
        </div>
      </div>

      {/* <div className="floating-elements">
        <div className="floating-card">
          <div className="floating-card-icon">💪</div>
          <div className="floating-card-text">Strength Training</div>
        </div>
        <div className="floating-card">
          <div className="floating-card-icon">🎯</div>
          <div className="floating-card-text">Personal Goals</div>
        </div>
        <div className="floating-card">
          <div className="floating-card-icon">⚡</div>
          <div className="floating-card-text">High Energy</div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
