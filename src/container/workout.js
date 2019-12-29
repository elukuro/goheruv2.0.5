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
      loading: true
    };
  }

  componentDidMount() {
    const config = { headers: { "X-Requested-With": "XMLHttpRequest" } };
    axios.get("http://goheru.com/workout.json", config).then(response => {
      this.setState({
        workout: response.data.recent_run_totals,
        allworkout: response.data.all_run_totals,
        loading: false
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

  renderAllTimeWorkoutList() {
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
            <h3>Recent Activity</h3>
            {this.renderWorkoutList()}
            <h3>All Activity</h3>
            {this.renderAllTimeWorkoutList()}
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
