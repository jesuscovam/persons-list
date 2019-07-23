import React from "react";
import styles from "./App.module.css";

import Person from "../components/Persons/Person/Person";

class App extends React.Component {
  state = {
    persons: [
      { id: "abc1", name: "Jesus", age: 25 },
      { id: "abc2", name: "Oralia", age: 24 },
      { id: "abc3", name: "Maria", age: 43 }
    ],
    show: false
  };

  showPersonsHandler = () => {
    const show = !this.state.show;
    this.setState({ show });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  changePersonHandler = (event, personIndex) => {
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };
  render() {
    let persons = null;
    let btnClass = "";
    if (this.state.show) {
      persons = this.state.persons.map((person, index) => (
        <Person
          nombre={person.name}
          edad={person.age}
          key={person.id}
          delete={() => this.deletePersonHandler(index)}
          change={event => this.changePersonHandler(event, index)}
        />
      ));
      btnClass = styles.red;
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }
    return (
      <div className={styles.App}>
        <h2>React App</h2>
        <p className={classes.join(" ")}>It really works!</p>
        <button className={btnClass} onClick={this.showPersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
