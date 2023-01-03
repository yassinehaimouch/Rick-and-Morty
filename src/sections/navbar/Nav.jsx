import React from "react";
import logo from "../../assets/Rick_and_Morty.png";
import classes from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.navbar}>
      <a href="/"><img src={logo} alt="logo" /></a>
      <ul>
        <li>
          <a
            href="https://rickandmortyapi.com/"
            rel="noreferrer"
            target="_blank"
          >
            API
          </a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Rick_and_Morty"
            rel="noreferrer"
            target="_blank"
          >
            Wiki
          </a>
        </li>
        <li>
          <a
            href="https://github.com/yassinehaimouch/Rick-and-Morty"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
