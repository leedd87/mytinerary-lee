import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "../styles/navbar.css";
import { Link as LinkRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import usersActions from "../redux/actions/usersActions";

function NavBar() {
	const dispatch = useDispatch();

	const user = useSelector((store) => store.usersReducer.user);

	function handleClick() {
		dispatch(usersActions.signOutUser());
	}
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
								!user ? (
									<img
										src={
											process.env.PUBLIC_URL + "/img/acount_icon.png"
										}
										alt="acount-icon"
										className="drop-down-icon"
									/>
								) : (
									<img
										src={user.userData.userPhoto}
										alt={user.userData.userName}
										className="drop-down-icon user-photo-nav-bar"
									/>
								)
							}
							id="basic-nav-dropdown"
							className="d-flex align-items-center"
						>
							{!user ? (
								<>
									<NavDropdown.Item>
										<LinkRouter
											to="/users/signin"
											className="mx-2 signin"
										>
											Sign in
										</LinkRouter>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<LinkRouter
											to="/users/signup"
											className="mx-2 signup"
										>
											Sign up
										</LinkRouter>
									</NavDropdown.Item>
								</>
							) : (
								<>
									<LinkRouter
										to="/"
										className="mx-2 signup"
										onClick={handleClick}
									>
										Sign out
									</LinkRouter>
								</>
							)}
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
