import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <li className="about-item">
      <div
        className={`accordion-card ${expanded ? "expanded" : ""}`}
        data-accordion
      >
        <h3 className="card-title">
          <button
            className="accordion-btn"
            data-accordion-btn
            onClick={toggleAccordion}
          >
            <ion-icon
              name={expanded ? "chevron-up-outline" : "chevron-down-outline"}
              aria-hidden="true"
              className={expanded ? "up" : "down"}
            ></ion-icon>
            <span className="h5">{title}</span>
          </button>
        </h3>

        <p className="accordion-content">{content}</p>
      </div>
    </li>
  );
};

export default Accordion;
