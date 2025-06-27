import "./Testimonial.css";
import testimonials from "../../api/TestimonialApi.json";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-heading">
        <p className="testimonial-subtitle">What Our Members Say</p>
        <h2 className="testimonial-title">Real Stories. Real Results.</h2>
      </div>

      <div className="testimonial-slider-container">
        <div className="testimonial-slider">
          {testimonials.map((item) => (
            <div className="testimonial-box" key={item.id}>
              <p className="testimonial-feedback">“{item.feedback}”</p>
              <h4 className="testimonial-name">— {item.name}</h4>
              <span className="testimonial-role">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
