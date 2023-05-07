import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from '@mui/icons-material/Email';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Footer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#394867",
        height: "60px",
        padding: "0 20px",
      }}
    >
      <div style={{ display: "flex" }}>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          style={{ backgroundColor: "#394867", height: "60px" }}
        >
          <BottomNavigationAction
            icon={<GitHubIcon />}
            href="https://github.com/nguyen-tuan-hiep"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          />
          <BottomNavigationAction
            icon={<FacebookIcon />}
            href="https://facebook.com/hiepnttt"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          />
          <BottomNavigationAction
            icon={<InstagramIcon />}
            href="https://instagram.com/nguyen.tuan.hiep"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          />
          <BottomNavigationAction
            icon={<PinterestIcon />}
            href="https://www.pinterest.com/hiep_nt/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          />
          <BottomNavigationAction
            icon={<EmailIcon />}
            href="mailto:hiep.nt205151@sis.hust.edu.vn"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
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
        &copy; {new Date().getFullYear()} <a href="https://github.com/nguyen-tuan-hiep" style={{ color:"white"}}>Nguyen Tuan Hiep </a>. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
