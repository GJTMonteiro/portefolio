import ProjectCard from './ProjectCard';

import {
  SiReact,
  SiTypescript,
  SiCss,
  SiExpress,
  SiPostgresql,
  SiVite,
} from 'react-icons/si';

// Project images
import colorPaletteGenerator from './assets/projects/color-palette-generator.png';
import gtcoin from './assets/projects/gtcoin.png';
import DevTrack from './assets/projects/DevTrack.png';


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
          image={colorPaletteGenerator}
          github="https://github.com/GJTMonteiro/color-palette-generator"
          demo="https://color-palette-generator-zeta-sepia.vercel.app"
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

        {/* =====================================================
            GTCOIN
        ===================================================== */}

        <ProjectCard
          title="GTCoin"
          description="A modern cryptocurrency and Web3 landing page featuring tokenomics, roadmap, NFTs, team members and an FAQ section."
          image={gtcoin}
          github="https://github.com/GJTMonteiro/crypto-website"
          demo="https://crypto-website-omega-beige.vercel.app"
          technologies={[
            <SiReact color="#61DAFB" />,
            <SiTypescript color="#3178C6" />,
            <SiVite color="#646CFF" />,
            <SiCss color="#1572B6" />,
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
