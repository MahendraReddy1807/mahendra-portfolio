import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Smart CV Analyzer",
    category: "AI-Powered Resume Screening",
    description:
      "Built an intelligent resume screening system (Jan 2026) that matches candidate CVs against job descriptions using TF-IDF vectorization and cosine similarity. Ranks applicants by relevance score, cutting manual screening time significantly.",
    tools: "Python, Scikit-learn, TF-IDF, Cosine Similarity, NLP, Streamlit",
    github: "https://github.com/MahendraReddy/smart-cv-analyzer",
    image: "/images/placeholder.webp",
  },
  {
    title: "Indian Cricket Player Performance Analysis",
    category: "Data Analytics & Visualization",
    description:
      "Scraped live player statistics from Cricbuzz using Python and built interactive Power BI dashboards to visualize batting averages, strike rates, and performance trends across formats. Enables data-driven insights for team selection.",
    tools: "Python, BeautifulSoup, Pandas, Power BI",
    github: "https://github.com/MahendraReddy/cricket-player-analysis",
    image: "/images/placeholder.webp",
  },
  {
    title: "ROS – Restaurant Operational System",
    category: "Real-Time Analytics Dashboard",
    description:
      "Built a real-time operational analytics dashboard for restaurant management. Tracks orders, revenue, and inventory with interactive Plotly charts. Designed for fast decision-making via a clean, responsive Streamlit interface.",
    tools: "Python, Streamlit, Plotly, Pandas",
    github: "https://github.com/MahendraReddy/restaurant-operational-system",
    image: "/images/placeholder.webp",
  },
  {
    title: "Cancer Detection Model",
    category: "Machine Learning",
    description:
      "Developed a supervised ML model for early-stage cancer detection using clinical datasets. Applied feature engineering, model selection, and hyperparameter tuning with Scikit-learn. Deployed as an interactive diagnostic tool via Streamlit.",
    tools: "Python, NumPy, Pandas, Scikit-learn, Streamlit",
    github: "https://github.com/MahendraReddy/cancer-detection-model",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="carousel-github"
                          data-cursor="disable"
                        >
                          View on GitHub <MdArrowOutward />
                        </a>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
