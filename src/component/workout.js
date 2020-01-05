import React, { Component } from "react";
import Nav from "../container/nav";
import Jumbo from "../container/jumbo";
import WorkoutList from "../container/workout";

class Work extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Nav active="workout" />
        <Jumbo image="shoes.png" page="workout" alt="workout" />
        <WorkoutList />
      </div>
    );
  }
}

export default Work;
