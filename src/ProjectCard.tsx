import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { ReactNode } from 'react';

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
          {/* GitHub */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository">
            <FaGithub />
            <span>GitHub</span>
          </a>

          {/* Live Demo */}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo">
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
