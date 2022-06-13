import { useParams } from "react-router-dom";
import data from "../assets/data";
import CardDetail from "../components/CardDetail";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// function Detail() {
// 	const { id } = useParams();

// 	const dataArray = [];

// 	data.map((ciudad) => {
// 		return ciudad.cities.map((element) => {
// 			return dataArray.push(element);
// 		});
// 	});

// 	let cityDetail = dataArray.filter((element) => element.id === Number(id));

// 	return (
// 		<div className="container">
// 			<CardDetail city={cityDetail} />
// 		</div>
// 	);
// }

// export default Detail;

function Detail() {
	const { pathname } = useLocation();
	const { id } = useParams();

	const dataArray = [];

	data.map((ciudad) => {
		return ciudad.cities.map((element) => {
			return dataArray.push(element);
		});
	});

	useEffect(() => {
		console.log("se disparo el useEffect");
	}, [pathname]);

	let cityDetail = dataArray.filter((element) => element.id === Number(id));

	return (
		<div className="container detail-container d-flex justify-content-center align-items-center">
			<CardDetail city={cityDetail} />
		</div>
	);
}

export default Detail;
