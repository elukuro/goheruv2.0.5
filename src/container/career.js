import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import _ from "lodash";
import career from "../data/career";

class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {
        heading: 'Hello and have a great day',
        // eslint-disable-next-line max-len
        lead: "I'am heru, I have years experience  work as a  web developer  for several company from startup to multinational company, obviously it is not mean that  I'am the best but I love the progress"
      },
      career: {},
      heading: "Milestone of my career as developer"
    };
  }

  componentDidMount() {
    // axios.get("http://goheru.com/public/aboutJson").then(response => {
    //   this.setState({ about: response.data });
    // });
    // axios.get("http://goheru.com/public/careerJson").then(response => {
    //   this.setState({ career: response.data });
    // });
    this.setState({career})
  }

  // renderCareer() {
  //   const {about} = this.state
  //   return _.map(about, item => {
  //     return (
  //       <div key={item.heading}>
  //         <h2 className="heading">{item.heading}</h2>
  //         <p className="text">{item.lead}</p>
  //       </div>
  //     );
  //   });
  // }

  renderJob() {
    // eslint-disable-next-line react/destructuring-assignment
    const careerState= this.state.career
    return _.map(careerState, item => {
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
    }).reverse();
  }

  render() {
    const {heading, about} = this.state
    return (
      <div>
        <div className="career">
          {/* {this.renderCareer()} */}
          <h2 className="heading">{about.heading}</h2>
          <p className="text">{about.lead}</p>
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
