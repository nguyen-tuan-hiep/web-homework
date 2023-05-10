import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
	background: #8294C4;
	margin-top: 0px;
`

const Tabs = styled(NavLink)`
	font-size:20px;
	margin-right:20px;
	color: inherit;
	text-decoration: none;
	&:hover {
		color: red;
	}
`

const NavBar = () => {
	return (
		<Header position="static">
      <Toolbar>
				<Tabs to="/all">All users</Tabs>
				<Tabs to="/add">Add user</Tabs>

      </Toolbar>
		</Header>
	);
};
export default NavBar;
