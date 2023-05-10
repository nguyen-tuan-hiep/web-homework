import React, {useEffect} from "react";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Footer() {
    useEffect(() => {
        const footer = document.getElementById('footer');
        let lastScrollPosition = 0;

        const scrollHandler = () => {
            const currentScrollPosition = window.scrollY;
            const scrollDirection = currentScrollPosition > lastScrollPosition ? "down" : "up";
            footer.style.transform = `translateY(${scrollDirection === "down" ? "0%" : "100%"})`;
            lastScrollPosition = currentScrollPosition;
        };

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div id={'footer'} style={{
            position: "fixed",
            width: "100%",
            left: 0,
            bottom: 0,
            transition: "transform 0.2s ease-in-out"
        }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#4d5a76",
                    height: "60px",
                    padding: "0 20px",
                }}
            >
                <div style={{display: "flex"}}>
                    <BottomNavigation
                        style={{backgroundColor: "inherit", height: "60px"}}
                    >
                        <BottomNavigationAction
                            icon={<GitHubIcon/>}
                            href="https://github.com/3hJalter/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "white"}}
                        />
                        <BottomNavigationAction
                            icon={<FacebookIcon/>}
                            href="https://www.facebook.com/huy.hoang.3h"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "white"}}
                        />
                        <BottomNavigationAction
                            icon={<InstagramIcon/>}
                            href="https://z-p4.www.instagram.com/3h.jalter/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "white"}}
                        />
                        <BottomNavigationAction
                            icon={<PinterestIcon/>}
                            href="https://www.pinterest.com/hhhtnsdt/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "white"}}
                        />
                        <BottomNavigationAction
                            icon={<EmailIcon/>}
                            href="mailto:hoang.hh205152@sis.hust.edu.vn"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "white"}}
                        />
                    </BottomNavigation>
                </div>
                <div
                    style={{
                        textAlign: "right",
                        color: "white",
                        fontSize: "16px",
                    }}
                >
                    &copy; {new Date().getFullYear()}{" "}
                    <a
                        href="https://github.com/3hJalter/"
                        style={{color: "white"}}
                    >
                        Ha Huy Hoang{" "}
                    </a>
                    . All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;
