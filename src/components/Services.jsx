import { useEffect, useRef, useState } from "react";
import "./Services.css";

function Services() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      number: "01",
      title: "Residential",
      subtitle: "Homes designed around you.",
      description:
        "Thoughtful interiors for apartments, villas, independent homes, and personal spaces that feel warm, refined, and completely yours.",
      tags: ["Living Spaces", "Bedrooms", "Kitchens", "Full Homes"],
    },
    {
      number: "02",
      title: "Commercial",
      subtitle: "Spaces that make an impression.",
      description:
        "Distinctive commercial interiors designed to reflect your brand, strengthen experiences, and create spaces people remember.",
      tags: ["Offices", "Retail", "Studios", "Workspaces"],
    },
    {
      number: "03",
      title: "Turnkey",
      subtitle: "From first sketch to final detail.",
      description:
        "A complete interior journey where design, materials, execution, and finishing come together seamlessly under one vision.",
      tags: ["Design", "Execution", "Furniture", "Styling"],
    },
    {
      number: "04",
      title: "Custom",
      subtitle: "Made specifically for you.",
      description:
        "Bespoke furniture, lighting, colour palettes, styling, and spatial details created to bring your individual vision to life.",
      tags: ["Furniture", "Lighting", "Styling", "Details"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`services ${isVisible ? "is-visible" : ""}`}
      id="services"
    >
      <div className="services-container">

        {/* TOP HEADER */}
        <div className="services-top">
          <div className="services-label">
            <span></span>
            <p>03 — WHAT WE DO</p>
          </div>

          <p className="services-top-note">
            DESIGN · DETAIL · DELIVERY
          </p>
        </div>

        {/* HEADING */}
        <div className="services-heading">
          <div className="services-heading-small">
            <span>OUR SERVICES</span>
            <span>VOLLEMI INTERIOR DESIGN</span>
          </div>

          <h2>
            Every space.
            <br />
            <em>Thoughtfully imagined.</em>
          </h2>
        </div>

        {/* INTRO */}
        <div className="services-intro">
          <div className="services-intro-line"></div>

          <p>
            From complete interior transformations to the smallest finishing
            detail, we design spaces that balance beauty, function, and the way
            you truly live.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="services-list">
          {services.map((service, index) => (
            <div
              className="service-item"
              key={service.number}
              style={{ "--service-delay": `${0.35 + index * 0.15}s` }}
            >
              <div className="service-number">
                {service.number}
              </div>

              <div className="service-main">
                <div className="service-title-wrap">
                  <h3>{service.title}</h3>
                  <span className="service-arrow">↗</span>
                </div>

                <p className="service-subtitle">
                  {service.subtitle}
                </p>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="service-index">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="services-bottom">
          <div className="services-bottom-symbol">✦</div>

          <div className="services-bottom-text">
            <span>ONE VISION.</span>
            <strong>EVERY DETAIL.</strong>
          </div>

          <a href="#contact" className="services-button">
            <span>Start Your Project</span>
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;