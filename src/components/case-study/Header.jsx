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
        This is a practice scenario I worked through to sharpen my Amazon PPC decision-making. A client selling a premium memory foam pillow was worried about spending too much on some keywords. My job was to look at the search term report and decide what to do with each one — without killing traffic that could still be worth keeping.
      </p>

    </header>
  );
}

export default Header;