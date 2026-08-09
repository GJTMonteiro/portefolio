import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h2>Let's build something amazing together.</h2>

          <p>Thanks for visiting my portfolio. Feel free to connect with me!</p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/GJTMonteiro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/gjtmonteiro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/GJTMonteiro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)">
            <FaXTwitter />
          </a>
        </div>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Guilherme Monteiro. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
