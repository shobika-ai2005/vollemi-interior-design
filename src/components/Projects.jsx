import { useEffect, useRef, useState } from "react";
import "./Projects.css";

import PROJECT1 from "../assets/PROJECT1.jfif";
import PROJECT2 from "../assets/PROJECT2.jfif";
import PROJECT3 from "../assets/PROJECT3.jfif";
import PROJECT4 from "../assets/PROJECT4.jfif";

function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      number: "01",
      title: "The Woodline Residence",
      category: "RESIDENTIAL INTERIORS",
      image: PROJECT1,
      description:
        "A warm residential interior shaped by natural wood, soft textures, muted tones, and effortless everyday comfort.",
    },

    // PROJECT 2 NOW USES PROJECT3 IMAGE
    {
      number: "02",
      title: "The Marble House",
      category: "LUXURY RESIDENCE",
      image: PROJECT3,
      description:
        "A refined contemporary home where marble, architectural forms, and subtle details create a timeless sense of luxury.",
    },

    // PROJECT 3 NOW USES PROJECT2 IMAGE
    {
      number: "03",
      title: "The Modern Kitchen",
      category: "KITCHEN DESIGN",
      image: PROJECT2,
      description:
        "A functional kitchen designed around clean lines, intelligent storage, natural materials, and modern living.",
    },

    {
      number: "04",
      title: "The Quiet Retreat",
      category: "BEDROOM INTERIORS",
      image: PROJECT4,
      description:
        "A calm private retreat built around warm tones, soft materials, balanced lighting, and a feeling of quiet.",
    },
  ];

  const openProject = (index) => {
    setSelectedProject(index);

    document.body.style.overflow = "hidden";
    document.body.classList.add("project-modal-open");
  };

  const closeProject = () => {
    setSelectedProject(null);

    document.body.style.overflow = "";
    document.body.classList.remove("project-modal-open");
  };

  const nextProject = () => {
    setSelectedProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setSelectedProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeProject();
      }

      if (event.key === "ArrowRight" && selectedProject !== null) {
        nextProject();
      }

      if (event.key === "ArrowLeft" && selectedProject !== null) {
        previousProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "";
      document.body.classList.remove("project-modal-open");
    };
  }, [selectedProject]);

  return (
    <>
      {/* =========================
          PROJECTS SECTION
      ========================== */}

      <section
        ref={sectionRef}
        className={`projects ${isVisible ? "is-visible" : ""}`}
        id="projects"
      >
        {/* Background Typography */}
        <div className="projects-bg-word">WORK</div>

        <div className="projects-container">

          {/* =========================
              TOP HEADER
          ========================== */}

          <div className="projects-top">
            <div className="projects-label">
              <span></span>

              <p>03 — SELECTED WORK</p>
            </div>

            <p className="projects-top-note">
              SPACES · STORIES · DETAILS
            </p>
          </div>

          {/* =========================
              MAIN HEADING
          ========================== */}

          <div className="projects-heading">

            <div className="projects-heading-meta">
              <span>OUR PORTFOLIO</span>

              <span>VOLLEMI INTERIOR DESIGN</span>
            </div>

            <div className="projects-heading-main">

              <h2>
                Spaces we've
                <br />
                <em>created.</em>
              </h2>

              <div className="projects-count">
                <strong>04</strong>
                <span>/04</span>
              </div>

            </div>
          </div>

          {/* =========================
              INTRO
          ========================== */}

          <div className="projects-intro">

            <div className="projects-intro-line"></div>

            <p>
              A collection of interiors shaped by thoughtful design,
              natural materials, and a deep understanding of how people
              want to live.
            </p>

          </div>

          {/* =========================
              PROJECT GRID
          ========================== */}

          <div className="projects-grid">

            {projects.map((project, index) => (

              <article
                className={`project-card project-card-${index + 1}`}
                key={project.number}
                style={{
                  "--project-delay": `${0.25 + index * 0.16}s`,
                }}
              >

                {/* IMAGE */}

                <div
                  className="project-image-wrap"
                  onClick={() => openProject(index)}
                >

                  <div className="project-image">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <div className="project-image-shine"></div>

                    <div className="project-image-overlay"></div>

                    <div className="project-number">
                      {project.number}
                    </div>

                    {/* VIEW BUTTON */}

                    <button
                      className="project-view"
                      onClick={(event) => {
                        event.stopPropagation();
                        openProject(index);
                      }}
                      aria-label={`View ${project.title}`}
                    >
                      <span>VIEW</span>

                      <span>↗</span>
                    </button>

                  </div>
                </div>

                {/* PROJECT INFORMATION */}

                <div className="project-info">

                  <div className="project-category">
                    {project.category}
                  </div>

                  <div className="project-title-row">

                    <h3>
                      {project.title}
                    </h3>

                    <span>↗</span>

                  </div>

                </div>

              </article>

            ))}

          </div>

          {/* =========================
              BOTTOM STATEMENT
          ========================== */}

          <div className="projects-footer">

            <div className="projects-footer-brand">

              <span>VOLLEMI</span>

              <div></div>

            </div>

            <p>
              INTERIORS THAT
              <br />
              <em>FEEL LIKE YOU.</em>
            </p>

            <a
              href="#contact"
              className="projects-footer-button"
            >
              <span>START A PROJECT</span>

              <span>↗</span>
            </a>

          </div>

        </div>
      </section>

      {/* =========================
          PROJECT MODAL
      ========================== */}

      {selectedProject !== null && (

        <div className="project-modal">

          {/* BACKDROP */}

          <div
            className="project-modal-backdrop"
            onClick={closeProject}
          ></div>

          {/* MODAL CONTENT */}

          <div className="project-modal-content">

            {/* CLOSE BUTTON */}

            <button
              className="project-modal-close"
              onClick={closeProject}
              aria-label="Close project"
            >
              <span></span>
              <span></span>
            </button>

            {/* MODAL IMAGE */}

            <div className="project-modal-image">

              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
              />

            </div>

            {/* MODAL DETAILS */}

            <div className="project-modal-details">

              <div className="project-modal-number">
                {projects[selectedProject].number}
              </div>

              <div className="project-modal-category">
                {projects[selectedProject].category}
              </div>

              <h3>
                {projects[selectedProject].title}
              </h3>

              <p>
                {projects[selectedProject].description}
              </p>

              {/* MODAL NAVIGATION */}

              <div className="project-modal-navigation">

                {/* PREVIOUS */}

                <button onClick={previousProject}>

                  <span>←</span>

                  <small>PREVIOUS</small>

                </button>

                {/* COUNTER */}

                <div className="project-modal-counter">

                  <span>
                    {String(selectedProject + 1).padStart(2, "0")}
                  </span>

                  <div></div>

                  <span>
                    {String(projects.length).padStart(2, "0")}
                  </span>

                </div>

                {/* NEXT */}

                <button onClick={nextProject}>

                  <small>NEXT</small>

                  <span>→</span>

                </button>

              </div>

            </div>

          </div>

        </div>

      )}
    </>
  );
}

export default Projects;