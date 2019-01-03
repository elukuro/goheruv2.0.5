import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';
import Loading from './loading';
import Moment from 'moment';
import convert from 'xml-js';

class Books extends Component{

	constructor(props){
		super(props);
		this.state={
			books:{},
			loading:true
		}
	}

	componentDidMount(){
		var now = new Date();
		if(now.getHours() > 4 && now.getHours() < 10){
			localStorage.removeItem("bookData");
			var config = {headers: {"X-Requested-With" : "XMLHttpRequest"}};
			axios.get('https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/78987652.xml?key=dQEr3Ou4hBICilnbCk4Q&v=2&id=78987652-heru-hartanto&shelf=read&per_page=200',config).then((response)=> {
                var result = convert.xml2json(response.data, {compact: true, spaces: 4});
				var jsonResult=JSON.parse(result);
				this.setState({
					loading:false,
					books:jsonResult.GoodreadsResponse.reviews.review
				});
				localStorage.setItem('bookData',JSON.stringify(jsonResult.GoodreadsResponse.reviews.review));
			})
		}else{
			if(localStorage.getItem("bookData")){
				axios.get('https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/78987652.xml?key=dQEr3Ou4hBICilnbCk4Q&v=2&id=78987652-heru-hartanto&shelf=read&per_page=200',config).then((response)=> {
                var result = convert.xml2json(response.data, {compact: true, spaces: 4});
				var jsonResult=JSON.parse(result);
				this.setState({
					loading:false,
					books:jsonResult.GoodreadsResponse.reviews.review
				});
					localStorage.setItem('bookData',JSON.stringify(jsonResult.GoodreadsResponse.reviews.review));
				})
			}else{
				this.setState({
					loading:false,
					books:jsonResult.GoodreadsResponse.reviews.review
				});
			}
		} 
	}

	renderBooks(){
		return _.map(this.state.books,(item,key)=>{
			return(
				<li key={key} className="book-list-card">
				<a href={item.url._cdata}>
					<img src={item.book.image_url._text} alt={item.book.image_url._text}/>
					<div className="book-list-item">
						<p className="text">Avg.Rating: ( {item.book.average_rating._text} ) </p>
						<p className="text">Read / update: {Moment(item.date_updated).format('MMM YYYY')}</p>
						<h4 className="heading">{item.book.title._text}</h4>
						<span className="author"> Author : {item.book.authors.author.name._text}</span>
					</div>
				</a>
				</li>
			)
		})
	}


	render(){
		if(this.state.loading){
			return(
				<Loading/>
			)
		}else{
			return(
				<div className="book">
					<div className="book-list">
						<div className="book-list-wrapper">
							<ul>
								{this.renderBooks()}
							</ul>
						</div>
					</div>
					
				</div>
			)
		}
		
	}
}

// function mapStateToProps(state){
// 	return{landingpage:state.posts}
// }

export default connect(null,{})(Books);