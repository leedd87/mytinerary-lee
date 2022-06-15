import React from "react";
import Hero from "../components/Hero";
import CallToAction from "../components/CallToACtion";
import CarouselBootstrap from "../components/CarouselBootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function Index() {
	const [cities, setCities] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:4000/api/cities")
			.then((infoApi) => setCities(infoApi));
	}, []);

	console.log(cities); //consultar por await axios

	// let arrayCities = cities.data.response.cities;
	// console.log(arrayCities);

	return (
		<>
			<Hero />
			<CallToAction />
			<CarouselBootstrap />
		</>
	);
}
export default Index;
