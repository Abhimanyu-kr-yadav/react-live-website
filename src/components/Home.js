import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is a home page.</h1>
        <button className="btn btn-primary mx-2 ">Click me</button>
        <button className=" btn btn-success "> Clic me 2</button>
      </div>
    );
  }
}
