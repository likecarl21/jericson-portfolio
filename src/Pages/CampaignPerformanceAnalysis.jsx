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

          <h2>Memory Foam Pillow — Training Scenario</h2>

          <p className="case-intro">
            This is a practice scenario I worked through to sharpen how I read a whole campaign, not just one number. The client felt things "could be doing better" and wanted to know where the money was going. My job was to look at the full picture and figure out what's working, what isn't, and what to do first.
          </p>

        </div>

        <div className="project-overview-grid">

          <div className="overview-card">

            <h3>Project Overview</h3>

            <p>
              I looked at the campaign as a whole instead of reacting to one
              number. The goal was to understand the campaign's health first,
              then decide what to actually do about it.
            </p>

          </div>

          <div className="overview-card">

            <h3>Objective</h3>

            <p>
              Read ACOS, CTR, CPC, clicks, conversion rate, spend, and sales
              together to figure out where the money is going and what to fix
              first — without panicking over one metric.
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
    Before looking at the numbers, here's the product and what the client
    actually asked for. That context decides how I read every metric.
  </p>

</div>
{/* Campaign Overview Table */}

<div className="overview-table">

  <table>

    <tbody>

      <tr>
        <td><strong>Product</strong></td>
        <td>Premium Memory Foam Pillow — $59.99</td>
      </tr>

      <tr>
        <td><strong>Profit Before Ads</strong></td>
        <td>$25 per unit</td>
      </tr>

      <tr>
        <td><strong>Target ACOS</strong></td>
        <td>35% (break-even is around 42%)</td>
      </tr>

      <tr>
        <td><strong>Client Ask</strong></td>
        <td>
          "Things look okay but I feel like we could be doing better.
          Tell me what's working, what isn't, and where my money is going."
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
        <td>38%</td>
        <td>Over target, still profitable</td>
      </tr>

      <tr>
        <td>CTR</td>
        <td>0.34%</td>
        <td>A bit low — worth a look</td>
      </tr>

      <tr>
        <td>CPC</td>
        <td>$1.15</td>
        <td>Reasonable</td>
      </tr>

      <tr>
        <td>Clicks</td>
        <td>410</td>
        <td>Decent traffic</td>
      </tr>

      <tr>
        <td>Orders</td>
        <td>27</td>
        <td>Steady sales</td>
      </tr>

      <tr>
        <td>Conversion Rate</td>
        <td>6.6%</td>
        <td>Fine, room to improve</td>
      </tr>

      <tr>
        <td>Spend</td>
        <td>$472</td>
        <td>Within budget</td>
      </tr>

      <tr>
        <td>Sales</td>
        <td>$1,242</td>
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
      <strong>ACOS is 38%, target is 35%.</strong> That's over target, but break-even is around 42% — so the campaign is still making money, just not as much as we want. That's the difference between "needs work" and "emergency." This one isn't an emergency.
    </div>

    <div className="analysis-item">
      <strong>CTR is 0.34%, which is a little low.</strong> A low CTR usually isn't about the campaign — it's about what people see before they click: the main image, price, title, and star rating. So this points me toward checking the listing, not just the ads.
    </div>

    <div className="analysis-item">
      <strong>Conversion rate is 6.6% — fine, with room to grow.</strong> People who click are buying at a reasonable rate, so the listing is converting okay once they land on it.
    </div>

    <div className="analysis-item">
      <strong>The money is going to clicks that mostly work.</strong> $472 spent, $1,242 in sales. The spend isn't wasted — but the slightly-high ACOS tells me something in there could be tightened, which is worth investigating.
    </div>

    <div className="analysis-item">
      <strong>I read the metrics together, not one at a time.</strong> One number alone can be misleading. The full picture here is: profitable, healthy, but with a couple of things worth a closer look.
    </div>

  </div>

</div>
    {/* Recommendation */}

<div className="recommendation-section">

  <h2>
    My Recommendation
  </h2>

  <p>
    My first move isn't to slash bids to force ACOS down to 35%. Since the campaign is still above break-even, panic-cutting could kill traffic that's actually profitable and leave the client making less money overall.
  </p>

  <p>
    Instead: investigate first. Check the search term report to find what's pushing ACOS up, and look at the listing to see why CTR is low. Then make changes based on what I find, and watch the results over the next week before doing anything drastic.
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

    <span>Reading Metrics Together</span>

    <span>Break-Even Awareness</span>

    <span>Profitability Thinking</span>

    <span>Prioritization</span>

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