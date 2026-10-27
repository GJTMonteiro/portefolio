import ProjectCard from './ProjectCard';
import { useLanguage } from './LanguageContext';

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
import DevDocs from './assets/projects/DevDocs.png';

const Projects = () => {
  const { language } = useLanguage();

  const translations = {
    pt: {
      title: 'Projetos',
      description:
        'Uma seleção de projetos que desenvolvi para demonstrar o meu interesse pelo desenvolvimento web moderno, com código organizado e experiências intuitivas para os utilizadores.',
      projects: [
        {
          title: 'Gerador de Paletas de Cores',
          description:
            'Uma aplicação web que permite gerar e explorar paletas de cores para design e estilização.',
        },
        {
          title: 'DevTrack',
          description:
            'Uma plataforma full-stack de produtividade para programadores, destinada à gestão de projetos, tarefas, produtividade e fluxos de desenvolvimento.',
        },
        {
          title: 'DevDocs',
          description:
            'Uma plataforma orientada para IA que permite gerir, pesquisar e consultar documentação técnica, com assistência inteligente, gestão de utilizadores, notificações e suporte para RAG/MCP.',
        },
        {
          title: 'GTCoin',
          description:
            'Uma landing page moderna de criptomoedas e Web3, com tokenomics, roteiro do projeto, NFTs, equipa e secção de perguntas frequentes.',
        },
      ],
    },
    en: {
      title: 'Projects',
      description:
        'A selection of projects that I coded to show my interest in modern web development with clean code and intuitive user experiences.',
      projects: [
        {
          title: 'Color Palette Generator',
          description:
            'A web application that generates and explores color palettes for design and styling.',
        },
        {
          title: 'DevTrack',
          description:
            'A full-stack developer productivity platform for managing projects, tasks, productivity and development workflows.',
        },
        {
          title: 'DevDocs',
          description:
            'AI-first platform for managing, searching, and interacting with technical documentation, with intelligent AI assistance, user management, notifications, and RAG/MCP support.',
        },
        {
          title: 'GTCoin',
          description:
            'A modern cryptocurrency and Web3 landing page featuring tokenomics, roadmap, NFTs, team members and an FAQ section.',
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">{t.title}</h2>

      <p className="projects-text">{t.description}</p>

      <div className="projects-grid">
        {/* Color Palette Generator */}
        <ProjectCard
          title={t.projects[0].title}
          description={t.projects[0].description}
          image={colorPaletteGenerator}
          github="https://github.com/GJTMonteiro/color-palette-generator"
          demo="https://color-palette-generator-zeta-sepia.vercel.app"
          technologies={[
            <SiReact color="#61DAFB" />,
            <SiCss color="#1572B6" />,
          ]}
        />

        {/* DevTrack */}
        <ProjectCard
          title={t.projects[1].title}
          description={t.projects[1].description}
          image={DevTrack}
          github="https://github.com/GJTMonteiro/DevTrack"
          demo="https://dev-track-ecru.vercel.app/register"
          technologies={[
            <SiReact color="#61DAFB" />,
            <SiTypescript color="#3178C6" />,
            <SiCss color="#1572B6" />,
            <SiExpress color="#ffffff" />,
            <SiPostgresql color="#4169E1" />,
          ]}
        />

        {/* DevDocs */}
        <ProjectCard
          title={t.projects[2].title}
          description={t.projects[2].description}
          image={DevDocs}
          github="https://github.com/GJTMonteiro/DevDocs"
          demo="https://dev-docs-pi-fawn.vercel.app/dashboard"
          technologies={[
            <SiReact color="#61DAFB" />,
            <SiTypescript color="#3178C6" />,
            <SiVite color="#646CFF" />,
            <SiCss color="#1572B6" />,
            <SiExpress color="#ffffff" />,
            <SiPostgresql color="#4169E1" />,
          ]}
        />

        {/* GTCoin */}
        <ProjectCard
          title={t.projects[3].title}
          description={t.projects[3].description}
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
