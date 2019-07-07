import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import _ from 'lodash';
import CountUp from 'react-countup';


class WorkList extends Component{

	constructor(props){
		super(props);
		this.state={
            workout:{},
            allworkout:{},
			heading:"",
			text:{}
		}
	}

	componentDidMount(){
		var config = {headers: {"X-Requested-With" : "XMLHttpRequest"}};
		axios.get('https://cors-anywhere.herokuapp.com/http://goheru.com/workout.json',config).then((response)=> {
            this.setState({workout:response.data.recent_run_totals});
			// this.setState({allworkout:response.data.all_run_totals})
 		 })

	}

	renderWorkoutList(){
        return(
			<div className="workout-list-elem">
					<div className="workout-item">
						<p>{this.state.workout.count}</p>
						<span>Recent Run</span>
					</div>
					<div className="workout-item">
						<p>{Math.round(this.state.workout.distance/1000*10)/10} <span>KM</span></p>
						<span>Total Distance</span>
					</div>
					<div className="workout-item">
						<p>{Math.round(this.state.workout.moving_time/60/60*10)/10} <span>Hours</span></p>
						<span>Moving Time</span>
					</div>
			</div>
        )
	}


	render(){
		return(
			<div className="project workout">
				<div className="project-wrap">
					<div className="workout-list">
						<h3>Recent Activity</h3>
						{this.renderWorkoutList()}
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