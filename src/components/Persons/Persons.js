import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[Persons.js] getDerivedStateFromProps", nextProps);
    return prevState;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapchotBeforeUpdate");
    return { prevProps, prevState };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  render() {
    return this.props.persons.map((person, index) => (
      <Person
        nombre={person.name}
        edad={person.age}
        key={person.id}
        delete={() => this.props.delete(index)}
        change={event => this.props.change(event, index)}
      />
    ));
  }
}
export default Persons;
