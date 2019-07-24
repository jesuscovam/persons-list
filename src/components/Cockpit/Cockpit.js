import React, { useEffect } from "react";
import styles from "./Cockpit.module.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
  });

  const classes = [];
  let btnClass = "";
  if (props.show) {
    btnClass = styles.red;
  }
  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }
  return (
    <div className={styles.Cockpit}>
      <h2>{props.title}</h2>
      <p className={classes.join(" ")}>It really works!</p>
      <button className={btnClass} onClick={props.showHandler}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
