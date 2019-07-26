import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapchotBeforeUpdate");
    return { prevProps, prevState };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
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
