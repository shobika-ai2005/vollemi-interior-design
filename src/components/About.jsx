import { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutImage from "../assets/ABOUT.jfif";

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about ${isVisible ? "is-visible" : ""}`}
      id="about"
    >
      {/* Decorative background */}
      <div className="about-bg-number">01</div>
      <div className="about-glow"></div>

      <div className="about-container">

        {/* TOP HEADER */}
        <div className="about-header">
          <div className="about-label">
            <span className="about-label-line"></span>
            <span>01</span>
            <span>ABOUT VOLLEMI</span>
          </div>

          <div className="about-header-note">
            INTERIORS WITH
            <br />
            INTENTION
          </div>
        </div>

        {/* MAIN TITLE */}
        <div className="about-heading">
          <p className="about-eyebrow">THE VOLLEMI APPROACH</p>

          <h2>
            Designing spaces
            <br />
            <em>with meaning.</em>
          </h2>
        </div>

        {/* DIVIDER */}
        <div className="about-divider">
          <span></span>
          <span>CRAFT · DETAIL · TIMELESSNESS</span>
        </div>

        {/* MAIN CONTENT */}
        <div className="about-main">

          {/* IMAGE */}
          <div className="about-visual">
            <div className="about-image-frame"></div>

            <div className="about-image-wrap">
              <img
                src={aboutImage}
                alt="Vollemi Interior Design"
              />

              <div className="about-image-overlay"></div>

              <div className="about-image-label">
                <span>VOLLEMI</span>
                <span>INTERIORS</span>
              </div>
            </div>

            <div className="about-image-index">
              <span>01</span>
              <span>/</span>
              <span>VOLLEMI</span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="about-info">

            <div className="about-intro">
              <span className="about-small-title">WHO WE ARE</span>

              <h3>
                Spaces that feel
                <br />
                <em>uniquely yours.</em>
              </h3>
            </div>

            <div className="about-copy">
              <p>
                Vollemi is an interior design studio shaped by the belief
                that the most beautiful spaces are the ones that feel
                deeply personal.
              </p>

              <p>
                We thoughtfully bring together form, texture, light, colour,
                and craftsmanship to create interiors that are not simply
                designed to be seen, but spaces designed to be felt, lived in,
                and remembered.
              </p>
            </div>

            {/* Floating detail */}
            <div className="about-detail">
              <span className="detail-line"></span>

              <div>
                <strong>EST. 2026</strong>
                <small>INTERIOR DESIGN STUDIO</small>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="about-bottom">
          <p>
            EVERY SPACE HAS A STORY.
            <span> WE DESIGN HOW IT FEELS.</span>
          </p>

          <div className="about-bottom-mark">✦</div>
        </div>

      </div>

      {/* MARQUEE */}
      <div className="about-marquee">
        <div className="about-marquee-track">
          <span>DESIGN</span>
          <i>✦</i>

          <span>CRAFT</span>
          <i>✦</i>

          <span>DETAIL</span>
          <i>✦</i>

          <span>TIMELESS</span>
          <i>✦</i>

          <span>DESIGN</span>
          <i>✦</i>

          <span>CRAFT</span>
          <i>✦</i>

          <span>DETAIL</span>
          <i>✦</i>

          <span>TIMELESS</span>
          <i>✦</i>
        </div>
      </div>

    </section>
  );
}

export default About;