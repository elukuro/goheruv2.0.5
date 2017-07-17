import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';
import Loading from './loading';

class Jumbo extends Component{

	constructor(props){
		super(props);
		this.state={
			landingpage:{},
			loading:true
		}
	}

	componentDidMount(){
		axios.get('http://goheru.com/public/landingpageJson').then((response)=> {
    			this.setState({landingpage:response.data,loading:false});
 		 })
	}
	renderPost(){
		const page=this.props.page;
		if(page=='default'){
			return _.map(this.state.landingpage,item=>{
				return(
					<p key={item.id} className="headline">{item.content}</p>
				)
			})
		}else if(page=='notes'){
			return _.map(this.state.landingpage,item=>{
				return(
					<p key={item.id} className="headline">{item.content_admin}</p>
				)
			})
		}
	}
	render(){
		if(this.state.loading){
			return(
				<Loading/>
			)
		}else{
			return(
				<div className="jumbo">
					<img src={require('../images/'+this.props.image)} className="image"/>
					{this.renderPost()}
					<ul className={(this.props.page=='default') ? 'social-media' : 'social-media hide'}>
						<li><a href="https://twitter.com/heru_hartanto" target="_blank"><i className="fa fa-twitter fa-2x"></i></a> </li><li><a href="https://medium.com/@heruhartanto" target="_blank"><i className="fa fa-medium fa-2x"></i></a></li><li><a href="https://github.com/elukuro" target="_blank"><i className="fa fa-github fa-2x"></i></a></li><li><a href="https://www.linkedin.com/in/heru-hartanto-618b575b" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a></li><li><a href="mailto:heruhartanto110291@gmail.com" target="_blank"><i className="fa fa-paper-plane fa-2x"></i></a></li>
	    			</ul>
				</div>
			)
		}
	}
}	

// function mapStateToProps(state){
// 	return{landingpage:state.posts}
// }

export default connect(null,{})(Jumbo);