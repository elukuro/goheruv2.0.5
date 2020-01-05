import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import _ from 'lodash';

class WorkList extends Component{

	constructor(props){
		super(props);
		this.state={
			portfolio:{},
			text:{}
		}
	}

	componentDidMount(){
		axios.get('http://goheru.com/public/portfolioJson').then((response)=> {
    			this.setState({portfolio:response.data});
 		 })
		axios.get('http://goheru.com/public/landingpageJson').then((response)=> {
    			this.setState({text:response.data});
 		 })

	}

	renderWorkList(){
  const {portfolio} = this.state
  return _.map(portfolio,item=>{
    const cleanText = item.description.replace(/<\/?[^>]+(>+|$)/g, "");
    const cleanSpace=cleanText.replace(/&nbsp;/gi,'');
    // const image="http://goheru.com/public/"+item.thumbnail;
    return(
      <li key={item.id} className="work-list-card">
        {/* <img src={image} className="thumbnail"/> */}
        <div className="work-list-item">
          <h4 className="heading"><a href={item.link}>{item.title}</a></h4>
          <p className="text">{cleanSpace}</p>
        </div>
      </li>
    )
  })
	}

	renderText(){
  const {text} = this.state
  return _.map(text,item=>{
    return(
      <p className="text" key={item.id}>{item.heading}</p>
    )
  })
	}


render(){
  return(
    <div className="project work-list">
      <div className="project-wrap">
        <div className="work-list-wrapper">
          <ul>
            {this.renderWorkList()}
          </ul>
        </div>
      </div>

    </div>
  )
}
}

// function mapStateToProps(state){
// 	return{landingpage:state.posts}
// }

export default connect(null,{})(WorkList);
