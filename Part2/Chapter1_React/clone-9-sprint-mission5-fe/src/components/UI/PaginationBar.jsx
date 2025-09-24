/*
	09 sprint mission 5 fe 

	PaginationBar.jsx

	2025. 09. 23

	clone coding

*/

import "./PaginationBar.css";


const PaginationBar = ({ totalPageNum, activePageNum, onPageChange }) => {
	const maxVisiblePages = 5;
	let startPage;

	if(totalPageNum <= maxVisiblePages) {
		startPage = 1;
	} else {
		startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1);
		startPage = Math.min(startPage, totalPageNum - maxVisiblePages + 1);
	}

	const pages = Array.from(
		{ length: Math.min(maxVisiblePages, totalPageNum - startPage + 1 )},
		(_, i) => startPage + i
	);

	return (
		<div className="paginationBar">{console.log('pages => ', pages)}
			<button className="paginationButton" disabled={activePageNum === 1} onClick={() => onPageChange(activePageNum - 1)}
			><img src="/src/assets/images/icons/arrow_left.svg" alt="페이지 왼족 화살표 버튼"/></button>
			{pages.map((page) => (
				<button key={page} className={`paginationButton ${activePageNum === page ? "active" : ""}`} 
					onClick={() => onPageChange(page)}>{page}</button>
			))}
			<button className="paginationButton" disabled={activePageNum === totalPageNum} onClick={() => onPageChange(activePageNum + 1)}
			><img src="/src/assets/images/icons/arrow_right.svg" alt="페이지 오른쪽 화살표 버튼" /></button>
		</div>
	)
}

export default PaginationBar;