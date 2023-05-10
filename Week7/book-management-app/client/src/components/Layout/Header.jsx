import {Toolbar} from "@mui/material";
import {Header, Tabs} from "../muiStyled.js";
import {useEffect, React} from "react";
const NavBar = () => {
    useEffect(() => {
        const header = document.getElementById('header');
        let lastScrollPosition = 0;

        const scrollHandler = () => {
            const currentScrollPosition = window.scrollY;
            const scrollDirection = currentScrollPosition > lastScrollPosition ? "down" : "up";
            header.style.transform = `translateY(${scrollDirection === "down" ? "-100%" : "0%"})`;
            lastScrollPosition = currentScrollPosition;
        };

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div id={'header'} style={{
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
                    <Tabs to="/">Get all books</Tabs>
                    <Tabs to="/create">Create new book</Tabs>
                </Toolbar>
            </Header>
        </div>
    );
};
export default NavBar;
