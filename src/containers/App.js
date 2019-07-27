import React from "react";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: "abc1", name: "Jesus", age: 25 },
      { id: "abc2", name: "Oralia", age: 24 },
      { id: "abc3", name: "Maria", age: 43 }
    ],
    show: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

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
    console.log("[App.js] render");
    let persons = null;
    if (this.state.show) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            delete={this.deletePersonHandler}
            change={this.changePersonHandler}
          />
        </div>
      );
    }

    return (
      <Aux>
        <button
          onClick={() =>
            this.setState({ showCockpit: !this.state.showCockpit })
          }
        >
          Toggle Cockpit
        </button>

        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            show={this.state.show}
            personsLength={this.state.persons.length}
            showHandler={this.showPersonsHandler}
          />
        ) : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, styles.App);
