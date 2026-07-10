function ProjectOverview() {
  return (
    <section className="case-section">

      <h3>Project Overview</h3>

      <div className="project-overview">

        <div className="overview-details">

          <h4>Project Details</h4>

          <div className="summary-card">

            <div className="summary-item">
              <span className="summary-label">Project Type</span>
              <p>Training Scenario</p>
            </div>

            <div className="summary-item">
              <span className="summary-label">Product</span>
              <p>Premium Memory Foam Pillow, $59.99, $25 profit per unit</p>
            </div>

            <div className="summary-item">
              <span className="summary-label">Target ACOS</span>
              <p>35%</p>
            </div>

            <div className="summary-item">
              <span className="summary-label">Client Concern</span>
              <p>
                "Sales are growing, but I'm worried about profitability.
                I noticed we're spending a lot on some keywords."
              </p>
            </div>

          </div>

        </div>
        <div className="overview-report">

          <h4>Search Term Report</h4>

          <p className="case-description">
            These are the search terms from the Auto campaign. I looked at each
            one against the 35% target ACOS and decided what to do with it:
            keep it, negate it, or dig deeper before making a call.
          </p>

          <div className="report-table">

            <div className="report-header">
              <span>Search Term</span>
              <span>ACOS</span>
              <span>Decision</span>
            </div>

            <div className="report-row">
              <span>memory foam pillow</span>
              <span>29.6%</span>
              <span className="badge-scale">Keep</span>
            </div>

            <div className="report-row">
              <span>pillow for neck pain</span>
              <span>29.2%</span>
              <span className="badge-scale">Keep</span>
            </div>

            <div className="report-row">
              <span>hotel pillow</span>
              <span>50%</span>
              <span className="badge-monitor">Investigate</span>
            </div>

            <div className="report-row">
              <span>cooling pillow</span>
              <span>62%</span>
              <span className="badge-monitor">Investigate</span>
            </div>

            <div className="report-row">
              <span>bed pillow</span>
              <span>133%</span>
              <span className="badge-monitor">Investigate</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProjectOverview;