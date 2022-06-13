import { useParams } from "react-router-dom";
import data from "../assets/data";
import CardDetail from "../components/CardDetail";

function Detail() {
	const { id } = useParams();

	const dataArray = [];

	data.map((ciudad) => {
		return ciudad.cities.map((element) => {
			return dataArray.push(element);
		});
	});

	console.log(dataArray);

	let ciudad = dataArray.filter((element) => element.id === Number(id));
	console.log(ciudad);

	return (
		<div className="container">
			<CardDetail city={ciudad} />
		</div>
	);
}

export default Detail;
