import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

class Project extends Component{

	constructor(props){
		super(props);
		this.state={
			portfolio:{}
		}
	}

	componentDidMount(){
		axios.get('http://goheru.com/public/portfolioJson').then((response)=> {
    			this.setState({portfolio:response.data});
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


	render(){
		return(
			<div className="project">
				<div className="project-wrap">
					<h2 className="heading">Project, activity, goal that I recently I want to do or doing</h2>
					<p className="text">Here is some of my side-project / product that I develop to maintain my existance in the web development world and to maintain my skill and also bla bla bla its hard to find a nice</p>
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