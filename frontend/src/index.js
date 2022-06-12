import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import App from "./App";
import ScrollToTop from "./helpers/ScrollToTop";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
	</BrowserRouter>
);
