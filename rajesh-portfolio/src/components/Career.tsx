import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. CSE (AI & ML)</h4>
                <h5>PES College of Engineering, Mandya</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursuing Bachelor of Engineering in Computer Science & Engineering
              with specialization in AI & ML (Sept 2023 – July 2027). Currently
              in 3rd year with a CGPA of 8.1. Focused on machine learning,
              data science, NLP, and AI-native application development.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AIML Intern</h4>
                <h5>Employability.life</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Engineered a supervised machine learning model for early cancer
              detection using Python, NumPy, Pandas, and Scikit-learn. Applied
              feature selection, cross-validation, and hyperparameter tuning.
              Deployed the solution as a production-ready diagnostic web app
              using Streamlit.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AIML Virtual Intern</h4>
                <h5>AICTE & Eduskills</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed a government-recognized virtual internship in Artificial
              Intelligence and Machine Learning. Gained hands-on experience in
              supervised and unsupervised learning, data pipelines, model
              evaluation, and real-world AI application development.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Joint Secretary</h4>
                <h5>IEEE PESCE Student Branch</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading technical initiatives and community engagement as Joint
              Secretary of IEEE PESCE. Organized and co-hosted Hacksprit 5.0,
              HackPulse, and Prompt Wars 1.0 & 2.0 — driving participation in
              AI, prompt engineering, and competitive programming events across
              the campus.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
