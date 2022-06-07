import React from "react";
import "../styles/hero.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
	return (
		<div className="hero-container">
			<div className="hero-text p-3 rounded">
				<h1 className="">MyTinerary</h1>
				<h2>
					"Find your perfect trip, designed by insiders who know and love
					their cities!"
				</h2>
			</div>
		</div>
	);
}

export default Hero;
