import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../container/nav';
import Jumbo from '../container/jumbo';
import Book from '../container/book';

class Books extends Component{
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
				<Nav active="book"/>
				<Jumbo image="big-plant.png" page="book" alt="big-plant"/>
				<Book/>
			</div>
		)
	}
}

export default Books;