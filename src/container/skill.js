/* eslint-disable prefer-template */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React,{Component} from 'react';
import {connect} from 'react-redux';
// import axios from 'axios';
import _ from 'lodash';
import skill from '../data/skill';

class Skill extends Component{

	constructor(props){
		super(props);
		this.state={
			description:{
        // eslint-disable-next-line max-len
        description: "<p>when I was 17, I write my first code using pascal to solve algorithm question, many years later I still struggle to improve my skill set by following some online course and tackle online code challenge, and obviously it is up and down and long lifetime learning</p>"
      },
			skill:{},
			heading:"here what I'm good with"
		}
	}

	componentDidMount(){
		// axios.get('http://goheru.com/public/aboutJson').then((response)=>{
		// 	this.setState({description:response.data})
		// })

		// axios.get('http://goheru.com/public/skillJson').then((response)=>{
			this.setState({skill})
		// })
	}

	renderDescription(){
  const {description} = this.state;
  // return _.map(description,item=>{
    const cleanText = description.description.replace(/<\/?[^>]+(>|$)/g, "");
    return(
      <p className="text">
        {cleanText}
      </p>
    )
  // })
	}

	renderSkillItem(id){
    // eslint-disable-next-line react/destructuring-assignment
    const skillState = this.state.skill;
		// eslint-disable-next-line consistent-return
		return _.map(skillState, item=>{
      if(item.category===id){
        return(
          <li key={item.id}>
            <span className="skill-item">{item.description}</span>
            <span className="skill-score">
              {item.point/10}
               &nbsp;of 5
            </span>
          </li>
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
        <img src={require('../images/'+item.image)} alt="skill" className="image" />
        <p className="title">{item.title}</p>
        <ul className="skill-item-list">
          {this.renderSkillItem(item.id)}
        </ul>
      </li>
    )
  })
}

render(){
  const {heading} = this.state
  return(
    <div className="skill">
      <h2 className="heading">{heading}</h2>
      {this.renderDescription()}
      <ul className="skill-wrap">
        {this.renderLoop()}
      </ul>
    </div>
  )
}
}

export default connect(null,{})(Skill);
