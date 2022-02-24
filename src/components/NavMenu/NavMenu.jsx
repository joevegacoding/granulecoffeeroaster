import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
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
    padding-block: 4rem;
    font-size: 2rem;
    background: transparent;
    text-decoration: none;
    list-style: none;
    text-align: center;
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
    left: -60%;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
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
        <span area-hidden="true">01</span> About
      </Link>
      <Link
        onClick={() => setOpen(!open)}
        activeClassName="is-active"
        to="/projects"
      >
        <span area-hidden="true">02</span> Projects
      </Link>
      <Link
        onClick={() => setOpen(!open)}
        activeClassName="is-active"
        to="/skills"
      >
        <span area-hidden="true">03</span> Skills
      </Link>
      <Link
        onClick={() => setOpen(!open)}
        activeClassName="is-active"
        to="/contact"
      >
        <span area-hidden="true">04</span> Contact
      </Link>
      <li>
        <button className="btn btn-resume">Resume</button>
      </li>
    </Ul>
  );
};

export default NavMenu;
