/*
  09 sprint mission 5 fe 

  App.jsx

  2025. 09. 22

  clone coding

*/


import Header from "./components/Layout/Header";
import ItemCard from "/src/pages/MarketPage/components/ItemCard";
import BestItemsSection from "/src/pages/MarketPage/components/BestItemsSection";
import MarketPage from "/src/pages/MarketPage/MarketPage";
import Footer from "./components/Layout/Footer";

function App() {

  return (
    <>
      {/* Global Navigation Bar */}
      <Header />
      <div className="withHeader">
        <MarketPage />
      </div>
      <Footer />
    </>
  )
}

export default App;
