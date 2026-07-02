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
      Junior Amazon PPC Specialist
    </p>

    <p className="hero-introduction">
      I spent more than 4 years helping customers solve problems in technical support and customer service roles. That experience taught me how to analyze situations, find the root cause of issues, and solve problems step by step.
    </p>

    <p className="hero-introduction">
      Now, I'm applying those same skills to Amazon PPC through Search Term Analysis, Campaign Performance Analysis, and optimization projects.
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