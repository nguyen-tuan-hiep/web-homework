import { Toolbar, styled, AppBar } from "@mui/material";
import {NavLink} from "react-router-dom";
// import {Header, Tabs} from "../muiStyled.js";
import { useEffect, React, useRef } from "react";

const Header = styled(AppBar)`
  background: #42a5f5;
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
    const header = useRef();
    useEffect(() => {
        let lastScrollPosition = 0;

        const scrollHandler = () => {
            const currentScrollPosition = window.scrollY;
            const scrollDirection = currentScrollPosition > lastScrollPosition ? "down" : "up";
            header.current.style.transform = `translateY(${scrollDirection === "down" ? "-100%" : "0%"})`;
            lastScrollPosition = currentScrollPosition;
        };

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div ref={header} style={{
            position: "fixed",
            width: "100%",
            marginBottom: "20px",
            transition: "transform 0.2s ease-in-out"
        }}>
            <Header
                position="static"
                sx={{
                    width: "100%",

                }}
            >
                <Toolbar>
                    <Tabs to="/">Get all students</Tabs>
                    <Tabs to="/create">Create new student</Tabs>
                </Toolbar>
            </Header>
        </div>
    );
};
export default NavBar;
