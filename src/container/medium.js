import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';
import Loading from './loading';
import Moment from 'moment';

class Medium extends Component{

	constructor(props){
		super(props);
		this.state={
			medium:{},
			blog:{},
			loading:true
		}
	}

	componentDidMount(){

		var now = new Date();

		if(now.getHours() > 4 ){
			localStorage.removeItem("mediumData");
			axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@heruhartanto').then((response)=> {
				this.setState({medium:response.data.items,loading:false});
				localStorage.setItem('mediumData',JSON.stringify(response.data.items));
			})
		}else{
			if(localStorage.getItem("mediumData")){
				this.setState({
					loading:false,
					medium:JSON.parse(localStorage.getItem("mediumData"))
				});
			}else{
				axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@heruhartanto').then((response)=> {
					this.setState({medium:response.data.items,loading:false});
					localStorage.setItem('mediumData',JSON.stringify(response.data.items));
				})
			}
		}

		axios.get('http://goheru.com/public/postJson/all').then((response)=> {
				this.setState({blog:response.data,loading:false});
		})

	}



	renderMedium(){
		const divStyle = {
			padding: '2px 4px',
			background:'#f2c94c',
			borderRadius:'4px',
			color:'#fff'
		  };
		if(this.state.medium.length >0){
		return _.map(this.state.medium,(item,key)=>{
			return(
				<li key={key}>
					<p className="text">{Moment(item.pubDate).format('DD MMM YYYY')} #{item.categories[0]}
					</p>
					<h4 className="heading"><Link to={`/medium/${key}`}>{item.title}</Link> <span style={divStyle}>medium</span></h4>
				</li>
			)
		})
		}else{
			console.log("medium list is not rendered")
		}
	}

	renderBlog(){
		if(this.state.blog.length >0){
			return _.map(this.state.blog,item=>{
				return(
					<li key={item.id}>
						<p className="text">{item.created_at} #{item.category}</p>
						<h4 className="heading"><Link to={`/notes/${item.id}`}>{item.title}</Link></h4>
					</li>
				)
			})
		}
	}


	render(){
		if(this.state.loading){
			return(
				<Loading/>
			)
		}else{
			return(
				<div className="blog">
					<div className="blog-wrap">
						<div className="blog-list">
							<ul>
								{this.renderMedium()}
							</ul>
						</div>
						<div className="blog-list">
							<ul>
								{this.renderBlog()}
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

export default connect(null,{})(Medium);
