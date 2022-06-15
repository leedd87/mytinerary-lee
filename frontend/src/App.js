import "./styles/App.css";
/*PAGES */
import Index from "./pages/Index";
import Cities from "./pages/Cities";
import Error from "./pages/Error";
import Detail from "./pages/Detail";
/*COMPONENTS */
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/cities" element={<Cities />} />
				<Route path="/*" element={<Error />} />
				<Route path={`/city/:id`} element={<Detail />} />
			</Routes>
			<ScrollToTop
				smooth
				style={{
					right: "20px",
					bottom: "125px",
					backgroundColor: "#f5f5f5",
				}}
				component={<ArrowCircleUpOutlinedIcon />}
			/>
			<Footer />
		</div>
	);
}

export default App;
