import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.module.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Aux";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;
  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please Log in</p>
        )}
        <p onClick={this.props.delete}>
          Mi nombre es {this.props.nombre} y mi edad es {this.props.edad}
        </p>
        <input
          type="text"
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          value={this.props.nombre}
          onChange={this.props.change}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  delete: PropTypes.func,
  nombre: PropTypes.string,
  edad: PropTypes.number,
  change: PropTypes.func
};
export default withClass(Person, classes.Person);
