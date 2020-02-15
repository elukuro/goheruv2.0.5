import React, { Component } from 'react';
import Nav from '../container/nav';
import Jumbo from '../container/jumbo';
import Blog from '../container/blog';

class Notes extends Component{
	componentDidMount(){
    document.body.style.backgroundColor = "#fff";
    window.scrollTo({ top: 0});
	}

render(){
  return(
    <div>
      <Nav active="notes" />
      <Jumbo image="big-plant.png" page="notes" alt="big-plant" />
      <Blog />
    </div>
  )
}
}

export default Notes;
