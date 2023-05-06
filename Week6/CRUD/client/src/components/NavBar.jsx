import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #212A3E;
  margin-top: 0px;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    color: #9BA4B5;
  }
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Get all blogs</Tabs>
        <Tabs to="/add">Create new blog</Tabs>
      </Toolbar>
    </Header>
  );
};
export default NavBar;
