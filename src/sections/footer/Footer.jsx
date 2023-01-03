import React from "react";
import classes from "./footer.module.css";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { GoCode } from "react-icons/go";

const Footer = () => {
  return (
    <footer>
      <div className={classes.container}>
        <a href="https://github.com/yassinehaimouch" rel="noreferrer" target={'_blank'}>
          <BsGithub className={classes.icon} />
        </a>
        <a href="https://instagram.com/gitcoder" rel="noreferrer" target={'_blank'}>
          <BsInstagram className={classes.icon} />
        </a>
        <a href="https://www.linkedin.com/in/yassinehaimouch/" rel="noreferrer" target={'_blank'}>
          <BsLinkedin className={classes.icon} />
        </a>
      </div>
      <div className={classes.text}>
        <GoCode />
        <span>by</span>
        <span><a href="https://github.com/yassinehaimouch" rel="noreferrer" target={'_blank'}>Yassine Haimouch</a></span>
        <span>2023</span>
      </div>
    </footer>
  );
};

export default Footer;
