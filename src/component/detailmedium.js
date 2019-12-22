import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "moment";
import Nav from "../container/nav";
import Loading from "../container/loading";

class DetailMedium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
      loading: true
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const id = match.params;
    // console.log(id);
    const URL =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@heruhartanto";
    axios.get(URL).then(response => {
      this.setState({ content: response.data.items[id], loading: false });
    });
  }

  renderDetail() {
    const { content, loading } = this.state;
    const { item } = content.item;
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="detail detail-medium" key={item.title}>
        <p className="date">
          {Moment(item.pubDate).format("DD MMM YYYY")}
          #
          {item.categories[0]}
        </p>
        <div className="detail-content" dangerouslySetInnerHTML={{ __html: item.content }} />
        <p className="detail-medium-original-source">
          <a href={item.link}>Read original source from medium</a>
        </p>
        <Link className="detail-link" to="/medium">
          {" "}
          Back to List
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Nav active="medium" />
        {this.renderDetail()}
      </div>
    );
  }
}

export default DetailMedium;
