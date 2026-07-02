function Recommendations() {
  return (
    <section className="case-section">

      <h3>Recommendations</h3>

      <div className="recommendation-board">

        <div className="recommendation-item">

          <div className="recommendation-row">

            <h4>
              Scale High-Performing Keywords
            </h4>

            <span className="recommendation-badge scale">
              Scale
            </span>

          </div>

          <p>
            Continue investing in search terms that are highly relevant, generate consistent orders, and maintain an efficient ACOS.
          </p>

        </div>

        <div className="recommendation-item">

          <div className="recommendation-row">

            <h4>
              Monitor Developing Keywords
            </h4>

            <span className="recommendation-badge monitor">
              Monitor
            </span>

          </div>

          <p>
            Keep collecting additional data before making larger optimization decisions. A longer trend provides more confidence than a single snapshot.
          </p>

        </div>

        <div className="recommendation-item">

          <div className="recommendation-row">

            <h4>
              Add Irrelevant Keywords as Negative
            </h4>

            <span className="recommendation-badge negative">
              Negative
            </span>

          </div>

          <p>
            Exclude search terms with poor relevance, low conversions, and high advertising costs to reduce wasted ad spend.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Recommendations;