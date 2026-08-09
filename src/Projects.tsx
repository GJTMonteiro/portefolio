import ProjectCard from './ProjectCard';

import {
  SiReact,
  SiTypescript,
  SiCss,
  SiExpress,
  SiPostgresql,
} from 'react-icons/si';

// Project images
const ColorPaletteGenerator = 'https://placehold.co/600x400?text=Color+Palette+Generator';

const DevTrack = 'https://placehold.co/600x400?text=DevTrack';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>

      <p className="projects-text">
        A selection of projects that I coded to show my interest in modern web
        development with clean code and intuitive user experiences.
      </p>

      <div className="projects-grid">
        {/* =====================================================
            COLOR PALETTE GENERATOR
        ===================================================== */}

        <ProjectCard
          title="Color Palette Generator"
          description="A web application that generates and explores color palettes for design and styling."
          image={ColorPaletteGenerator}
          github="https://github.com/GJTMonteiro/color-palette-generator"
          technologies={[
            <SiReact color="#61DAFB" />,
            <SiCss color="#1572B6" />,
          ]}
        />

        {/* =====================================================
            DEVTRACK
        ===================================================== */}

        <ProjectCard
          title="DevTrack"
          description="A full-stack developer productivity platform for managing projects, tasks, productivity and development workflows."
          image={DevTrack}
          github="https://github.com/GJTMonteiro/DevTrack"
          technologies={[
            <SiReact color="#61DAFB" />,
            <SiTypescript color="#3178C6" />,
            <SiCss color="#1572B6" />,
            <SiExpress color="#ffffff" />,
            <SiPostgresql color="#4169E1" />,
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
