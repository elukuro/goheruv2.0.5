import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../container/nav';
import Jumbo from '../container/jumbo';
import Career from '../container/career';
import Skill from '../container/skill';
import Blog from '../container/blog';
import axios from 'axios';
import Loading from '../container/loading';

class Detail extends Component{
	constructor(props){
		super(props);
		this.state={
			content:{},
			loading:true
		}
	}

	componentDidMount(){
		const {id}=this.props.match.params;
		axios.get('http://goheru.com/public/postJson/'+id).then((response)=> {
				this.setState({content:response.data,loading:false});
 		 })
	}

	renderDetail(){
		if(this.state.loading){
			return(
				<Loading/>
			)
		}else{
			return _.map(this.state.content,item=>{
				return(
					<div className="detail" key={item.id}>
						<p className="date">{item.created_at} #{item.category}</p>
						<h1 className="detail-title">{item.title}</h1>
						<div className="detail-content" dangerouslySetInnerHTML={{__html: item.content}}></div>
						<Link className="detail-link" to="/notes"> Back to List</Link>
					</div>
				)
			})
		}
	}


	render(){
		return(
			<div>
				<Nav active="notes"/>
				{this.renderDetail()}
			</div>
		)
	}
}

export default Detail;