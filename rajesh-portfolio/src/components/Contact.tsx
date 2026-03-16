import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:tmr.mahendra@gmail.com" data-cursor="disable">
                tmr.mahendra@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917416001477" data-cursor="disable">
                +91-7416001477
              </a>
            </p>
            <h4>Education</h4>
            <p>B.E. CSE (AI & ML) — PES College of Engineering, Mandya</p>
            <p style={{ marginTop: "4px", opacity: 0.6, fontSize: "14px" }}>
              3rd Year · CGPA: 8.1 · Sept 2023 – July 2027
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/MahendraReddy"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/mahendrareddyt"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>

          </div>
          <div className="contact-box">
            <h2>
              Open to opportunities <br /> in{" "}
              <span>AI & ML Engineering</span>
            </h2>
            <h5>
              <MdCopyright /> 2025 Mahendra Reddy Tappeta
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
