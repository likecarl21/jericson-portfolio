function Recommendations() {
  return (
    <section className="case-section">

      <h3>Recommendations</h3>

      <div className="recommendation-board">

        <div className="recommendation-item">

          <div className="recommendation-row">

            <h4>
              Keep Profitable Keywords Running
            </h4>

            <span className="recommendation-badge scale">
              Keep
            </span>

          </div>

          <p>
            Leave the keywords that are already under the target ACOS alone. They're making money and they match the product. No need to touch them.
          </p>

        </div>

        <div className="recommendation-item">

          <div className="recommendation-row">

            <h4>
              Investigate Before Negating
            </h4>

            <span className="recommendation-badge monitor">
              Investigate
            </span>

          </div>

          <p>
            For the high-ACOS terms that are still related to the product, check the bid and match type first. A high ACOS often means the bid is too high, not that the keyword is bad.
          </p>

        </div>

        <div className="recommendation-item">

          <div className="recommendation-row">

            <h4>
              Don't Kill Traffic Too Fast
            </h4>

            <span className="recommendation-badge negative">
              Careful
            </span>

          </div>

          <p>
            Negating a keyword is permanent. Before cutting anything that's still relevant to the product, it's worth lowering the bid or tightening the match type to see if it can be saved.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Recommendations;