import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Nav from "../container/nav";
import Loading from "../container/loading";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
      loading: true
    };
  }

  componentDidMount() {
    const { match } = this.props
    const { id } = match.params;
    axios.get(`http://goheru.com/public/postJson/${id}`).then(response => {
      this.setState({ content: response.data, loading: false });
    });
  }

  renderDetail() {
    const { loading, content } = this.state;
    if (loading) {
      return <Loading />;
    }
    return _.map(content, item => {
      return (
        <div className="detail" key={item.id}>
          <p className="date">
            {item.created_at}
            #
            {item.category}
          </p>
          <h1 className="detail-title">{item.title}</h1>
          <div
            className="detail-content"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
          <Link className="detail-link" to="/notes">
            {" "}
            Back to List
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Nav active="notes" />
        {this.renderDetail()}
      </div>
    );
  }
}
Detail.defaultProps = {
  id:'0'
}

Detail.propTypes = {
  id: PropTypes.string
};

export default Detail;
