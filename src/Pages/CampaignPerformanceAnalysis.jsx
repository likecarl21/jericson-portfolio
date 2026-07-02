import "../styles/CampaignPerformanceAnalysis.css";
import { Link, useNavigate } from "react-router-dom";

function CampaignPerformanceAnalysis() {
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
    <section className="case-study-page">

      <div className="case-container">
      <div className="back-button-wrapper">

      <button
  className="back-button"
  onClick={handleBack}
>
  ← Back to Training Projects
</button>

    </div>
        <div className="case-hero">

          <h1>Campaign Performance Analysis</h1>

          <h2>Premium Collagen Supplement Case Study</h2>

          <p className="case-intro">
            This training project demonstrates how I reviewed campaign
            performance before making optimization recommendations using
            multiple PPC metrics and business context.
          </p>

        </div>

        <div className="project-overview-grid">

          <div className="overview-card">

            <h3>Project Overview</h3>

            <p>
              This training project focused on reviewing campaign performance
              using key PPC metrics to understand how the campaign was performing
              before making optimization recommendations.
            </p>

          </div>

          <div className="overview-card">

            <h3>Objective</h3>

            <p>
              Evaluate campaign performance by reviewing ACOS, CTR, CPC,
              clicks, conversions, spend, and sales while considering
              the overall business objective before deciding on the next
              optimization step.
            </p>

          </div>

        </div>
      {/* Campaign Performance Summary */}

<div className="campaign-summary">

</div>
    {/* Campaign Overview */}

<div className="table-heading">

  <h2>
    Campaign Overview
  </h2>

  <p>
    Before evaluating campaign metrics, I reviewed the campaign objective
    and overall context to better understand how performance should be
    measured during this training scenario.
  </p>

</div>
{/* Campaign Overview Table */}

<div className="overview-table">

  <table>

    <tbody>

      <tr>
        <td><strong>Campaign</strong></td>
        <td>Premium Collagen Supplement</td>
      </tr>

      <tr>
        <td><strong>Campaign Type</strong></td>
        <td>Sponsored Products</td>
      </tr>

      <tr>
        <td><strong>Scenario</strong></td>
        <td>Training Project</td>
      </tr>

      <tr>
        <td><strong>Primary Goal</strong></td>
        <td>
          Maintain profitable sales while improving conversion efficiency.
        </td>
      </tr>

    </tbody>

  </table>

</div>

{/* Performance Metrics */}

<div className="table-heading">

  <h2>
    Performance Metrics
  </h2>

  <p>
    After understanding the campaign context, I evaluated each PPC metric
    to determine overall campaign health and identify optimization
    opportunities.
  </p>

</div>
{/* Campaign Performance Table */}

<div className="performance-table">

  <table>

    <thead>

      <tr>

        <th>Metric</th>

        <th>Result</th>

        <th>My Evaluation</th>

      </tr>

    </thead>

    <tbody>

      <tr>
        <td>ACOS</td>
        <td>27%</td>
        <td>Acceptable</td>
      </tr>

      <tr>
        <td>CTR</td>
        <td>2.8%</td>
        <td>Strong</td>
      </tr>

      <tr>
        <td>CPC</td>
        <td>$0.82</td>
        <td>Reasonable</td>
      </tr>

      <tr>
        <td>Clicks</td>
        <td>352</td>
        <td>Good Traffic</td>
      </tr>

      <tr>
        <td>Orders</td>
        <td>29</td>
        <td>Healthy Sales</td>
      </tr>

      <tr>
        <td>Conversion Rate</td>
        <td>8.2%</td>
        <td>Needs Improvement</td>
      </tr>

      <tr>
        <td>Spend</td>
        <td>$288</td>
        <td>Within Budget</td>
      </tr>

      <tr>
        <td>Sales</td>
        <td>$1,065</td>
        <td>Profitable</td>
      </tr>

    </tbody>

  </table>

</div>
    <div className="analysis-section">

  <h2>
    My Analysis
  </h2>

  <div className="analysis-list">

    <div className="analysis-item">
      ✓ Reviewed campaign performance as a whole.
    </div>

    <div className="analysis-item">
      ✓ Compared ACOS, CTR, CPC, clicks, conversions, and sales.
    </div>

    <div className="analysis-item">
      ✓ Considered the business objective before making recommendations.
    </div>

    <div className="analysis-item">
      ✓ Looked for opportunities to improve efficiency without reducing sales.
    </div>

    <div className="analysis-item">
      ✓ Avoided making decisions based on one metric alone.
    </div>

  </div>

</div>
    {/* Recommendation */}

<div className="recommendation-section">

  <h2>
    Optimization Recommendation
  </h2>

  <p>

    Based on the available campaign data, I recommended
    focusing on improving conversion rate while maintaining
    profitable traffic.

  </p>

  <p>

    The recommendation was supported by multiple campaign
    metrics rather than relying on a single performance
    indicator.

  </p>

</div>
      </div>
    {/* Skills Demonstrated */}

<div className="skills-section">

  <h2>
    Skills Demonstrated
  </h2>

  <div className="skills-grid">

    <span>Campaign Analysis</span>

    <span>Performance Evaluation</span>

    <span>Business Thinking</span>

    <span>PPC Reasoning</span>

    <span>Optimization Strategy</span>

  </div>

</div>
{/* Continue */}

<div className="continue-section">

  <p>
    Ready to see how I used campaign data to make optimization decisions?
  </p>

  <Link
  to="/ppc-optimization-strategy"
  className="continue-button"
>
  Continue to PPC Optimization Strategy →
</Link>

</div>
    </section>
    
  );
}

export default CampaignPerformanceAnalysis;