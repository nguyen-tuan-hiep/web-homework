import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  position: fixed;
  top: 0;
  left: 0;
  background: green;
  margin-top: 0px;
`;


const Tabs = styled(NavLink)`
  font-size: 22px;
  margin-left: 30px;
  margin-right: 40px;
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    color: #273248;
  }
`;

const NavBar = () => {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">Get all students</Tabs>
          <Tabs to="/add">Create new student</Tabs>
        </Toolbar>
      </Header>
    </>
  );
};
export default NavBar;
