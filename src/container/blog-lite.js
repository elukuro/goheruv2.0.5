import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Moment from 'moment';
import _ from 'lodash';
import Loading from './loading';


class BlogLite extends Component{

	constructor(props){
		super(props);
		this.state={
			blog:{},
			loading:true,
			heading:"Some of my note that I write",
			quote:"Place to remind myself how great my life is",
			text:{},
			medium:{}
		}
	}

	componentDidMount(){
		axios.get('http://goheru.com/public/postJson/all').then((response)=> {
				this.setState({blog:response.data,loading:false});
 		 })

		axios.get('http://goheru.com/public/landingpageJson').then((response)=> {
    			this.setState({text:response.data});
		})
		  
		var now = new Date();
		if(now.getHours() > 5 && localStorage.getItem("flagMedium")===null){
			localStorage.removeItem("mediumData");
			//alert("di dalam lebih dari jam 5")
		}

		if (localStorage.getItem("mediumData") === null) {
			axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@heruhartanto').then((response)=> {
				this.setState({medium:response.data.items});
				localStorage.setItem('mediumData',JSON.stringify(response.data.items));
				localStorage.setItem('flagMedium','true');
 		 	})
		}else{
			this.setState({
				medium:JSON.parse(localStorage.getItem("mediumData"))
			});
			localStorage.setItem('flagMedium','true');
			if(now.getHours()>20){
				localStorage.removeItem("flagMedium");
				//alert("di dalam lebih else lebih dari menit ke 10")
			}
		}
	}

	renderText(){
		return _.map(this.state.text,item=>{
			return(
				<p className="text" key={item.id}>{item.content_admin}</p>		
			)
		})
	}


	renderBlog(){

		return _.map(this.state.blog.slice(0,2),item=>{
			return(
				<li key={item.id}>
					<p className="text">{item.created_at} #{item.category}</p>
					<h4 className="heading"><Link to={`/notes/${item.id}`}>{item.title}</Link></h4>
				</li>
			)
		})
	}

	renderMedium(){
		return _.map(this.state.medium.slice(0,3),(item,key)=>{
			return(
				<li key={key}>
					<p className="text">{Moment(item.pubDate).format('DD MMM YYYY')} #{item.categories[0]}
					</p>
					<h4 className="heading"><Link to={`/medium/${key}`}>{item.title}</Link></h4>
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
				<div className="blog blog-lite">
					<div className="blog-wrap">
					<h2 className="heading">{this.state.heading}</h2>
					<p className="text">{this.state.quote}</p>
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
					<div className="center">
					<img src={require('../images/plant.png')} className="image" alt="plant"/>
					<p className="right text footer-text">craft with love 2016-2018</p>
					</div>
				</div>
			)
		}
		
	}
}

// function mapStateToProps(state){
// 	return{landingpage:state.posts}
// }

export default connect(null,{})(BlogLite);