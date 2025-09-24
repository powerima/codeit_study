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
<<<<<<< HEAD
=======
    if(isDropdownVisible) {

    }
>>>>>>> d5b1962a97bf7ff9e21975a404ce692e097fd633
  }

  return (
    <div className='dropdownContainer'>
      <button className="dropdownListButton" onClick={dropdownListToggle}>
        <span>최신순</span>
        <img className="dropdownListButtonIcon"src="/src/assets/images/icons/ic_arrow_down.svg" />
      </button>
<<<<<<< HEAD
      {isDropdownVisible &&
      (<div className="dropdownList">
=======
      <div className="dropdownList">
>>>>>>> d5b1962a97bf7ff9e21975a404ce692e097fd633
        <div className="dropdownItem" onClick={() => onSortSelection("recent")}>
          최신순
        </div>
        <div className="dropdownItem" onClick={() => onSortSelection("favorite")}> 
          좋아요순
        </div>
<<<<<<< HEAD
      </div>)}
=======
      </div>
>>>>>>> d5b1962a97bf7ff9e21975a404ce692e097fd633
    </div>
  );
}
export default DropdownList;