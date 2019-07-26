import React, { Component } from "react";
import classes from "./Person.module.css";
import Aux from "../../../hoc/Aux";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        <p onClick={this.props.delete}>
          Mi nombre es {this.props.nombre} y mi edad es {this.props.edad}
        </p>
        <input
          type="text"
          value={this.props.nombre}
          onChange={this.props.change}
        />
      </Aux>
    );
  }
}

export default Person;
