import React, { useState } from "react";
import styled from "styled-components";
import NavMenu from "../NavMenu/NavMenu";

const StyledBurger = styled.div`
  width: 1rem;
  height: 1.8rem;

  position: absolute;
  //   position: ${({ open }) => (open ? "fixed" : "absolute")};
  top: 14px;
  align-items: center;
  display: flex;
  z-index: 20;
  //   display: none;
  cursor: pointer;
  @media (min-width: 599px) {
    display: none;
  }
  @media (max-width: 768px) {
    left: 4rem;
  }
  @media (max-width: 599px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.2rem;
    background-color: #000;
    border-radius: 10px;
    transform-origin: 2.5px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(43deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(80%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-48deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </StyledBurger>
      <NavMenu setOpen={setOpen} open={open} />
    </>
  );
};

export default Burger;
