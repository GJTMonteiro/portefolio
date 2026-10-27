import profile from './assets/header.jpeg';
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowDown } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  const translations = {
    pt: {
      subtitle: 'Olá, sou o',
      roles: [
        'Programador Front-End',
        'Programador React',
        'Programador TypeScript',
        'Entusiasta de UI',
      ],
      description:
        'Desenvolvo aplicações web modernas, responsivas e intuitivas, utilizando React, TypeScript e as tecnologias web mais recentes.',
      projects: 'Ver Projetos',
      contact: 'Contactar-me',
    },
    en: {
      subtitle: "Hello, I'm",
      roles: [
        'Front-End Developer',
        'React Developer',
        'TypeScript Developer',
        'UI Enthusiast',
      ],
      description:
        'I build modern, responsive and user-friendly web applications using React, TypeScript and the latest web technologies.',
      projects: 'View Projects',
      contact: 'Contact Me',
    },
  };

  const t = translations[language];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">{t.subtitle}</p>

          <h1 className="hero-title">
            Guilherme <span>Monteiro</span>
          </h1>

          <h2 className="hero-role">
            <Typewriter
              key={language}
              words={t.roles}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1800}
            />
          </h2>

          <p className="hero-description">{t.description}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              {t.projects}
            </a>

            <a href="#contact" className="btn-secondary">
              {t.contact}
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-glow"></div>
          <img src={profile} alt="Guilherme Monteiro" />
        </div>
      </div>

      <a
        href="#about"
        className="scroll-down"
        aria-label={
          language === 'pt' ? 'Descer para Sobre' : 'Scroll to About'
        }>
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Hero;
