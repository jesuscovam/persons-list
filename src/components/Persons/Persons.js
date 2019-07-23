import React from "react";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map((person, index) => (
    <Person
      nombre={person.name}
      edad={person.age}
      key={person.id}
      delete={() => props.delete(index)}
      change={event => props.change(event, index)}
    />
  ));
export default persons;
