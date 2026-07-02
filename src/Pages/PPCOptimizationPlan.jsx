import "../styles/PPCOptimizationPlan.css";
import { useNavigate } from "react-router-dom";

function PPCOptimizationPlan() {

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
     const handleExperience = () => {

  navigate("/");

  setTimeout(() => {

    const section = document.getElementById("experience");

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

          <h1>
            PPC Optimization Strategy
          </h1>

          <h2>
            Premium Collagen Supplement Case Study
          </h2>

          <p className="case-intro">

            This project demonstrates how I analyze Amazon PPC campaign performance and develop an
  optimization strategy using campaign reports and search term data. The recommendations are
  based on Amazon PPC training scenarios and focus on improving profitability while supporting
  the client's business goals.

          </p>

        </div>

        <div className="project-overview-grid">

          <div className="overview-card">

            <h3>
              Project Overview
            </h3>

            <p>

              This training project focused on identifying optimization
              opportunities after reviewing campaign performance and
              search term data. The goal was to recommend practical
              actions that improve efficiency while supporting the
              client's overall business objectives.

            </p>

          </div>

          <div className="overview-card">

            <h3>
              Objective
            </h3>

            <p>

              Analyze campaign performance, identify optimization
              opportunities, reduce wasted ad spend, and recommend
              actions that improve overall account performance while
              aligning with the client's business objectives.

            </p>

          </div>

        </div>
        {/* Product Information */}

<div className="table-heading">

  <h2>
    Product Information
  </h2>

  <p>
    Before planning optimization actions, I reviewed the product's
    business goals and advertising targets to understand what success
    should look like.
  </p>

</div>

<div className="overview-table">

  <table>

    <tbody>

      <tr>
        <td>Product</td>
        <td>Premium Collagen Supplement</td>
      </tr>

      <tr>
        <td>Selling Price</td>
        <td>$39.99</td>
      </tr>

      <tr>
        <td>Profit Before Ads</td>
        <td>$18.00</td>
      </tr>

      <tr>
        <td>Target ACOS</td>
        <td>35%</td>
      </tr>

      <tr>
        <td>Goal</td>
        <td>Improve Profitability</td>
      </tr>

    </tbody>

  </table>

</div>
        {/* Campaign Situation */}

<div className="table-heading">

  <h2>
    Campaign Situation
  </h2>

  <p>
    Four campaigns were active during this training scenario. Each campaign
    served a different purpose within the account, so optimization decisions
    were made by considering how they worked together rather than evaluating
    individual campaigns in isolation.
  </p>

</div>
        {/* Campaign Overview Table */}

<div className="performance-table">

  <table>

    <thead>

      <tr>

        <th>Campaign</th>

        <th>Performance</th>

        <th>Observation</th>

      </tr>

    </thead>

    <tbody>

      <tr>
        <td>Auto</td>
        <td>Moderate</td>
        <td>
          Good for discovering new search terms but generated higher ACOS.
        </td>
      </tr>

      <tr>
        <td>Manual Broad</td>
        <td>Moderate</td>
        <td>
          Generated sales but was less efficient than Phrase and Exact campaigns.
        </td>
      </tr>

      <tr>
        <td>Manual Phrase</td>
        <td>Strong</td>
        <td>
          Produced consistent conversions while maintaining lower ACOS.
        </td>
      </tr>

      <tr>
        <td>Manual Exact</td>
        <td>Best Performer</td>
        <td>
          Delivered the highest conversion rate and strongest profitability.
        </td>
      </tr>

    </tbody>

  </table>

</div>
            {/* Optimization Plan */}

<div className="table-heading">

  <h2>
    Optimization Plan
  </h2>

  <p>
    Based on the campaign review, I identified several optimization actions
    that could improve overall account performance while supporting the
    client's profitability goals.
  </p>

</div>

<div className="performance-table">

  <table>

    <thead>

      <tr>

        <th>Optimization Action</th>

        <th>Reason</th>

        <th>Expected Impact</th>

      </tr>

    </thead>

    <tbody>

      <tr>

        <td>Harvest High-Performing Search Terms</td>

        <td>
          Proven search terms generally perform better in Manual Exact campaigns.
        </td>

        <td>
          Higher conversion rate and stronger campaign efficiency.
        </td>

      </tr>

      <tr>

        <td>Investigate Weak Search Terms</td>

        <td>
          Determine whether poor performance is caused by shopper intent,
          pricing, or listing quality.
        </td>

        <td>
          Better optimization decisions before making permanent changes.
        </td>

      </tr>

      <tr>

        <td>Negate Irrelevant Search Terms</td>

        <td>
          Remove search terms that generate spend without meaningful results.
        </td>

        <td>
          Lower wasted advertising cost.
        </td>

      </tr>

      <tr>

        <td>Reallocate Campaign Budget</td>

        <td>
          Shift budget toward stronger-performing campaigns when appropriate.
        </td>

        <td>
          Better return on ad spend.
        </td>

      </tr>

      <tr>

        <td>Continue Monitoring</td>

        <td>
          Avoid unnecessary optimization while campaigns remain stable.
        </td>

        <td>
          Maintain consistent campaign performance.
        </td>

      </tr>

    </tbody>

  </table>

</div>
    {/* Priority Order */}

<div className="table-heading">

  <h2>
    Priority Order
  </h2>

  <p>
    Not every optimization should be completed at the same time. I prioritized
    each action based on its potential business impact and the amount of wasted
    advertising spend it could reduce.
  </p>

</div>

<div className="performance-table">

  <table>

    <thead>

      <tr>

        <th>Priority</th>

        <th>Action</th>

        <th>Reason</th>

      </tr>

    </thead>

    <tbody>

      <tr>

        <td>High</td>

        <td>Remove Obvious Wasted Spend</td>

        <td>
          Prevent unnecessary advertising costs before making other adjustments.
        </td>

      </tr>

      <tr>

        <td>High</td>

        <td>Harvest Proven Search Terms</td>

        <td>
          Strengthen high-performing campaigns with proven converting search terms.
        </td>

      </tr>

      <tr>

        <td>Medium</td>

        <td>Investigate Weak Performers</td>

        <td>
          Confirm whether low performance is caused by shopper intent or listing quality.
        </td>

      </tr>

      <tr>

        <td>Medium</td>

        <td>Review Campaign Budget Allocation</td>

        <td>
          Shift budget only when supported by campaign performance.
        </td>

      </tr>

      <tr>

        <td>Low</td>

        <td>Continue Monitoring Stable Campaigns</td>

        <td>
          Avoid unnecessary changes while campaigns continue performing well.
        </td>

      </tr>

    </tbody>

  </table>

</div>
    {/* Optimization Recommendation */}

<div className="recommendation-section">

  <h2>
    Optimization Recommendation
  </h2>

  <p>

    Based on the available campaign data, I would maintain the current
    campaign structure while focusing on reducing wasted ad spend and
    strengthening high-performing campaigns.

  </p>

  <p>

    Search terms that consistently convert should continue to be leveraged
    through Manual Exact campaigns, while weaker search terms should be
    investigated before making permanent optimization decisions. Budget
    adjustments should only be made when they support the client's
    business objectives and campaign limitations.

  </p>

</div>
    {/* Skills Demonstrated */}

<div className="skills-section">

  <h2>
    Skills Demonstrated
  </h2>

  <div className="skills-grid">

    <span>Campaign Performance Analysis</span>

    <span>Search Term Analysis</span>

    <span>PPC Optimization Strategy</span>

    <span>Business Goal Alignment</span>

    <span>Budget Allocation Analysis</span>

    <span>Shopper Intent Analysis</span>

    <span>Profitability Thinking</span>

    <span>Campaign Structure Analysis</span>

    <span>Data Interpretation</span>

    <span>Client Recommendation</span>

  </div>

</div>

{/* Continue */}

<div className="continue-section">

  <p>
    Ready to learn more about my professional background?
  </p>

  <button
  className="continue-button"
  onClick={handleExperience}
>
  View Professional Experience →
</button>

</div>
      </div>

    </section>

  );

}

export default PPCOptimizationPlan;