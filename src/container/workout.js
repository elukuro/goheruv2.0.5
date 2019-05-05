import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import _ from 'lodash';

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
		axios.get('https://www.strava.com/api/v3/athletes/24329153/stats?access_token=990d13d1df65bb17994bdeed50b2578df7a5e95c').then((response)=> {
            this.setState({workout:response.data.recent_run_totals});
            this.setState({allworkout:response.data.all_run_totals})
 		 })

	}

	renderWorkoutList(){
        return(
            <div>
                <p>{this.state.workout.count}</p>
            </div>
        )
	}


	render(){
		return(
			<div className="project work-list">
				<div className="project-wrap">
					<div className="work-list-wrapper">
						<ul>
							{this.renderWorkoutList()}
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