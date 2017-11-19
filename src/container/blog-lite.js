import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';
import Loading from './loading';

class BlogLite extends Component{

	constructor(props){
		super(props);
		this.state={
			blog:{},
			loading:true,
			heading:"Here my latest note that I write",
			quote:"sometime I stop and back to one of this note to remaind me how great my life is",
			text:{}
		}
	}

	componentDidMount(){
		axios.get('http://goheru.com/public/postJson/all').then((response)=> {
				this.setState({blog:response.data,loading:false});
 		 })

		axios.get('http://goheru.com/public/landingpageJson').then((response)=> {
    			this.setState({text:response.data});
 		 })
	}

	renderText(){
		return _.map(this.state.text,item=>{
			return(
				<p className="text" key={item.id}>{item.content_admin}</p>		
			)
		})
	}


	renderBlog(){

		return _.map(this.state.blog.slice(0,3),item=>{
			return(
				<li key={item.id}>
					<p className="text">{item.created_at} #{item.category}</p>
					<h4 className="heading"><Link to={`/notes/${item.id}`}>{item.title}</Link></h4>
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
								{this.renderBlog()}
							</ul>
						</div>
					</div>
					<div className="center">
					<img src={require('../images/plant.png')} className="image"/>
					<p className="right text">created 2017</p>
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