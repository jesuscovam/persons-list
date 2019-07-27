import React, { useEffect, useRef } from "react";
import styles from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    //fake http request
    // const timer = setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 2000);
    // toggleBtnRef.current.click();

    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit.js] cleanUp work");
    };
  }, []);

  const classes = [];
  let btnClass = "";
  if (props.show) {
    btnClass = styles.red;
  }
  if (props.personsLength <= 2) {
    classes.push(styles.red);
  }
  if (props.personsLength <= 1) {
    classes.push(styles.bold);
  }
  return (
    <div className={styles.Cockpit}>
      <h2>{props.title}</h2>
      <p className={classes.join(" ")}>It really works!</p>
      <button
        className={btnClass}
        ref={toggleBtnRef}
        onClick={props.showHandler}
      >
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>log in</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);
