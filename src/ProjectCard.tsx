import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { ReactNode } from 'react';
import { useLanguage } from './LanguageContext';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  technologies: ReactNode[];
}

const ProjectCard = ({
  title,
  description,
  image,
  github,
  demo,
  technologies,
}: ProjectCardProps) => {
  const { language } = useLanguage();

  const translations = {
    pt: {
      github: 'Repositório GitHub',
      demo: 'Demonstração online',
    },
    en: {
      github: 'GitHub Repository',
      demo: 'Live Demo',
    },
  };

  const t = translations[language];

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />

      <div className="project-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-icon">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-buttons">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.github}>
            <FaGithub />
            <span>GitHub</span>
          </a>

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.demo}>
              <FaExternalLinkAlt />
              <span>{t.demo}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
