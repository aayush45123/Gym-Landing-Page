import React from "react";
import "./Card.css"; // Assuming you have a CSS file for styles
import { NavLink } from "react-router";

const plans = [
  {
    title: "BASIC GYM",
    tag: "STARTER",
    description:
      "Perfect entry-level membership for fitness beginners looking to start their journey.",
    features: ["Gym Access", "Locker Room", "Basic Equipment", "Guest Pass"],
    price: 999,
    color: "#ff6b35",
  },
  {
    title: "PREMIUM FITNESS",
    tag: "POPULAR",
    description:
      "Complete fitness solution with personal training and exclusive member benefits.",
    features: [
      "All Access",
      "Personal Training",
      "Group Classes",
      "Nutrition Plan",
    ],
    price: 4999,
    color: "#4361ee",
  },
  {
    title: "ELITE MEMBERSHIP",
    tag: "PREMIUM",
    description:
      "Ultimate fitness experience with VIP amenities and unlimited premium services.",
    features: [
      "VIP Access",
      "Unlimited PT",
      "Spa Services",
      "Diet Consultation",
    ],
    price: 8999,
    color: "#f72585",
  },
];

const getFeatureIcon = (feature) => {
  const iconMap = {
    "Gym Access": "🏋️",
    "Locker Room": "🔐",
    "Basic Equipment": "💪",
    "Guest Pass": "👥",
    "All Access": "✅",
    "Personal Training": "🎯",
    "Group Classes": "👨‍👩‍👧‍👦",
    "Nutrition Plan": "🥗",
    "VIP Access": "⭐",
    "Unlimited PT": "🔄",
    "Spa Services": "🧖‍♀️",
    "Diet Consultation": "📋",
  };
  return iconMap[feature] || "✨";
};

const Card = () => {
  return (
    <div className="wrapper">
      <div className="container">
        {plans.map((plan, index) => (
          <div
            className="glass"
            key={index}
            style={{
              "--r": `${(index - 1) * 15}`,
              "--primary-color": plan.color,
            }}
            data-text={plan.tag}
          >
            {/* Corner star decoration */}
            <div className="corner-star">★</div>

            <div className="content">
              {/* Bold header section like the reference */}
              <div className="card-header">
                <h2 className="card-title">{plan.title}</h2>
                <span className="card-tag">{plan.tag}</span>
              </div>

              <div className="card-body">
                <p className="card-description">{plan.description}</p>

                {/* Feature grid with CSS icons */}
                <div className="feature-grid">
                  {plan.features.map((feature, i) => (
                    <div className="feature-item" key={i}>
                      <div className="feature-icon">
                        <span className="icon-emoji">
                          {getFeatureIcon(feature)}
                        </span>
                      </div>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Dotted separator like reference */}
                {/* <div className="separator">
                  <div className="dots"></div>
                  <span className="scissors">✂</span>
                  <div className="dots"></div>
                </div> */}

                <div className="card-actions">
                  <div className="price-section">
                    <div className="price">
                      <span className="currency">₹</span>
                      <span className="amount">{plan.price}</span>
                    </div>
                    <span className="price-period">per plan</span>
                  </div>
                  <NavLink to={"/get-started"} className="card-button-link">
                    <button className="card-button">GET STARTED</button>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Decorative corner shape */}
            <div className="corner-shape"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
