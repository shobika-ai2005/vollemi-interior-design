import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/vollimelogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkNav, setDarkNav] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const checkNavbarBackground = () => {
      const navbar = document.querySelector(".navbar");

      if (!navbar) return;

      const navbarRect = navbar.getBoundingClientRect();

      // Dark sections where navbar should switch to dark glass
      const darkSections = document.querySelectorAll(
        "#philosophy, #contact"
      );

      let isDark = false;

      darkSections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect();

        const overlaps =
          sectionRect.top < navbarRect.bottom &&
          sectionRect.bottom > navbarRect.top;

        if (overlaps) {
          isDark = true;
        }
      });

      setDarkNav(isDark);
    };

    checkNavbarBackground();

    window.addEventListener("scroll", checkNavbarBackground, {
      passive: true,
    });

    window.addEventListener("resize", checkNavbarBackground);

    return () => {
      window.removeEventListener("scroll", checkNavbarBackground);
      window.removeEventListener("resize", checkNavbarBackground);
    };
  }, []);

  return (
    <header className={`navbar ${darkNav ? "dark-nav" : ""}`}>

      {/* LOGO */}
      <a
        href="#home"
        className="navbar-logo"
        onClick={closeMenu}
      >
        <img
          src={logo}
          alt="Vollemi Interior Design"
        />
      </a>

      {/* DESKTOP NAVIGATION */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* DESKTOP TALK BUTTON */}
      <a
        href="#contact"
        className="nav-button"
      >
        <span>Let's Talk</span>

        <span className="nav-button-arrow">
          ↗
        </span>
      </a>

      {/* MOBILE MENU BUTTON */}
      <button
        className={`menu-button ${
          menuOpen ? "active" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MOBILE NAVIGATION */}
      <nav
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

   

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
          href="#contact"
          className="mobile-talk"
          onClick={closeMenu}
        >
          <span>Let's Talk</span>
          <span>↗</span>
        </a>
      </nav>

    </header>
  );
}

export default Navbar;