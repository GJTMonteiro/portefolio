import { useLanguage } from './LanguageContext';

const About = () => {
  const { language } = useLanguage();

  const translations = {
    pt: {
      title: 'Sobre Mim',
      paragraphs: [
        'Comecei recentemente a aprender React, TypeScript e Next.js. Ainda estou no início do meu percurso na programação, mas estou disposto a dedicar-me para evoluir todos os dias e, no futuro, conseguir uma oportunidade profissional nesta área que tanto me interessa.',
        'Tenho 22 anos, sou português e vivo em Portugal. Nos meus tempos livres, gosto de jogar videojogos, ver anime e filmes, manter a minha rotina de treinos e acompanhar o mundo das criptomoedas.',
        'O meu objetivo é tornar-me Programador Front-End e conhecer pessoas que partilhem os mesmos objetivos. Quero criar experiências digitais de qualidade, com interfaces intuitivas, acessíveis e código bem estruturado.',
      ],
    },
    en: {
      title: 'About Me',
      paragraphs: [
        "I recently started learning React, TypeScript and Next.js. I'm still at the beginning of my programming journey, but I'm committed to improving every day and eventually securing a professional opportunity in a field I'm passionate about.",
        "I'm 22, Portuguese and based in Portugal. In my free time, I enjoy gaming, watching anime and movies, keeping up with my workouts, and following the world of cryptocurrency.",
        'My goal is to become a Front-End Developer and connect with people who share similar ambitions. I want to create high-quality digital experiences with intuitive interfaces, accessibility and clean code.',
      ],
    },
  };

  const t = translations[language];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">{t.title}</h2>

        {t.paragraphs.map((paragraph, index) => (
          <p className="about-text" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
