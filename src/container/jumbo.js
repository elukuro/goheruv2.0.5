/* eslint-disable global-require */
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import _ from "lodash";
import Loading from "./loading";

class Jumbo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingpage: {},
      loading: true,
      mediumHeading: "Article that maybe worth to read (or not)",
      workHeading: "Place to preview my work and archivement, my personal project, others",
      bookHeading: "Read fourty file minute a day and feel the direfence",
      workoutHeading: "Run Ruun Ruuuuun!"
    };
  }

  componentDidMount() {
    axios.get("http://goheru.com/public/landingpageJson").then(response => {
      this.setState({ landingpage: response.data, loading: false });
    });
  }

  renderPost() {
    const { page } = this.props;
    const { landingpage, workHeading, mediumHeading, bookHeading, workoutHeading } = this.state;
    let text = null;
    if (page === "default") {
      return _.map(landingpage, item => {
        return (
          <p key={item.id} className="headline">
            {item.content}
          </p>
        );
      });
    }
    if (page === "notes") {
      return _.map(landingpage, item => {
        return (
          <p key={item.id} className="headline">
            {item.content_admin}
          </p>
        );
      });
    }
    if (page === "work") {
      text = `${workHeading}`;
    }
    if (page === "medium") {
      text = `${mediumHeading}`;
    } else if (page === "book") {
      text = `${bookHeading}`;
    } else if (page === "workout") {
      text = `${workoutHeading}`;
    }
    return text;
  }

  render() {
    const { loading } = this.state;
    const { image, page } = this.props;
    const headline = this.renderPost();
    // eslint-disable-next-line import/no-dynamic-require
    const jumboImage = require(`../images/${image}`);
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="jumbo">
        <img src={jumboImage} alt="jumbo" className="image" />
        <div className="headline">{headline}</div>
        <ul className={page === "default" ? "social-media" : "social-media hide"}>
          <li>
            <a href="https://twitter.com/heru_hartanto" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter fa-2x" />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@heruhartanto" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-medium fa-2x" />
            </a>
          </li>
          <li>
            <a href="https://github.com/elukuro" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github fa-2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/heru-hartanto-618b575b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin fa-2x" />
            </a>
          </li>
          <li>
            <a href="mailto:heruhartanto110291@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-paper-plane fa-2x" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

// function mapStateToProps(state){
// 	return{landingpage:state.posts}
// }

export default connect(null, {})(Jumbo);
