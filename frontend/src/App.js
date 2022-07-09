import "./styles/App.css";
/*PAGES */
import Index from "./pages/Index";
import Cities from "./pages/Cities";
// import Error from "./pages/Error";
import Itineraries from "./pages/Itineraries";
/*COMPONENTS */
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";

import citiesActions from "./redux/actions/citiesActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usersActions from "./redux/actions/usersActions";
import SignUp from "./components/SignUp";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(citiesActions.getCities());

		if (localStorage.getItem("token") !== null) {
			//concidicional para el token
			const token = localStorage.getItem("token");
			dispatch(usersActions.verifyToken(token));
		}
		//eslint-disable-next-line
	}, []);

	const user = useSelector((store) => store.usersReducer.user);

	return (
		<div className="App">
			<NavBar />
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/cities" element={<Cities />} />
				<Route path="/*" element={<Index />} />
				<Route path={`/cities/:id`} element={<Itineraries />} />

				{!user && <Route path="/users/signup" element={<SignUp />} />}
				{!user && <Route path="/users/signin" element={<SignIn />} />}
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
