import React from "react";
import Accordion from "./Accordion";

const AboutSection = () => {
  return (
    <section id="about" className="about" aria-labelledby="about-label">
      <div className="container">
        <figure className="about-banner">
          <img
            src="./assets/images/original-2763AB09-D986-4534-B119-28E7BFC6DA40.jpeg"
            width="800"
            height="580"
            loading="lazy"
            alt="about banner"
            className="w-100"
          />
        </figure>

        <div className="about-content">
          <p className="section-subtitle" id="about-label">
            Our Values
          </p>

          <h2 className="h2 section-title">
            We believe in fostering an environment of compassion, growth, and
            community.
          </h2>

          <ul>
            <Accordion
              title="Compassionate Care"
              content="At Haven Family Wellness, we prioritize providing compassionate respite care services to families. Our commitment to understanding and supporting the needs of each individual allows us to offer a nurturing environment where families can find solace and support."
            />

            <Accordion
              title="Empowering Development"
              content="We are dedicated to empowering individuals through our Behavioral Developmental Support Services (BDS). By fostering a culture of inclusivity and growth, we enable each person to reach their fullest potential, embracing their uniqueness and celebrating their achievements."
            />

            <Accordion
              title="Community Connection"
              content="Haven Family Wellness is committed to building strong social skills and fostering connections within our community. Through personalized growth paths and tailored support, we encourage individuals to engage confidently with others, creating meaningful relationships and a sense of belonging."
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
