import { FaGithub} from 'react-icons/fa';
import type { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  technologies: ReactNode[];
}

const ProjectCard = ({
  title,
  description,
  image,
  github,
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
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository">
            <FaGithub />
            <span>GitHub</span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
