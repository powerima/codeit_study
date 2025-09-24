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

function AllItemsSection() {
  return (
    <div>
      <DropdownList />
    </div>
  )
}

export default AllItemsSection;