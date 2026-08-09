import profile from "./assets/header.jpeg";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">Hello, I'm</p>

          <h1 className="hero-title">
            Guilherme <span>Monteiro</span>
          </h1>

          <h2 className="hero-role">
            <Typewriter
              words={[
                "Front-End Developer",
                "React Developer",
                "TypeScript Developer",
                "UI Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1800}
            />
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications using
            React, TypeScript and the latest web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-glow"></div>
          <img src={profile} alt="Guilherme Monteiro" />
        </div>
      </div>

      <a href="#about" className="scroll-down">
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Hero;