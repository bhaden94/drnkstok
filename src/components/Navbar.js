import React, { useState } from "react";
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse,
	MDBBtn,
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<Router>
			<MDBNavbar fixed="top" color="special-color-dark" dark expand="md">
				<MDBNavbarBrand>
					<strong className="white-text">DrnkStok</strong>
				</MDBNavbarBrand>
				<MDBNavbarToggler onClick={() => setOpen(!open)} />
				<MDBCollapse id="navbarCollapse3" isOpen={open} navbar>
					<MDBNavbarNav right>
						<MDBNavItem>
							<MDBNavLink
								className="waves-effect waves-light"
								to="#!"
							>
								<MDBBtn outline color="blue-grey">Log In</MDBBtn>
							</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink
								className="waves-effect waves-light"
								to="#!"
							>
								<MDBBtn color="blue-grey">Sign Up</MDBBtn>
							</MDBNavLink>
						</MDBNavItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		</Router>
	);
}

export default Navbar;
