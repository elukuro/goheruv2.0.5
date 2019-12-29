/* eslint-disable no-underscore-dangle */
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import _ from "lodash";
import convert from "xml-js";
import Loading from "./loading";

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
    const CROS_ANYWHERE = "https://cors-anywhere.herokuapp.com";
    const GOODREAD = "https://www.goodreads.com/review/list/78987652.xml";
    const KEY = "dQEr3Ou4hBICilnbCk4Q&v=2&id=78987652-heru-hartanto";

    axios.get(`${CROS_ANYWHERE}/${GOODREAD}?key=${KEY}&shelf=read&per_page=200`,config)
      .then(response => {
        const result = convert.xml2json(response.data, { compact: true, spaces: 4 });
        const jsonResult = JSON.parse(result);
        this.setState({
          loading: false,
          books: jsonResult.GoodreadsResponse.reviews.review
        });
        // localStorage.setItem(
        //   "bookData",
        //   JSON.stringify(jsonResult.GoodreadsResponse.reviews.review)
        // );
      });
  }

  renderBooks() {
    const { books } = this.state;
    return _.map(books, (item, key) => {
      return (
        <li key={key} className="book-list-card">
          <a href={item.url._cdata}>
            <img src={item.book.image_url._text} alt={item.book.image_url._text} />
            <div className="book-list-item">
              <p className="text">
                Avg.Rating: (
                { item.book.average_rating._text}
                )
              </p>
              <h4 title={item.book.title._text} className="heading">
                {item.book.title._text}
              </h4>
              <span className="author">
                Author :
                {item.book.authors.author.name._text}
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
