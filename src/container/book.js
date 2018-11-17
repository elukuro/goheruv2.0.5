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
		var config = {headers: {"X-Requested-With" : "XMLHttpRequest"}};
		axios.get('https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/78987652.xml?key=dQEr3Ou4hBICilnbCk4Q&v=2&id=78987652-heru-hartanto&shelf=read&per_page=200',config).then((response)=> {
                var result = convert.xml2json(response.data, {compact: true, spaces: 4});
				var jsonResult=JSON.parse(result);

				this.setState({
					loading:false,
					books:jsonResult.GoodreadsResponse.reviews.review
				});		
				console.log(jsonResult.GoodreadsResponse.reviews.review)
		})
		  
	}

	renderBooks(){
		return _.map(this.state.books,(item,key)=>{
			return(
				<li key={key} className="book-list-card">
					<img src={item.book.image_url._text}/>
					<div className="book-list-item">
						<p className="text">Avg.Rating: ( {item.book.average_rating._text} ) </p>
						<p className="text">Read: {Moment(item.date_updated).format('DD MMM YYYY')}</p>
						<h4 className="heading"><a href={item.url._cdata}>{item.book.title._text}</a></h4>
						<span> Author : {item.book.authors.author.name._text}</span>
					</div>
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