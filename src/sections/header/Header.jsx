import React from "react";
import classes from "./header.module.css";
import logo from '../../assets/rickandmortyLogo.png'
const Header = () => {
  return (
    <header className={classes.container}>
      <h1>Rick and Morty </h1>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
