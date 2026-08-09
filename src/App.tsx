import "./Css/App.css";
import "./Css/Header.css";
import "./Css/Hero.css";
import "./Css/Projects.css";
import "./Css/ProjectCard.css";
import "./Css/About.css";
import "./Css/Footer.css";
import "./Css/Contact.css";

import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header/>

      <main id="home" className="main">
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;