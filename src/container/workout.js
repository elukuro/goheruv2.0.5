import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
// import _ from "lodash";
import Loading from "./loading";

class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: {},
      allworkout: {},
      loading: true,
      // athlete:{},
    };
  }

  componentDidMount() {
    const config = { headers: { "X-Requested-With": "XMLHttpRequest" } };
    const URL = "https://murmuring-sierra-98335.herokuapp.com/activity-list";
    axios.get(URL, config).then(response => {
      this.setState({
        workout: response.data.workout.recent_run_totals,
        allworkout: response.data.workout.ytd_run_totals,
        loading: false,
        // athlete:response.data.athlete,
      });
    });
  }

  renderWorkoutList() {
    const { workout } = this.state;
    return (
      <div className="workout-list-elem">
        <div className="workout-item">
          <p>{workout.count}</p>
          <span>Recent Run</span>
        </div>
        <div className="workout-item">
          <p>
            {Math.round((workout.distance / 1000) * 10) / 10}
            <span>KM</span>
          </p>
          <span>Total Distance</span>
        </div>
        <div className="workout-item">
          <p>
            {Math.round((workout.moving_time / 60 / 60) * 10) / 10}
            <span>Hours</span>
          </p>
          <span>Moving Time</span>
        </div>
      </div>
    );
  }

  renderYTDWorkoutList() {
    const { allworkout } = this.state;
    return (
      <div className="workout-all-list-elem">
        <div className="workout-item all">
          <p>{allworkout.count}</p>
          <span>All Run</span>
        </div>
        <div className="other">
          <div className="workout-item">
            <p>
              {Math.round((allworkout.distance / 1000) * 10) / 10}
              <span>KM</span>
            </p>
            <span>Total Distance</span>
          </div>
          <div className="workout-item moving-time">
            <p>
              {Math.round((allworkout.moving_time / 60 / 60) * 10) / 10}
              <span>Hours</span>
            </p>
            <span>Moving Time</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="project workout">
        <div className="project-wrap">
          <div className="workout-list">
            <h3>Recent activity</h3>
            {this.renderWorkoutList()}
            <h3>Year to date activity</h3>
            {this.renderYTDWorkoutList()}
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state){
// 	return{landingpage:state.posts}
// }

export default connect(null, {})(WorkList);
