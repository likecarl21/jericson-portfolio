import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import PPCOptimizationPlan from "./Pages/PPCOptimizationPlan";
import ScrollToTop from "./components/ScrollToTop";
import SearchTermAnalysis from "./Pages/SearchTermAnalysis";
import CampaignPerformanceAnalysis from "./Pages/CampaignPerformanceAnalysis";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/search-term-analysis"
          element={<SearchTermAnalysis />}
        />

        <Route
          path="/campaign-performance-analysis"
          element={<CampaignPerformanceAnalysis />}
        />

        <Route
          path="/ppc-optimization-strategy"
          element={<PPCOptimizationPlan />}
        />
      </Routes>
    </>
  );
}

export default App;