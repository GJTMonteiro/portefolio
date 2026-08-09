import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Contact with me</h2>

        <p className="contact-text">
          Feel free to get in contact. I'm always looking forward to discuss new
          projects, opportunities and collaborations.
        </p>

        <div className="contact-links">
          <a
            href="https://github.com/GJTMonteiro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/gjtmonteiro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
