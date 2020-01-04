import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "moment";
import _ from "lodash";
import Loading from "./loading";

class BlogLite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {},
      loading: true,
      heading: "Article that maybe worth to read (or not)",
      quote: "sometimes I write to express something inside me",
      text: {},
      medium: {}
    };
  }

  componentDidMount() {
    axios.get("http://goheru.com/public/postJson/all").then(response => {
      this.setState({ blog: response.data, loading: false });
    });

    axios.get("http://goheru.com/public/landingpageJson").then(response => {
      this.setState({ text: response.data });
    });

    axios
      .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@heruhartanto")
      .then(response => {
        localStorage.setItem("mediumData", JSON.stringify(response.data.items));
        this.setState({
          medium: JSON.parse(localStorage.getItem("mediumData"))
        });
      });
    // const now = new Date();
    // if (now.getHours() > 4) {
    //   localStorage.removeItem("mediumData");
    //   // //alert("di dalam lebih dari jam 5")
  }

  renderText() {
    const { text } = this.state;
    return _.map(text, item => {
      return (
        <p className="text" key={item.id}>
          {item.content_admin}
        </p>
      );
    });
  }

  // eslint-disable-next-line consistent-return
  renderBlog() {
    const { medium, blog } = this.state;

    if (medium.length > 0) {
      return _.map(blog.slice(0, 2), item => {
        return (
          <li key={item.id}>
            <p className="text">
              {item.created_at}
              #
              {item.category}
            </p>
            <h4 className="heading">
              <Link to={`/notes/${item.id}`}>{item.title}</Link>
            </h4>
          </li>
        );
      });
    }
  }

  // eslint-disable-next-line consistent-return
  renderMedium() {
    const { medium } = this.state;
    if (medium.length > 0) {
      return _.map(medium.slice(0, 3), (item, key) => {
        return (
          <li key={key}>
            <p className="text">
              {Moment(item.pubDate).format("DD MMM YYYY")}
              #
              {item.categories[0]}
            </p>
            <h4 className="heading">
              <Link to={`/medium/${key}`}>{item.title}</Link>
            </h4>
          </li>
        );
      });
    }
  }

  render() {
    const { loading, heading, quote } = this.state;
    // eslint-disable-next-line global-require
    const Image = require("../images/plant.png");
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="blog blog-lite">
        <div className="blog-wrap">
          <h2 className="heading">{heading}</h2>
          <p className="text">{quote}</p>
          <div className="blog-list">
            <ul>{this.renderMedium()}</ul>
          </div>
          <div className="blog-list">
            <ul>{this.renderBlog()}</ul>
          </div>
        </div>
        <div className="center">
          <img src={Image} className="image" alt="plant" width="100px" />
          <p className="right text footer-text">craft with Love</p>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state){
// 	return{landingpage:state.posts}
// }

export default connect(null, {})(BlogLite);
