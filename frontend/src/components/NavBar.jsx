import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "../styles/navbar.css";
import { Link as LinkRouter } from "react-router-dom";

function NavBar() {
	return (
		<Navbar expand="lg" className="contenedor-nav d-flex justify-content-end">
			<Container>
				{/* mobile */}
				<Navbar.Brand>
					<div className="d-flex align-items-center">
						<h6 className="logo-text">MyTinerary</h6>
					</div>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav d-flex align-items" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<div className="d-flex align-items-center flex-column flex-sm-row">
							<LinkRouter to="/" className="linkRouter mx-2">
								Home
							</LinkRouter>
							<LinkRouter to="/cities" className="linkRouter mx-2">
								Cities
							</LinkRouter>
						</div>
						<NavDropdown
							title={
								<img
									src={process.env.PUBLIC_URL + "/img/acount_icon.png"}
									alt="acount-icon"
									className="drop-down-icon"
								/>
							}
							id="basic-nav-dropdown"
							className="d-flex align-items-center"
						>
							<NavDropdown.Item href="#action/3.1">
								Log in
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Sign up
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
