/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import Nav from "../container/nav";
import Jumbo from "../container/jumbo";
import Medium from "../container/medium";

class Notes extends Component {
  componentDidMount() {}

  render() {
    // const {darkMode}= this.state;
    return (
      <div>
        <Nav active="medium" />
        <Jumbo image="pencil.png" page="medium" alt="pencil" />
        <Medium />
      </div>
    );
  }
}

export default Notes;
