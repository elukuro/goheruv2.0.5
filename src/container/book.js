/* eslint-disable no-underscore-dangle */
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import _ from "lodash";
// import convert from "xml-js";
import Loading from "./loading";
import Utils from "../_Utils";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {},
      loading: true
    };
  }

  componentDidMount() {
    // const now = new Date();
    const config = { headers: { "X-Requested-With": "XMLHttpRequest" } };
    // const CROS_ANYWHERE = "https://cors-anywhere.herokuapp.com";
    // const GOODREAD = "https://www.goodreads.com/review/list/78987652.xml";
    // const KEY = "dQEr3Ou4hBICilnbCk4Q&v=2&id=78987652-heru-hartanto";
    const URL = 'https://fierce-headland-02005.herokuapp.com/my-book'

    if(Utils.getCookie('cookie') === "ok"){
        this.setState({
          loading:false,
          books:JSON.parse(localStorage.getItem('bookData'))
        })
    }else{
      axios.get(URL,config)
        .then(response => {
          this.setState({
            loading: false,
            books: response.data
          });
          Utils.generateCookies('cookie');
          localStorage.setItem(
            "bookData",
            JSON.stringify(response.data)
          );
        });
      }
    };

  renderBooks() {
    const { books } = this.state;
    return _.map(books, (item, key) => {
      return (
        <li key={key} className="book-list-card">
          <a href={item.link[0]}>
            <img src={item.book[0].image_url[0]} alt={item.book[0].title_without_series[0]} />
            <div className="book-list-item">
              <p className="text">
                Avg.Rating: (
                { item.book[0].ratings_count[0]}
                )
              </p>
              <h4 title={item.book[0].title_without_series[0]} className="heading">
                {item.book[0].title_without_series[0]}
              </h4>
              <span className="author">
                Author :
                {item.book[0].authors[0].author[0].name[0]}
              </span>
            </div>
          </a>
        </li>
      );
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="book">
        <div className="book-list">
          <div className="book-list-wrapper">
            <ul>{this.renderBooks()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state){
// 	return{landingpage:state.posts}
// }

export default connect(null, {})(Books);
