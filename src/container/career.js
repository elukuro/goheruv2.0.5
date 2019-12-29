import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import _ from "lodash";

class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {},
      career: {},
      heading: "Milestone of my career as developer"
    };
  }

  componentDidMount() {
    axios.get("http://goheru.com/public/aboutJson").then(response => {
      this.setState({ about: response.data });
    });
    axios.get("http://goheru.com/public/careerJson").then(response => {
      this.setState({ career: response.data });
    });
  }

  renderCareer() {
    const {about} = this.state
    return _.map(about, item => {
      return (
        <div key={item.heading}>
          <h2 className="heading">{item.heading}</h2>
          <p className="text">{item.lead}</p>
        </div>
      );
    });
  }

  renderJob() {
    const{career} = this.state
    return _.map(career, item => {
      const cleanText = item.description.replace(/<\/?[^>]+(>|$)/g, "");
      return (
        <div className="job-list" key={item.id}>
          <h3 className="job-title">
            {item.title}
            <span>
                (
              { item.years }
                )
            </span>
          </h3>
          <p className="job-desk">{item.jobdesk}</p>
          <p className="text">{cleanText}</p>
        </div>
      );
    });
  }

  render() {
    const {heading} = this.state
    return (
      <div>
        <div className="career">
          {this.renderCareer()}
          <div className="job">
            <h2 className="heading">{heading}</h2>
            {this.renderJob()}
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state){
// 	return{aboutpage:state.career}
// }

export default connect(null, {})(Career);
