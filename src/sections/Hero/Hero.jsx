import profile from "../../assets/images/profile.png";
import "../../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">

  <div className="hero-left">

    <p className="hero-greeting">
      HELLO, I'M
    </p>

    <h1>
      Jericson Pajotal
    </h1>

    <p className="hero-tag">
      Amazon PPC Virtual Assistant
    </p>

    <p className="hero-introduction">
      For 4+ years, I worked in technical support and customer service. Every day was about figuring out what actually went wrong for someone, and fixing it, not just following a script.
    </p>

    <p className="hero-introduction">
      Now I bring that same problem-solving into Amazon PPC. I go through search terms, campaign data, and performance numbers to figure out what's working and what's wasting money.
    </p>

    <div className="hero-buttons">

  <a
    href="#projects"
    className="primary-btn"
  >
    View My Projects
  </a>

  <a
    href="#contact"
    className="secondary-btn"
  >
    Let's Connect
  </a>

</div>

  </div>

  <div className="hero-right">

    <div className="portrait-card">

        <div className="portrait-glow-back"></div>

        <div className="portrait-glow-front"></div>

        <img
    src={profile}
    alt="Jericson Pajotal"
    className="hero-image"
/>

    </div>

</div>

</section>
  );
}

export default Hero;