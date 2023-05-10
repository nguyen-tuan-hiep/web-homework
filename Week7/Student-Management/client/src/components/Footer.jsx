import React from "react";
import { GitHub, Facebook, Mail } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", marginTop: "auto", padding: "20px", backgroundColor: "#f5f5f5" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px", color: "#394867", textDecoration: "none", display: "flex", alignItems: "center" }}
        >
          <GitHub sx={{ fontSize: 24, marginRight: "5px" }} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px", color: "#394867", textDecoration: "none", display: "flex", alignItems: "center" }}
        >
          <Facebook sx={{ fontSize: 24, marginRight: "5px" }} />
          <span>Facebook</span>
        </a>
        <a
          href="mailto:@gmail.com"
          style={{ marginRight: "10px", color: "#394867", textDecoration: "none", display: "flex", alignItems: "center" }}
        >
          <Mail sx={{ fontSize: 24, marginRight: "5px" }} />
          <span>Email</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
