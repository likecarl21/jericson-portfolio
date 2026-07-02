import Recommendations from "./Recommendations";
import KeyLearnings from "./KeyLearnings";
import Skills from "./Skills";
import { Link } from "react-router-dom";
function FinalSummary() {
  return (
    <section className="case-section">

      <h3>Final Summary</h3>

      <div className="final-summary">

        <div className="summary-panel">
          <Recommendations />
        </div>

        <div className="summary-panel">
          <KeyLearnings />
        </div>

        <div className="summary-panel">
          <Skills />
        </div>

      </div>
      <div className="continue-section">

        <p>
          Ready to see how I evaluated overall campaign performance?
        </p>

        <Link
          to="/campaign-performance-analysis"
          className="continue-button"
        >
          Continue to Campaign Performance Analysis →
        </Link>

      </div>
    </section>
  );
  
}

export default FinalSummary;