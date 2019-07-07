import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../container/nav';
import Jumbo from '../container/jumbo';
import Career from '../container/career';
import Skill from '../container/skill';
import Blog from '../container/blog';
import axios from 'axios';
import Moment from 'moment';
import Loading from '../container/loading';

class DetailMedium extends Component{
	constructor(props){
		super(props);
		this.state={
			content:{},
			loading:true
		}
	}

	componentDidMount(){
		const {id}=this.props.match.params;
		//console.log(id);
		axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@heruhartanto').then((response)=> {
				this.setState({content:response.data.items[id],loading:false});
				//console.log(response.data.items[id]);
 		 })
	}

	renderDetail(){
		var item=this.state.content;
		console.log(item)
		if(this.state.loading){
			return(
				<Loading/>
			)
		}else{
				return(
					<div className="detail detail-medium" key={item.title}>
						<p className="date">{Moment(item.pubDate).format('DD MMM YYYY')}  #{item.categories[0]}</p>
						<div className="detail-content" dangerouslySetInnerHTML={{__html: item.content}}></div>
						<p className="detail-medium-original-source"><a href={item.link}>Read original source from medium</a></p>
						<Link className="detail-link" to="/medium"> Back to List</Link>
					</div>
				)
		}
	}


	render(){
		return(
			<div>
				<Nav active="medium"/>
				{this.renderDetail()}
			</div>
		)
	}
}

export default DetailMedium;