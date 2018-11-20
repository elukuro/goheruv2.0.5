import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../container/nav';
import Jumbo from '../container/jumbo';
import Career from '../container/career';
import Skill from '../container/skill';
import Blog from '../container/blog';
import Project from '../container/project';
import WorkList from '../container/worklist';


class Work extends Component{
	constructor(props){
		super(props);
		this.state={
			hello:"this is a state and try change state"
		}
	}

	componentDidMount(){
	}

	render(){
		return(
			<div>
				<Nav active="work"/>
				<Jumbo image="code_2.png" page="work" alt="big-plant"/>
				<WorkList/>
			</div>
		)
	}
}

export default Work;