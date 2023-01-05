import React from "react";
import classes from "./character.module.css";

const Character = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.image} alt="img" className={props.isDead ? classes.dead : ""}/>

      <div className={classes.details}>
        <div className={classes.item}>
          <h1>{props.name}</h1>
          <h3>
            {props.status} - {props.species}
          </h3>
        </div>
        <div>
          <h3>Last known location :</h3>
          <h2>{props.locationName}</h2>
        </div>
      </div>
    </div>
  );
};

export default Character;
