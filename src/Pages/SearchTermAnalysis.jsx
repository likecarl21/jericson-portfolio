import "../styles/case-study.css";

import Header from "../components/case-study/Header";
import ProjectOverview from "../components/case-study/ProjectOverview";
import FinalSummary from "../components/case-study/FinalSummary";
import SearchTermAnalysisSection from "../components/case-study/SearchTermAnalysisSection";


function SearchTermAnalysis() {
  return (
    <section className="case-study">
      <div className="case-study-container">

        <Header />

        <ProjectOverview />

        <SearchTermAnalysisSection />

        <FinalSummary />

      </div>
    </section>
  );
}

export default SearchTermAnalysis;