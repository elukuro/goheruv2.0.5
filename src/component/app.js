import React, { Component } from "react";
import Nav from "../container/nav";
import Jumbo from "../container/jumbo";
import Career from "../container/career";
import Skill from "../container/skill";
import BlogLite from "../container/blog-lite";
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    document.body.style.backgroundColor = "#fff";
    window.scrollTo({ top: 0});
  }

  render() {
    return (
      <div>
        <Nav active="home" />
        <Jumbo image="sunrise.png" page="default" alt="sunrice" />
        <Career />
        <Skill />
        <BlogLite />
      </div>
    );
  }
}

export default App;
