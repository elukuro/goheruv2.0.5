import React, { Component } from "react";
import Nav from "../container/nav";
import Jumbo from "../container/jumbo";
import WorkList from "../container/worklist";

class Work extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Nav active="work" />
        <Jumbo image="code_2.png" page="work" alt="big-plant" />
        <WorkList />
      </div>
    );
  }
}

export default Work;
