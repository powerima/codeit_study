/*
  09 sprint mission 5 fe 

  DropdownList.jsx

  2025. 09. 22

  clone coding

*/

import { useState } from "react";
import "./DropdownList.css";

function DropdownList({ onSortSelection }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const dropdownListToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  }

  return (
    <div className='dropdownContainer'>
      <button className="dropdownListButton" onClick={dropdownListToggle}>
        <span>최신순</span>
        <img className="dropdownListButtonIcon"src="/src/assets/images/icons/ic_arrow_down.svg" />
      </button>
      {isDropdownVisible &&
      (<div className="dropdownList">
        <div className="dropdownItem" onClick={() => onSortSelection("recent")}>
          최신순
        </div>
        <div className="dropdownItem" onClick={() => onSortSelection("favorite")}> 
          좋아요순
        </div>
      </div>)}
    </div>
  );
}
export default DropdownList;