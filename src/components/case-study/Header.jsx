import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

const handleBack = () => {
  navigate("/");

  setTimeout(() => {
    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, 100);
};
  return (
    <header className="case-study-header">
        <button
  className="back-link"
  onClick={handleBack}
>
  ← Back to Projects
</button>
      <p className="section-label">
        PPC CASE STUDY
      </p>

      <h1>
        Search Term Analysis
      </h1>

      <span className="project-status">
        Training Scenario
      </span>

      <p className="case-intro">
        This project is based on a training scenario completed to practice Amazon PPC search term analysis. The recommendations reflect my own evaluation of the available campaign data and shopper intent.
      </p>

    </header>
  );
}

export default Header;