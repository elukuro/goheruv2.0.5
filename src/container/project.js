import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

class Project extends Component{

	constructor(props){
		super(props);
		this.state={
			portfolio:{},
			heading:"Project, activity, goal that I recently struggle with",
			text:{}
		}
	}

	componentDidMount(){
		axios.get('http://goheru.com/public/portfolioJson').then((response)=> {
    			this.setState({portfolio:response.data});
 		 })
		axios.get('http://goheru.com/public/landingpageJson').then((response)=> {
    			this.setState({text:response.data});
 		 })

	}

	renderProject(){
		return _.map(this.state.portfolio,item=>{
			var cleanText = item.description.replace(/<\/?[^>]+(>+|$)/g, "");
			var cleanSpace=cleanText.replace(/&nbsp;/gi,'');
			return(
				<li key={item.id}>
					<h4 className="heading"><a href={item.link}>{item.title}</a> <span></span></h4>
					<p className="text">{cleanSpace}</p>
				</li>
			)
		})
	}

	renderText(){
		return _.map(this.state.text,item=>{
			return(
				<p className="text" key={item.id}>{item.heading}</p>		
			)
		})
	}


	render(){
		return(
			<div className="project">
				<div className="project-wrap">
					<h2 className="heading">{this.state.heading}</h2>
					{this.renderText()}
					<div className="project-list">
						<ul>
							{this.renderProject()}
						</ul>
					</div>
					<img src={require('../images/plant.png')} className="image"/>
					<p className="right text">created 2017</p>
				</div>
				
			</div>
		)
	}
}

// function mapStateToProps(state){
// 	return{landingpage:state.posts}
// }

export default connect(null,{})(Project);