import { useState } from "react";
//import { Link } from 'react-router-dom'
import "./footer.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="footer">
    <div className="grid" id="footer">
          <div className="footer-content">
            <h1 className="footer-hero">Jarrett<br /><span className="footer-hero-extra">McCarty</span></h1>
            <p className="footer-description">Thanks for giving my portfolio a look - Please feel free to reach out to me. I'll do my best to get back to you.</p>
            <div className="footer-action">Let's connect</div>
            <h6 className="footer-thanks">~JBM</h6>
          </div>
          <div className="footer-link">
            <div className="footer-link-section">
              <div className="footer-link-item"><a href="#about">About</a></div>
              <div className="footer-link-item"><a href="#exp">Experience</a></div>
              <div className="footer-link-item"><a href="#works">Work</a></div>
            </div>
            <div className="footer-link-section">
              <div className="footer-link-item"><a href="https://www.linkedin.com/in/jarrettmccarty/" target="_blank">Linkedin</a></div>
            </div>
          </div>
        </div>
        </div>
  );
}
