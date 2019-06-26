import React, { Component } from 'react';
import Nav from '../container/nav';
import Jumbo from '../container/jumbo';
import WorkoutList from '../container/workout';


class Work extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
	}

	render(){
		return(
			<div>
				<Nav active="workout"/>
				<Jumbo image="code_2.png" page="work" alt="big-plant"/>
				<WorkoutList/>
			</div>
		)
	}
}

export default Work;