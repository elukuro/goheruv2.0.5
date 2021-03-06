import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
import Loading from "./loading";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {},
      loading: true
    };
  }

  componentDidMount() {
    axios.get("http://goheru.com/public/postJson/all").then(response => {
      this.setState({ blog: response.data, loading: false });
    });
  }

  // eslint-disable-next-line consistent-return
  renderBlog() {
    const { blog } = this.state;
    if (blog.length > 0) {
      return _.map(blog, item => {
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
  render() {
    const {loading} = this.state;
    if (loading) {
      return <Loading />;
    }
    if(!loading){
      return (
        <div className="blog">
          <div className="blog-wrap">
            <div className="blog-list">
              <ul>{this.renderBlog()}</ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

// function mapStateToProps(state){
// 	return{landingpage:state.posts}
// }

export default connect(null, {})(Blog);
