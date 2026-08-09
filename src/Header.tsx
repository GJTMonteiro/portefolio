import logo from "./assets/profile.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo">
          <img src={logo} alt="Logo" />
        </a>

        <nav className="navbar">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;