/*
	09 sprint mission 5 fe 

	Footer.jsx

	2025. 09. 23

	clone coding

*/  
import "./Footer.css";

function Footer() {

	return (
		<footer className="globalFooter">
			<div className="copyright">ⓒcodeit - 2024</div>
			<div className="footerMenu">
				<a href="#">Privacy Policy</a>
				<a href="#">FAQ</a>
			</div>
			<div className="socialMedia">
				<a href="#"><img src="/src/assets/images/social/facebook-logo.svg" alt="페이스북"/></a>
				<a href="#"><img src="/src/assets/images/social/twitter-logo.svg" alt="트위터"/></a>
				<a href="#"><img src="/src/assets/images/social/youtube-logo.svg" alt="유튜브"/></a>
				<a href="#"><img src="/src/assets/images/social/instagram-logo.svg" alt="인스타그램"/></a>
			</div>
		</footer>
	)
}

export default Footer;