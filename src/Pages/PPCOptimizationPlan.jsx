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
            Memory Foam Pillow, Training Scenario
          </h2>

          <p className="case-intro">

            This is the next step after the campaign analysis. Once I've read
            the numbers and know what's working, this page is my actual plan:
            what I'd do first, what I'd do next, and how I'd check if it
            worked, without making changes I can't undo.

          </p>

        </div>

        <div className="project-overview-grid">

          <div className="overview-card">

            <h3>
              Project Overview
            </h3>

            <p>

              This follows my campaign analysis. The plan is built around one
              idea: the campaign is profitable but not perfect, so I fix what's
              worth fixing without breaking what already works.

            </p>

          </div>

          <div className="overview-card">

            <h3>
              Objective
            </h3>

            <p>

              Turn the campaign findings into a clear, step-by-step plan:
              investigate the real cause, make careful changes, then check the
              results before doing anything permanent.

            </p>

          </div>

        </div>
        {/* Product Information */}

        <div className="table-heading">

          <h2>
            Product Information
          </h2>

          <p>
            Same product and numbers as the campaign analysis, so the plan connects
            directly to what I found there.
          </p>

        </div>

        <div className="overview-table">

          <table>

            <tbody>

              <tr>
                <td>Product</td>
                <td>Premium Memory Foam Pillow</td>
              </tr>

              <tr>
                <td>Selling Price</td>
                <td>$59.99</td>
              </tr>

              <tr>
                <td>Profit Before Ads</td>
                <td>$25.00</td>
              </tr>

              <tr>
                <td>Target ACOS</td>
                <td>35% (break-even around 42%)</td>
              </tr>

              <tr>
                <td>Current ACOS</td>
                <td>38%, over target, still profitable</td>
              </tr>

            </tbody>

          </table>

        </div>
        {/* Campaign Situation */}

        <div className="table-heading">

          <h2>
            What the Analysis Showed
          </h2>

          <p>
            From the campaign analysis, here's what I'm working with before making
            any changes. The campaign is profitable, but two things stood out worth
            looking into.
          </p>

        </div>
        {/* Findings Table */}

        <div className="performance-table">

          <table>

            <thead>

              <tr>

                <th>Finding</th>

                <th>What It Means</th>

              </tr>

            </thead>

            <tbody>

              <tr>
                <td>ACOS is 38% vs 35% target</td>
                <td>
                  Over target but still above break-even, so it's profitable, just
                  not as efficient as it could be.
                </td>
              </tr>

              <tr>
                <td>CTR is low at 0.34%</td>
                <td>
                  Points to the listing (image, price, title, rating), not the
                  campaign itself.
                </td>
              </tr>

              <tr>
                <td>Conversion rate is 6.6%</td>
                <td>
                  Fine. People who click are buying at a reasonable rate.
                </td>
              </tr>

              <tr>
                <td>Spend is $472 for $1,242 in sales</td>
                <td>
                  Money isn't being wasted, but something in the mix is pushing ACOS
                  up and is worth finding.
                </td>
              </tr>

            </tbody>

          </table>

        </div>
        {/* Optimization Plan */}

        <div className="table-heading">

          <h2>
            My Plan
          </h2>

          <p>
            Based on what I found, here's the order I'd actually work in. The main
            idea: don't break what's working while fixing what isn't.
          </p>

        </div>

        <div className="performance-table">

          <table>

            <thead>

              <tr>

                <th>Step</th>

                <th>What I'd Do</th>

                <th>Why</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>1. Investigate</td>

                <td>
                  Check the search term report to find what's pushing ACOS above
                  target, and look at the listing to see why CTR is low.
                </td>

                <td>
                  I don't want to change anything until I know the real cause. Guessing
                  wastes money.
                </td>

              </tr>

              <tr>

                <td>2. Act</td>

                <td>
                  Based on what I find: lower a bid, tighten a match type, negate a
                  truly irrelevant term, or flag the listing for the client to improve.
                </td>

                <td>
                  Fix the actual problem instead of just forcing the ACOS number down.
                </td>

              </tr>

              <tr>

                <td>3. Observe</td>

                <td>
                  Watch the results over the next week and compare against where we
                  started, then adjust again if needed.
                </td>

                <td>
                  One change isn't the end. I want to see if it actually helped before
                  doing more.
                </td>

              </tr>

            </tbody>

          </table>

        </div>
        {/* Priority Order */}

        <div className="table-heading">

          <h2>
            Why Not Just Cut ACOS?
          </h2>

          <p>
            The obvious move is to slash bids to hit the 35% target. Here's why that's
            the wrong first step for this campaign.
          </p>

        </div>

        <div className="performance-table">

          <table>

            <thead>

              <tr>

                <th>The Tempting Move</th>

                <th>Why I'd Hold Off</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Slash bids to force ACOS to 35%</td>

                <td>
                  At 38% the campaign is still above break-even, so it's making money.
                  Cutting bids hard could lose clicks and orders that are actually
                  profitable, hitting the ACOS target but making less money overall.
                </td>

              </tr>

              <tr>

                <td>Negate every high-ACOS term</td>

                <td>
                  Some high-ACOS terms are still relevant and could work with a lower
                  bid. Negating is permanent, so I'd investigate before cutting.
                </td>

              </tr>

              <tr>

                <td>Blame the campaign for low CTR</td>

                <td>
                  Low CTR usually comes from the listing, not the ads. Throwing more
                  bid money at it won't fix a weak image or price.
                </td>

              </tr>

            </tbody>

          </table>

        </div>
        {/* Optimization Recommendation */}

        <div className="recommendation-section">

          <h2>
            My Recommendation
          </h2>

          <p>

            The campaign is profitable and healthy. It just isn't hitting the target
            yet. So my plan isn't to panic and cut. It's to investigate what's pushing
            ACOS up, check why CTR is low, make careful changes, and watch the results.

          </p>

          <p>

            That protects the sales the client already has while giving us room to
            improve. Steady beats drastic when the campaign is already making money.

          </p>

        </div>
        {/* Skills Demonstrated */}

        <div className="skills-section">

          <h2>
            Skills Demonstrated
          </h2>

          <div className="skills-grid">

            <span>Campaign Performance Analysis</span>

            <span>Profitability Thinking</span>

            <span>Break-Even Awareness</span>

            <span>Data Interpretation</span>

            <span>Prioritization</span>

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