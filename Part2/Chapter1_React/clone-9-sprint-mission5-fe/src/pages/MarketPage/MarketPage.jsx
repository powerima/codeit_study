/*
  09 sprint mission 5 fe 

  MarketPage.jsx

  2025. 09. 22

  clone coding

*/

import BestItemsSection from "./components/BestItemsSection";
import AllItemsSection from "./components/AllItemsSection";
import "./MarketPage.css";

function MarketPage() {
  return (
    <div className="wrapper">
      <BestItemsSection />
      <AllItemsSection />
    </div>
  );
}

export default MarketPage;