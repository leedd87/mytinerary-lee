import { Carousel } from "react-bootstrap";
import React from "react";
import CardBoostrap from "./CardBoostrap";
import data from "../assets/data";
import "../styles/carousel.css";

function CarouselBootstrap() {
	return (
		<div className="carousel-container container mb-5 pt-5 rounded">
			<h2 className="text-center text-carousel rounded">
				Popular MyTineraries
			</h2>

			<Carousel className="container p-5 ">
				{data.map((city) => {
					return (
						<Carousel.Item key={city.id}>
							<div className="d-flex justify-content-center align-items-center flex-wrap">
								{city.cities.map((elemento) => {
									return (
										<CardBoostrap
											city={elemento.city}
											image={elemento.image}
											key={elemento.id}
										/>
									);
								})}
							</div>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</div>
	);
}

export default CarouselBootstrap;
