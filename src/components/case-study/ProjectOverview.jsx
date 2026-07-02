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
              <span className="summary-label">Objective</span>
              <p>
                Review a Search Term Report and decide which keywords should
                be scaled, monitored, or added as negative keywords.
              </p>
            </div>

            <div className="summary-item">
              <span className="summary-label">Campaign Type</span>
              <p>Amazon Sponsored Products</p>
            </div>

            <div className="summary-item">
              <span className="summary-label">Decision Focus</span>
              <p>Scale • Monitor • Negative Keywords</p>
            </div>

          </div>

                </div>
                <div className="overview-report">

          <h4>Search Term Report</h4>

          <p className="case-description">
            The table below contains the search terms I reviewed during this
            training scenario. I evaluated each keyword using campaign
            performance, shopper intent, and product relevance before deciding
            whether it should be scaled, monitored, or added as a negative
            keyword.
          </p>

          <div className="report-table">

            <div className="report-header">
              <span>Search Term</span>
              <span>Clicks</span>
              <span>Orders</span>
              <span>ACOS</span>
              <span>Decision</span>
            </div>

            <div className="report-row">
              <span>hydrolyzed collagen peptides</span>
              <span>82</span>
              <span>12</span>
              <span>21%</span>
              <span className="badge-scale">Scale</span>
            </div>

            <div className="report-row">
              <span>marine collagen supplement</span>
              <span>46</span>
              <span>7</span>
              <span>18%</span>
              <span className="badge-scale">Scale</span>
            </div>

            <div className="report-row">
              <span>collagen powder</span>
              <span>95</span>
              <span>8</span>
              <span>33%</span>
              <span className="badge-monitor">Monitor</span>
            </div>
                        <div className="report-row">
              <span>hair vitamins</span>
              <span>58</span>
              <span>0</span>
              <span>92%</span>
              <span className="badge-negative">Negative</span>
            </div>

            <div className="report-row">
              <span>protein powder</span>
              <span>71</span>
              <span>1</span>
              <span>81%</span>
              <span className="badge-negative">Negative</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProjectOverview;