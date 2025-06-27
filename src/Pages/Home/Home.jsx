import React from "react";
import Hero from "../../Components/Hero/Hero";
import Programs from "../Programs/Programs";
import WhyUs from "../WhyUs/WhyUs";
import Card from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="program">
        <Programs />
      </section>

      <section id="why-us">
        <Title title="Why Us" subtitle="The MuscleUp Advantage" />
        <WhyUs />
      </section>

      <section id="plans">
        <Title
          title="Pick Your Power"
          subtitle="Flexible Memberships Built for Every Goal"
        />
        <Card />
      </section>

      <section id="testimonials">
        <Testimonial />
      </section>

    </>
  );
};

export default Home;
