function SearchTermAnalysisSection() {
  return (
    <section className="case-section">

      <h3>Search Term Analysis</h3>
      <p className="analysis-intro">
  I reviewed the Search Term Report and evaluated each keyword using
  campaign performance, shopper intent, and product relevance to
  determine the best optimization action.
</p>
      <div className="analysis-overview">
      <div className="analysis-timeline">

        <div className="analysis-step">

          <div className="analysis-dot"></div>

          <div className="analysis-content">

            <h4>
  Hydrolyzed Collagen Peptides
</h4>

<div className="analysis-meta">

  <span className="analysis-badge scale">
    Scale
  </span>

  <div className="analysis-metrics">

    <span>82 Clicks</span>

    <span>12 Orders</span>

    <span>21% ACOS</span>

  </div>

</div>

<p>
  This search term generated 82 clicks, 12 orders, and maintained a 21% ACOS. It closely matches the product and produced consistent conversions. Based on the available data, I would continue scaling this keyword because it is delivering efficient results.
</p>

          </div>

        </div>

        <div className="analysis-step">

          <div className="analysis-dot"></div>

          <div className="analysis-content">

            <h4>Marine Collagen Supplement</h4>

            <p>
              This keyword achieved 7 orders with the lowest ACOS in the report at 18%. The search intent is highly relevant to the product, making it another strong performer that deserves additional investment.
            </p>

          </div>

        </div>

        <div className="analysis-step">

          <div className="analysis-dot"></div>

          <div className="analysis-content">

            <h4>Collagen Powder</h4>

            <p>
              Although this search term received the highest number of clicks, its ACOS was higher than the strongest performers. I would continue monitoring this keyword before making a larger optimization decision because additional data may provide a clearer trend.
            </p>

          </div>

        </div>

        <div className="analysis-step">

          <div className="analysis-dot"></div>

          <div className="analysis-content">

            <h4>Hair Vitamins</h4>

            <p>
              This keyword generated clicks but did not produce any orders, resulting in a 92% ACOS. It also has weak relevance to the advertised product, so I would recommend adding it as a negative keyword to reduce wasted ad spend.
            </p>

          </div>

        </div>

        <div className="analysis-step">

          <div className="analysis-dot"></div>

          <div className="analysis-content">

            <h4>Protein Powder</h4>

            <p>
              This search term is too broad for the product and produced only one order while reaching an 81% ACOS. Based on its performance and relevance, I would also recommend adding it as a negative keyword.
            </p>

          </div>

        </div>

      </div>
      
      <aside className="overall-assessment">

  <div className="report-note">

    <h4>Overall Assessment</h4>

    <p>
      After reviewing the entire Search Term Report, I found that the strongest
      decisions came from looking at multiple factors together rather than
      relying on a single metric.
    </p>

    <p>
      Campaign performance, shopper intent, and product relevance all played an
      important role in deciding whether a keyword should be scaled,
      monitored, or added as a negative keyword.
    </p>

    <div className="decision-summary">

      <div className="decision-item">
        <span className="badge-scale">Scale</span>
        <span>2 Keywords</span>
      </div>

      <div className="decision-item">
        <span className="badge-monitor">Monitor</span>
        <span>1 Keyword</span>
      </div>

      <div className="decision-item">
        <span className="badge-negative">Negative</span>
        <span>2 Keywords</span>
      </div>

    </div>

  </div>

</aside>
     </div> 
    </section>
  );
}

export default SearchTermAnalysisSection;