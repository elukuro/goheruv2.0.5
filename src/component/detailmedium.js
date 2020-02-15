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
      loading: true,
      darkMode: false,
    };
    this.changeDarkMode = this.changeDarkMode.bind(this);
  }

  componentDidMount() {
    const {match} = this.props;
    const {id} = match.params;
    const contentData = JSON.parse(localStorage.getItem('mediumData'));
    if(contentData == null){
      const url = "https://medium.com/feed/@heruhartanto";
      axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${url}`).then((response) => {
        this.setState({ content: response.data.items[id], loading: false });
      })
    }else{
      this.setState({ content: contentData[id], loading: false });
    }
    window.scrollTo({ top: 0});
  }

  changeDarkMode(){
    const {darkMode} = this.state;
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({darkMode:!darkMode});
    if(darkMode === false ){
      document.body.style.backgroundColor = "#333";
    }else{
      document.body.style.backgroundColor = "#fff";
    }
  }


  renderDetail() {
    const { content, loading,darkMode } = this.state;
    const item = content;
    if (loading) {
      return <Loading />;
    }
    return (
      <div className={(darkMode === true) ? "detail detail-medium--dark" : "detail detail-medium"} key={item.title}>
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
    const {darkMode } = this.state;
    return (
      <div>
        <Nav active="medium" detail="true" isDarkMode={darkMode} darkMode={this.changeDarkMode} />
        {this.renderDetail()}
      </div>
    );
  }
}

export default DetailMedium;
