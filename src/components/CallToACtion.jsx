import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/calltoaction.css";
import { Link as LinkRouter } from "react-router-dom";

function CallToAction() {
	return (
		<div className="d-flex justify-content-center my-5">
			<div className="row calltoaction-container container rounded">
				<div className="d-flex justify-content-center align-items-center flex-column col-6">
					<h2 className="text-center p-2 rounded text-call">
						DISCOVER KOREA WITH US
					</h2>
					<LinkRouter to="/cities" className="btn-travel mt-2 linkRouter">
						TRAVEL
					</LinkRouter>
				</div>
				<div className="col-6 d-flex justify-content-center align-items-center">
					<img
						src="https://as2.ftcdn.net/v2/jpg/02/97/64/19/1000_F_297641938_ti60o618SDDaKfQLhyQvpcL4nDcs2Hkm.jpg"
						alt=""
						className="calltoaction-img"
					/>
				</div>
			</div>
		</div>
	);
}

export default CallToAction;
