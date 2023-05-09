import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #424242;
  margin-top: 0;
`;

const Tabs = styled(NavLink)`
  font-size: 22px;
  margin-left: 30px;
  margin-right: 40px;
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    color: #171e2b;
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
          <Tabs to="/">Get all phones</Tabs>
          <Tabs to="/create">Create new phone</Tabs>
        </Toolbar>
      </Header>
    </>
  );
};
export default NavBar;
