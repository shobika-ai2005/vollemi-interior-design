import { useEffect, useRef, useState } from "react";
import "./Contact.css";

function Contact() {
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

  return (
    <section
      ref={sectionRef}
      className={`contact ${isVisible ? "is-visible" : ""}`}
      id="contact"
    >
      {/* ================= BACKGROUND WORD ================= */}
      <div className="contact-bg-word">CONTACT</div>

      <div className="contact-container">

        {/* ================= TOP ================= */}
        <div className="contact-top">

          <div className="contact-label">
            <span></span>
            <p>04 — CONTACT</p>
          </div>

          <p className="contact-top-right">
            LET'S CREATE SOMETHING
            <br />
            MEANINGFUL TOGETHER.
          </p>

        </div>


        {/* ================= HEADING ================= */}
        <div className="contact-heading">

          <p className="contact-eyebrow">
            HAVE A SPACE IN MIND?
          </p>

          <h2>
            Let's talk
            <br />
            <em>about your space.</em>
          </h2>

        </div>


        {/* ================= CONTENT ================= */}
        <div className="contact-content">

          {/* ================= LEFT SIDE ================= */}
          <div className="contact-intro">

            <div className="contact-star">
              ✦
            </div>

            <p className="contact-intro-text">
              Every beautiful space begins with a conversation.
              Tell us what you're imagining, and let's turn your
              ideas into a place that feels completely yours.
            </p>

            <div className="contact-availability">

              <span>AVAILABLE FOR</span>

              <p>
                Residential Interiors
                <br />
                Turnkey Projects
                <br />
              </p>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="contact-details">


            {/* ================= EMAIL ================= */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@vollemi.com&su=Interior%20Design%20Enquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >

              <div className="contact-detail-top">
                <span>01</span>
                <small>EMAIL</small>
              </div>

              <div className="contact-detail-main">
                <h3>info@vollemi.com</h3>

                <span className="contact-arrow">
                  ↗
                </span>
              </div>

            </a>


            {/* ================= WHATSAPP ================= */}
            <a
              href="https://wa.me/919159858631"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >

              <div className="contact-detail-top">
                <span>02</span>
                <small>WHATSAPP</small>
              </div>

              <div className="contact-detail-main">

                {/* PHONE NUMBER */}
                <h3 className="contact-phone">
                  +91 91598 58631
                </h3>

                <span className="contact-arrow">
                  ↗
                </span>

              </div>

            </a>


            {/* ================= LOCATION ================= */}
            <div className="contact-detail contact-detail-location">

              <div className="contact-detail-top">
                <span>03</span>
                <small>LOCATIONS</small>
              </div>

              <div className="contact-detail-main">

                <h3>
                  Bangaloer . Hosur . Nagercoil
                </h3>

              </div>

            </div>

          </div>

        </div>


        {/* ================= SOCIAL ================= */}
        <div className="contact-social-row">

          <span className="contact-social-label">
            FOLLOW VOLLEMI
          </span>

          <div className="contact-social-links">

            <a
              href="https://www.instagram.com/vollemi_interio?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* ================= STATEMENT ================= */}
        <div className="contact-statement">

          <div className="contact-statement-line"></div>

          <p>
            YOUR SPACE.
            <br />
            <em>YOUR STORY.</em>
          </p>


          {/* ================= BOTTOM ================= */}
          <div className="contact-statement-bottom">

            <span>
              VOLLEMI INTERIOR DESIGN
            </span>

            {/* WHATSAPP CTA */}
            <a
              href="https://wa.me/919159858631"
              target="_blank"
              rel="noopener noreferrer"
            >
              START A CONVERSATION
              <strong>↗</strong>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;