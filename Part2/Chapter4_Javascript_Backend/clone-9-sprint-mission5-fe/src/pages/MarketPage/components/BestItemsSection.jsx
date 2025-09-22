/*
  09 sprint mission 5 fe 

  BestItemsSection.jsx

  2025. 09. 22

  clone coding

*/

import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getProducts } from "/src/api/itemApi";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 744) {
    // Mobile viewport
    return 1;
  } else if (width < 1280) {
    // Tablet viewport
    return 2;
  } else {
    // Desktop viewport
    return 4;
  }
};

function BestItemsSection() {
  const [itemList, setItemList] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const fetchSortedData = async ({ orderBy, pageSize }) => {
    const products = await getProducts({ orderBy, pageSize });
    setItemList(products.list);
  };


  useEffect(() => {
    fetchSortedData({ orderBy: "favorite", pageSize });


  }, [pageSize]);

  return (
    <div className="bestItemsContainer">
      <h1 className="sectionTitle">베스트 상품</h1>
      <div className="bestItemsCardSection">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default BestItemsSection;