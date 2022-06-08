import "./styles/App.css";
/*PAGES */
import Index from "./pages/Index";
import Cities from "./pages/Cities";
import Error from "./pages/Error";
/*COMPONENTS */
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/cities" element={<Cities />} />
				<Route path="/*" element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
