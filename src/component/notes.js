import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../container/nav';
import Jumbo from '../container/jumbo';
import Career from '../container/career';
import Skill from '../container/skill';
import Blog from '../container/blog';

class Notes extends Component{
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
				<Nav active="notes"/>
				<Jumbo image="big-plant.png" page="notes" alt="big-plant"/>
				<Blog/>
			</div>
		)
	}
}

export default Notes;