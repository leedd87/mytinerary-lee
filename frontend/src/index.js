import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import App from "./App";
import ScrollToTopLocation from "./helpers/ScrollToTopLocation";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./redux/reducers/mainReducer";

const reduxStore = configureStore({ reducer: mainReducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={reduxStore}>
		<BrowserRouter>
			<ScrollToTopLocation />
			<App />
		</BrowserRouter>
	</Provider>
);
