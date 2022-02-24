import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@material-ui/core";
import logo from "../../assets/logo.png";
import PersonIcon from "@mui/icons-material/Person";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 9;
  justify-content: center;

  button {
    margin-inline: auto;
  }

  li,
  a,
  span {
    padding-block: 2rem;
    font-size: 1.5rem;
    background: transparent;
    text-decoration: none;
    list-style: none;
    text-align: left;
    color: #000;
  }

  span {
    color: #25d9b6;
  }

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 959px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0%;
    height: 100vh;
    width: 60%;
    transition: transform 0.3s ease-in-out;

    li {
      background: transparent;
    }
  }

  .menu-collapse {
    transform: translateX(50%);
    opacity: 0;
  }
`;

const NavMenu = ({ open, setOpen }) => {
  return (
    <Ul className="menu-collapse" open={open}>
      <Link
        onClick={() => setOpen(!open)}
        activeClassName="is-active"
        to="/about"
      >
        SHOP
      </Link>
      <Link
        onClick={() => setOpen(!open)}
        activeClassName="is-active"
        to="/projects"
      >
        OUR STORY
      </Link>
      <Link
        onClick={() => setOpen(!open)}
        activeClassName="is-active"
        to="/skills"
      >
        SERVICES
      </Link>
      <Link
        onClick={() => setOpen(!open)}
        activeClassName="is-active"
        to="/contact"
      >
        <PersonIcon />
      </Link>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "70%",
        }}
      >
        <Link href="#" color="inherit">
          <FacebookIcon />
        </Link>
        <Link href="#" color="inherit">
          <InstagramIcon />
        </Link>
        <Link href="#" color="inherit">
          <TwitterIcon />
        </Link>
        <Link href="#" color="inherit">
          <PinterestIcon />
        </Link>
        <Link href="#" color="inherit">
          <LinkedInIcon />
        </Link>
      </Box>
      <Link to="/">
        <img
          src={logo}
          alt="CoffeeComerceLogo"
          // height="50%"
          width="110px"
          style={{
            display: "flex",
            width: "40%",
            height: "auto",
            // justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Link>
    </Ul>
  );
};

export default NavMenu;
