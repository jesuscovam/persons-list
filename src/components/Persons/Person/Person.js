import React from "react";
import classes from "./Person.module.css";

const Person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.delete}>
        Mi nombre es {props.nombre} y mi edad es {props.edad}
      </p>
      <input type="text" value={props.nombre} onChange={props.change} />
    </div>
  );
};

export default Person;
