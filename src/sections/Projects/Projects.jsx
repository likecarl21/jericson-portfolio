import "../../styles/projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section className="projects" id="projects">

    <div className="projects-container">

        <div className="projects-header">

            <p className="section-label">
  TRAINING PROJECT
</p>

<h2>
  PPC Campaign Analysis & Optimization
</h2>

<p className="projects-intro">
  These projects demonstrate how I analyze search term reports,
  evaluate campaign performance, and develop optimization strategies
  using Amazon PPC training scenarios.
</p>

        </div>
        <div className="training-grid">

  <div className="training-left">
<Link
  to="/search-term-analysis"
  className="training-card featured-card"
>

  <h3>
    Search Term Analysis
  </h3>

  <h4>
    Memory Foam Pillow — Training Scenario
  </h4>

  <div className="card-divider"></div>

  <div className="card-section">

    <h5>Project Overview</h5>

    <p>
      A client was worried about wasted spend on some keywords. I went through the search term report and decided what to keep, what to negate, and what to look into first — without killing traffic that could still turn into sales.
    </p>

  </div>

  <div className="card-section">

    <h5>Objective</h5>

    <p>
      Practice making PPC decisions using the available campaign data instead of assumptions.
    </p>

  </div>

  <div className="card-footer">

    <span>
      View Project →
    </span>

  </div>

</Link>
  </div>

  <div className="training-right">
<Link
    to="/campaign-performance-analysis"
    className="project-card"
>

    <h3>
        Campaign Performance Analysis
    </h3>
    <hr className="project-divider" />
    <p>
        See how I read a full campaign — ACOS, CTR, CPC, clicks, and
        conversions together — to figure out what's working, what isn't,
        and what to fix first.
    </p>

    <span className="project-link">
        View Project →
    </span>

</Link>
  </div>

  <div className="training-bottom-left">
<Link
    to="/ppc-optimization-strategy"
    className="project-card"
>

    <h3>
        PPC Optimization Strategy
    </h3>
    <hr className="project-divider" />
    <p>
    See how I turned the campaign findings into a real plan — investigate
    the cause, make careful changes, then check the results before doing
    anything permanent.
    </p>

    <span className="project-link">
        View Project →
    </span>

</Link>
  </div>

  <div className="workflow-card">

    <h3>
        How I Review Search Terms
    </h3>

    <div className="workflow-list">

        <div className="workflow-item">

            <span className="workflow-number">
                01
            </span>

            <p>
                Review the Search Term Report
            </p>

        </div>

        <div className="workflow-item">

            <span className="workflow-number">
                02
            </span>

            <p>
                Identify High-Performing and Low-Performing Search Terms
            </p>

        </div>

        <div className="workflow-item">

            <span className="workflow-number">
                03
            </span>

            <p>
                Find Opportunities to Reduce Wasted Spend
            </p>

        </div>

        <div className="workflow-item">

            <span className="workflow-number">
                04
            </span>

            <p>
                Decide the Best Action Based on the Data
            </p>

        </div>

        <div className="workflow-item workflow-last">

            <span className="workflow-number">
                05
            </span>

            <p>
                Make a Recommendation
            </p>

        </div>

    </div>

</div>

</div>

        

</div> {/* End Projects Container */}

</section>
  );
}

export default Projects;