import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';

class Skill extends Component{

	constructor(props){
		super(props);
		this.state={
			description:{},
			skill:{},	
			heading:"here what I'm good with"
		}
	}

	componentDidMount(){
		axios.get('http://goheru.com/public/aboutJson').then((response)=>{
			this.setState({description:response.data})
		})

		axios.get('http://goheru.com/public/skillJson').then((response)=>{
			this.setState({skill:response.data})
		})
	}

	renderDescription(){
		return _.map(this.state.description,item=>{
			var cleanText = item.description.replace(/<\/?[^>]+(>|$)/g, "");
			return(
				<p className="text" key={item.id}>{cleanText}</p>
			)		
		})
	}

	renderSkillItem(id){
		return _.map(this.state.skill,item=>{
				if(item.category==id){
					return(
						<li key={item.id}><span className="skill-item">{item.description}</span><span className="skill-score">{item.point}%</span></li>	
					)
				}	
		})	
	}

	renderLoop(){
		const loop=[
			{id:0,title:'web development',image:'code.png'},
			{id:1,title:'tools',image:'tools.png'},
			{id:2,title:'design',image:'design.png'}
		];
		return loop.map((item)=>{
			return(
				<li className="skill-card" key={item.id}>
						<img src={require('../images/'+item.image)} className="image"/>
						<p className="title">{item.title}</p>
						<ul className="skill-item-list">
							{this.renderSkillItem(item.id)}
						</ul>
				</li>
			)
		})
	}

	render(){
		return(
			<div className="skill"> 
				<h2  className="heading">{this.state.heading}</h2>
				{this.renderDescription()}
				<ul className="skill-wrap">
					{this.renderLoop()}
				</ul>
			</div>
		)
	}
}

export default connect(null,{})(Skill);