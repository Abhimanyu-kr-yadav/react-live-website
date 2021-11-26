import React, { Component } from "react";

import axios from "axios";

export default class PersonList extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((resp) => {
      console.log(resp);
      this.setState({ persons: resp.data });
    });
  }
  render() {
    return (
      <div>
        <ol>
          {this.state.persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ol>
      </div>
    );
  }
}
