/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';
import Moment from 'moment';
import Loading from './loading';
import Utils from "../_Utils";

class Medium extends Component{

	constructor(props){
		super(props);
		this.state={
			medium:{},
			// blog:{},
			loading:true
		}
	}

	componentDidMount(){
    document.body.style.backgroundColor = "#fff";
    window.scrollTo({ top: 0});
    if(Utils.getCookie('cookie-medium') === "ok" && localStorage.getItem('mediumData') !== null ){
      this.setState(
        {
          medium:JSON.parse(localStorage.getItem('mediumData')),
          loading:false
        }
      );
    }else{
        // const now = new Date();
        const url = "https://medium.com/feed/@goheru";
        axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${url}`).then((response) => {
          Utils.generateCookies('cookie-medium');
          this.setState(
            {
              medium:response.data.items,
              loading:false
            }
          );
          localStorage.setItem('mediumData',JSON.stringify(response.data.items));
        })
    }
    }




	// eslint-disable-next-line consistent-return
	renderMedium(){
		const divStyle = {
			padding: '2px 4px',
			background:'#f2c94c',
			borderRadius:'4px',
			color:'#fff'
      };
    const {medium} = this.state;
		if(medium.length >0){
      return _.map(medium,(item,key)=>{
      return(
        <li key={key}>
          <p className="text">
            {
              Moment(item.pubDate).format('DD MMM YYYY')
            }
            #
            {
              item.categories[0]
            }
          </p>
          <h4 className="heading">
            <Link to={`/medium/${key}`}>{item.title}</Link>
            <span style={divStyle}>medium</span>
          </h4>
        </li>
      )
      })
    }
	}

	// eslint-disable-next-line consistent-return
	// renderBlog(){
  //   const {blog} = this.state;
  //   if(blog.length >0){
  //     return _.map(blog,item=>{
  //       return(
  //         <li key={item.id}>
  //           <p className="text">
  //             {item.created_at}
  //             #
  //             {item.category}
  //           </p>
  //           <h4 className="heading"><Link to={`/notes/${item.id}`}>{item.title}</Link></h4>
  //         </li>
  //       )
  //     })
  //   }
	// }


render(){
  const {loading} = this.state
  if(loading){
    return(
      <Loading />
    )
  }
    return(
      <div className="blog">
        <div className="blog-wrap">
          <div className="blog-list">
            <ul>
              {this.renderMedium()}
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

export default connect(null,{})(Medium);
