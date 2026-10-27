import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  const translations = {
    pt: {
      title: 'Entra em Contacto Comigo',
      description:
        'Sente-te à vontade para entrar em contacto. Estou sempre disponível para conversar sobre novos projetos, oportunidades e colaborações.',
    },
    en: {
      title: 'Get in Contact with Me',
      description:
        "Feel free to get in contact. I'm always looking forward to discussing new projects, opportunities and collaborations.",
    },
  };

  const t = translations[language];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">{t.title}</h2>

        <p className="contact-text">{t.description}</p>

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
