import { useEffect, useState } from "react";
import "./Hero.css";
import heroImage from "../assets/Hero2.jpeg";

function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `url(${heroImage})`,
        "--mouse-x": mouse.x,
        "--mouse-y": mouse.y,
      }}
    >
      {/* Cinematic overlays */}
      <div className="hero-overlay"></div>
      <div className="hero-glow"></div>
      <div className="hero-shine"></div>

      {/* Decorative frame */}
      <div className="hero-frame"></div>

      {/* HERO CONTENT */}
      <div className="hero-content">

        <div className="hero-label-wrap">
          <span className="hero-line"></span>

          <p className="hero-label">
            INTERIOR DESIGN · VOLLEMI
          </p>
        </div>

        <h1 className="hero-title">
          <span>The art of living,</span>
          <span>
            <em>beautifully designed.</em>
          </span>
        </h1>

        <p className="hero-description">
          Thoughtfully designed interiors that bring
          beauty, comfort, and meaning into everyday life.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-button">
            <span>Explore Our Work</span>
            <span className="hero-button-arrow">↗</span>
          </a>
        </div>

      </div>

      {/* Bottom information */}
      <div className="hero-bottom">

        <div className="hero-bottom-left">
          <span>EST. 2026</span>
          <span>INTERIOR DESIGN STUDIO</span>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-line">
            <span></span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;