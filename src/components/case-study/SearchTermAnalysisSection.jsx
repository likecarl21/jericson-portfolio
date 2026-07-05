function SearchTermAnalysisSection() {
  return (
    <section className="case-section">

      <h3>Search Term Analysis</h3>
      <p className="analysis-intro">
  Here's how I thought through each search term. The client was worried
  about wasted spend, so the goal was to cut what's clearly not working
  without killing traffic that could still turn into sales.
</p>
      <div className="analysis-overview">
      <div className="analysis-timeline">

        <div className="analysis-step">

          <div className="analysis-dot"></div>

          <div className="analysis-content">

            <h4>
  Memory Foam Pillow
</h4>

<div className="analysis-meta">

  <span className="analysis-badge scale">
    Keep
  </span>

  <div className="analysis-metrics">

    <span>29.6% ACOS</span>

  </div>

</div>

<p>
  This is the main product keyword, and at 29.6% ACOS it's under the 35% target. It's making money and it's exactly what the product is. I'd keep it running and leave it alone.
</p>

          </div>

        </div>

        <div className="analysis-step">

          <div className="analysis-dot"></div>

          <div className="analysis-content">

            <h4>Pillow for Neck Pain</h4>

            <div className="analysis-meta">
              <span className="analysis-badge scale">Keep</span>
              <div className="analysis-metrics">
                <span>29.2% ACOS</span>
              </div>
            </div>

            <p>
              At 29.2% ACOS, this one is also under target and profitable. It matches a real reason people buy a memory foam pillow, so I'd keep it. No change needed.
            </p>

          </div>

        </div>

        <div className="analysis-step">

          <div className="analysis-dot"></div>

          <div className="analysis-content">

            <h4>Hotel Pillow</h4>

            <div className="analysis-meta">
              <span className="analysis-badge monitor">Investigate</span>
              <div className="analysis-metrics">
                <span>50% ACOS</span>
              </div>
            </div>

            <p>
              50% ACOS is over target, so it's tempting to cut it. But "hotel pillow" is a real thing people search when they want that soft, plush feel — it might still fit the product. Before negating, I'd check if it's converting at all and whether a lower bid brings the ACOS down. Investigate first, then decide.
            </p>

          </div>

        </div>

        <div className="analysis-step">

          <div className="analysis-dot"></div>

          <div className="analysis-content">

            <h4>Cooling Pillow</h4>

            <div className="analysis-meta">
              <span className="analysis-badge monitor">Investigate</span>
              <div className="analysis-metrics">
                <span>62% ACOS</span>
              </div>
            </div>

            <p>
              At 62% ACOS this is losing money right now. But a memory foam pillow could genuinely be a cooling pillow if it has that feature. The high ACOS might just mean the bid is too high, not that the keyword is bad. I'd look closer before killing it.
            </p>

          </div>

        </div>

        <div className="analysis-step">

          <div className="analysis-dot"></div>

          <div className="analysis-content">

            <h4>Bed Pillow</h4>

            <div className="analysis-meta">
              <span className="analysis-badge monitor">Investigate</span>
              <div className="analysis-metrics">
                <span>133% ACOS</span>
              </div>
            </div>

            <p>
              133% ACOS looks like an obvious negative. But here's the thing — "bed pillow" is broad, not irrelevant. A memory foam pillow IS a bed pillow. The problem is probably that it's too general and pulling the wrong shoppers, not that it's the wrong product. Instead of negating outright, I'd try it as a lower bid or move it to a tighter match type first. Killing it completely could lose sales that are actually there.
            </p>

          </div>

        </div>

      </div>
      
      <aside className="overall-assessment">

  <div className="report-note">

    <h4>Overall Assessment</h4>

    <p>
      The two profitable keywords were easy — keep them. The real thinking
      was on the three high-ACOS terms. The lazy move is to negate anything
      over target, but all three are still related to a memory foam pillow.
    </p>

    <p>
      So instead of killing them, I'd investigate first — check if the bid
      is too high or the match type is too broad before spending any money
      cutting traffic that might actually be worth keeping.
    </p>

    <div className="decision-summary">

      <div className="decision-item">
        <span className="badge-scale">Keep</span>
        <span>2 Keywords</span>
      </div>

      <div className="decision-item">
        <span className="badge-monitor">Investigate</span>
        <span>3 Keywords</span>
      </div>

    </div>

  </div>

</aside>
     </div> 
    </section>
  );
}

export default SearchTermAnalysisSection;