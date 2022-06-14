import { useParams } from "react-router-dom";
import data from "../assets/data";
import CardDetail from "../components/CardDetail";

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
	const { id } = useParams();

	const dataArray = [];

	data.map((ciudad) => {
		return ciudad.cities.map((element) => {
			return dataArray.push(element);
		});
	});

	let cityDetail = dataArray.filter((element) => element.id === Number(id));

	return (
		<div className="container detail-container d-flex justify-content-center align-items-center">
			<CardDetail city={cityDetail} />
		</div>
	);
}

export default Detail;
