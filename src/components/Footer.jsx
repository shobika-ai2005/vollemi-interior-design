import "./Footer.css";
import logo from "../assets/vollimelogo.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ================================
            TOP FOOTER
        ================================= */}

        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand-info">

            <a href="#home" className="footer-logo">
              <img src={logo} alt="Vollemi Interior Design" />
            </a>

            <p className="footer-tagline">
              Thoughtfully designed interiors
              <br />
              made for living beautifully.
            </p>

          </div>


          {/* NAVIGATION */}
          <div className="footer-column">

            <span className="footer-label">
              EXPLORE
            </span>

            <nav className="footer-nav">

              <a href="#home">
                Home
                <span>↗</span>
              </a>

              <a href="#about">
                About
                <span>↗</span>
              </a>

              <a href="#services">
                Services
                <span>↗</span>
              </a>

              <a href="#projects">
                Projects
                <span>↗</span>
              </a>

              <a href="#contact">
                Contact
                <span>↗</span>
              </a>

            </nav>

          </div>


          {/* CONTACT */}
          <div className="footer-column footer-contact">

            <span className="footer-label">
              GET IN TOUCH
            </span>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@vollemi.com&su=Interior%20Design%20Enquiry"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@vollemi.com
              <span>↗</span>
            </a>

            <a
              href="https://wa.me/919159858631"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 91598 58631
              <span>↗</span>
            </a>

            <p>
              Nagercoil · Hosur · Bangalore
            </p>

          </div>


          {/* SOCIAL */}
          <div className="footer-column">

            <span className="footer-label">
              FOLLOW
            </span>

            <div className="footer-social">

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
                <span>↗</span>
              </a>


            </div>

          </div>

        </div>


        {/* ================================
            BIG BRAND
        ================================= */}

        <div className="footer-big-brand">
          VOLLEMI
        </div>


        {/* ================================
            BOTTOM
        ================================= */}

        <div className="footer-bottom">

          <div className="footer-copy">
            © 2026 VOLLEMI INTERIOR DESIGN
          </div>

          <a
            href="https://enticeinnovations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit"
          >
            Designed & Developed by Entice Innovations
          </a>

          <button
            className="footer-top-button"
            onClick={scrollToTop}
          >
            BACK TO TOP
            <span>↑</span>
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;