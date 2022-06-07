import React from "react";
import { Link as LinkRouter } from "react-router-dom";

import "../styles/footer.css";

function Footer() {
	return (
		<div className="d-flex align-items-center justify-content-between footer-container flex-column flex-sm-row">
			<div className="d-flex align-items-center justify-content-center mx-5">
				<h6 className="mb-0 logo-text">MyTinerary</h6>
			</div>
			<div className="d-flex align-items-center">
				<div className="text-center">
					<LinkRouter to="/" className="me-2 me-sm-5 mb-0 linkRouter">
						HOME
					</LinkRouter>
				</div>
				<div>
					<LinkRouter
						to="/cities"
						className="ms-2 ms-sm-5 mb-0 linkRouter"
					>
						CITIES
					</LinkRouter>
				</div>
			</div>
			<div className="redes-container mx-5">
				<a href="https://www.instagram.com" className="mx-md-2">
					<img
						src={process.env.PUBLIC_URL + "./img/instagram.png"}
						alt="instagram"
						className="footer-img"
					/>
				</a>
				<a href="https://www.facebook.com" className="mx-md-2">
					<img
						src={process.env.PUBLIC_URL + "./img/facebook.png"}
						alt="facebook"
						className="footer-img"
					/>
				</a>

				<a href="www.whatsapp.com" className="mx-md-2">
					<img
						src={process.env.PUBLIC_URL + "/img/whatsapp.png"}
						alt="whatsapp"
						className="footer-img"
					/>
				</a>
			</div>
		</div>
	);
}

export default Footer;
