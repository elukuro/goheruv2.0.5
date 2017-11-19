import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../container/nav';
import Jumbo from '../container/jumbo';
import Career from '../container/career';
import Skill from '../container/skill';
import Project from '../container/project';
import BlogLite from '../container/blog-lite';
import axios from 'axios';
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			hello:"this is a state and try change state",
			loading:true
		}
	}

	// componentDidMount(){
	// 	axios.get('http://goheru.com/public/portfolioJson').then((response)=> {
 //    			setTimeout(function() { this.setState({loading:false})}.bind(this), 3000);
 // 		 })
	// }

	render(){
			return(
				<div>
					<Nav active="home"/>
					<Jumbo image="sunrise.png" page="default"/>
					<Career/>
					<Skill/>
					<BlogLite/>
				</div>
			)
	}
}

export default App;