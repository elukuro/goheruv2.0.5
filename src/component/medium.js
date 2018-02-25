import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../container/nav';
import Jumbo from '../container/jumbo';
import Medium from '../container/medium';

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
				<Nav active="medium"/>
				<Jumbo image="big-plant.png" page="medium"/>
				<Medium/>
			</div>
		)
	}
}

export default Notes;