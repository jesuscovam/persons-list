import React from "react";
import Person from "./Person/Person";

const persons = props => {
  console.log("[Person.js] rendering...");
  return props.persons.map((person, index) => (
    <Person
      nombre={person.name}
      edad={person.age}
      key={person.id}
      delete={() => props.delete(index)}
      change={event => props.change(event, index)}
    />
  ));
};
export default persons;
