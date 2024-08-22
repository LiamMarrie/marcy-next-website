import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const HeroSection = () => {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    const sliderContainer = sliderContainerRef.current;
    const sliderItems = sliderContainer.children;
    const sliderPrevBtn = document.querySelector("[data-slider-prev]");
    const sliderNextBtn = document.querySelector("[data-slider-next]");

    const slideNext = () => {
      setCurrentSlidePos((prevPos) => (prevPos + 1) % sliderItems.length);
    };

    const slidePrev = () => {
      setCurrentSlidePos(
        (prevPos) => (prevPos - 1 + sliderItems.length) % sliderItems.length
      );
    };

    sliderNextBtn.addEventListener("click", slideNext);
    sliderPrevBtn.addEventListener("click", slidePrev);

    if (sliderItems.length <= 1) {
      sliderNextBtn.style.display = "none";
      sliderPrevBtn.style.display = "none";
    }

    return () => {
      sliderNextBtn.removeEventListener("click", slideNext);
      sliderPrevBtn.removeEventListener("click", slidePrev);
    };
  }, [currentSlidePos]);

  return (
    <section
      id="hero"
      className="section hero has-bg-image"
      aria-label="home"
      style={{
        backgroundImage: "url('./assets/images/hero-bg.jpg')",
      }}
    >
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">Haven Family Wellness</h1>

          <p className="hero-text">
            We believe that every family deserves support and care. At Haven
            Family Wellness, we're dedicated to providing personalized
            assistance to families with children with disabilities. Our goal is
            to help you navigate the challenges of daily life and create a
            nurturing environment for your child to thrive.
          </p>

          <div className="btn-wrapper">
            <Link href="/parentform">
              <p className="btn btn-primary">Get Started</p>
            </Link>

            <Link href="/contactPage">
              <p className="btn btn-outline">Get In Contact</p>
            </Link>
          </div>
        </div>

        <div className="hero-slider" data-slider>
          <div className="slider-inner" ref={sliderContainerRef}>
            <ul className="slider-container" data-slider-container>
              <li className="slider-item">
                <figure
                  className="img-holder"
                  style={{ "--width": 575, "--height": 550 }}
                >
                  <img
                    src="/assets/images/bowling.jpeg"
                    width="575"
                    height="550"
                    alt=""
                    className="img-cover"
                  />
                </figure>
              </li>

              <li className="slider-item">
                <div className="hero-card">
                  <figure
                    className="img-holder"
                    style={{ "--width": 575, "--height": 550 }}
                  >
                    <img
                      src="/assets/images/swimming.jpeg"
                      width="575"
                      height="550"
                      alt="hero banner"
                      className="img-cover"
                    />
                  </figure>
                </div>
              </li>

              <li className="slider-item">
                <figure
                  className="img-holder"
                  style={{ "--width": 575, "--height": 550 }}
                >
                  <img
                    src="/assets/images/learning.jpeg"
                    width="575"
                    height="550"
                    alt=""
                    className="img-cover"
                  />
                </figure>
              </li>
              <li className="slider-item">
                <figure
                  className="img-holder"
                  style={{ "--width": 575, "--height": 550 }}
                >
                  <img
                    src="/assets/images/drawing.jpeg"
                    width="575"
                    height="550"
                    alt=""
                    className="img-cover"
                  />
                </figure>
              </li>
            </ul>
          </div>

          <div className="slider-buttons">
            <button
              className="slider-btn prev"
              aria-label="slide to previous"
              data-slider-prev
              onClick={() =>
                setCurrentSlidePos((prevPos) => (prevPos - 1 + 4) % 4)
              }
            >
              <ion-icon name="arrow-back"></ion-icon>
            </button>

            <button
              className="slider-btn next"
              aria-label="slide to next"
              data-slider-next
              onClick={() => setCurrentSlidePos((prevPos) => (prevPos + 1) % 4)}
            >
              <ion-icon name="arrow-forward"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
