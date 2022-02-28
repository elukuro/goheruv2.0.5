/* eslint-disable global-require */
import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
// import _ from "lodash";
import PropTypes from "prop-types";
import Loading from "./loading";

class Jumbo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // landingpage: {},
      loading: true,
      mediumHeading: "Article that maybe worth to read (or not)",
      workHeading: "Place to preview my work and archivement, my personal project, others",
      bookHeading: "Read fourty five minute a day and feel the diference",
      workoutHeading: "Run Ruun Ruuuuun!",
      // eslint-disable-next-line max-len
      homepageHeading:
        "I'am ISTJ-A that work as web developer, feed my brain with book and strength my mind with running"
    };
  }

  componentDidMount() {
    // axios.get("http://goheru.com/public/landingpageJson").then(response => {
    //   this.setState({ landingpage: response.data, loading: false });
    // });
    this.setState({ loading: false });
  }

  renderPost() {
    const { page } = this.props;
    const {
      // landingpage,
      workHeading,
      mediumHeading,
      bookHeading,
      workoutHeading,
      homepageHeading
    } = this.state;
    let text = null;
    if (page === "default") {
      // return _.map(landingpage, item => {
      //   return (
      //     <p key={item.id} className="headline">
      //       {item.content}
      //     </p>
      //   );
      // });
      text = `${homepageHeading}`;
    }
    // if (page === "notes") {
    //   return _.map(landingpage, item => {
    //     return (
    //       <p key={item.id} className="headline">
    //         {item.content_admin}
    //       </p>
    //     );
    //   });
    // }
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
        <img
          src={jumboImage}
          alt="jumbo"
          className={page === "medium" || page === "book" ? "image smaller" : "image"}
        />
        <div className="headline">{headline}</div>
        <ul className={page === "default" ? "social-media" : "social-media hide"}>
          <li>
            <a href="https://twitter.com/goheru_" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter fa-2x" />
              Twitter
            </a>
          </li>
          <li>
            <a href="https://goheru.medium.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-medium fa-2x" />
              Medium
            </a>
          </li>
          <li>
            <a href="https://github.com/elukuro" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github fa-2x" />
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/heru-hartanto-618b575b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin fa-2x" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:heruhartanto110291@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-paper-plane fa-2x" />
              Email
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

Jumbo.propTypes = {
  page: PropTypes.string.isRequired
};

export default connect(null, {})(Jumbo);
