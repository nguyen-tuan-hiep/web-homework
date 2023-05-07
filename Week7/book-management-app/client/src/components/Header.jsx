import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #394867;
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
      <Header
        position="static"
        sx={{
          width: "100%",
        }}
      >
        <Toolbar>
          <Tabs to="/">Get all books</Tabs>
          <Tabs to="/create">Create new book</Tabs>
        </Toolbar>
      </Header>
    </>
  );
};
export default NavBar;
