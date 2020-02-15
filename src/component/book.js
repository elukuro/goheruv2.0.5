import React, { Component } from "react";
import Nav from "../container/nav";
import Jumbo from "../container/jumbo";
import Book from "../container/book";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#fff";
    window.scrollTo({ top: 0});
  }

  render() {
    return (
      <div>
        <Nav active="book" />
        <Jumbo image="book.png" page="book" alt="big-plant" />
        <Book />
      </div>
    );
  }
}

export default Books;
