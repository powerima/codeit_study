/*
  09 sprint mission 5 fe 

  AllItemsSection.jsx

  2025. 09. 22

  clone coding

*/

import { useEffect, useState } from "react";
import { getProducts } from "/src/api/itemApi";
import ItemCard from "./ItemCard";
import DropdownList from "/src/components/UI/DropdownList";
import PaginationBar from "/src/components/UI/PaginationBar";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 744) {
    // Mobile viewport
    return 4;
  } else if (width < 1200) {
    // Tablet viewport
    return 6;
  } else {
    // Desktop viewport
    return 10;
  }
}



function AllItemsSection() {
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [keyword, setKeyword] = useState("");
  const [itemList, setItemList] = useState([]);
  const [totalPageNum, setTotalPageNum] = useState();




  /*  상품 리스트를 조회    */
  const fetchSortedData = async ({ orderBy, page, pageSize, keyword }) => {
    const products = await getProducts({ orderBy, page, pageSize, keyword });
    setItemList(products.list);
    setTotalPageNum(Math.ceil(products.totalCount / pageSize));
  };

  /*  검색창 입력 이벤트 */
  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };


  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    }

    window.addEventListener("resize", handleResize);
    fetchSortedData({ orderBy, page, pageSize, keyword });
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
    fetchSortedData({ orderBy, page: pageNumber, pageSize, keyword });
  };

  return (
    <div>
      <div className="allItemsSectionHeader">
        <h1 className="sectionTitle">판매 중인 상품</h1>

        <div className="searchBarWrapper">
          <img className="searchIcon" src="/src/assets/images/icons/ic_search.svg" alt="검색 아이콘"/>
          <input className="searchBarInput" placeholder="검색할 상품을 입력해 주세요" value={keyword} onChange={handleInputChange} />
        </div>

        <div>
          <div to="/additem" className="createItemButton button">
            상품 등록하기
          </div>
        </div>
        <div className="sortButtonWrapper">
          <DropdownList />
        </div>
      </div>

      <div className="allItemsCardSection">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`market-item-${item.id}`} />
        ))}
      </div>
      
      <div className="paginationBarWrapper">
        <PaginationBar totalPageNum={totalPageNum} activePageNum={page} onPageChange={onPageChange} />
      </div>
    </div>
  )
}

export default AllItemsSection;