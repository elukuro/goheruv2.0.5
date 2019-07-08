import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

class Loading extends Component{
	render(){
		return(
			<div className="loading">
				<div className="loading-wrapper">
					<div className="plant-logo"></div>
					<h1>homina homina homina..</h1>
				</div>
			</div>
		)
	}
}

export default Loading;