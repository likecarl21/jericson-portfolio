function SearchTermReport() {
  return (
    <section className="case-section">

      <h3>Search Term Report</h3>

      <p className="case-description">
  The table below contains the search terms I reviewed during this training scenario. I evaluated each keyword using campaign performance, shopper intent, and product relevance before deciding whether it should be scaled, monitored, or added as a negative keyword.
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

      

    </section>
  );
}

export default SearchTermReport;