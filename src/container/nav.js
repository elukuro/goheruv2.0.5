import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Nav extends Component{
	render(){
		return(
			<div className="nav">
				<ul>
					<li><Link to="/" className={(this.props.active=='home') ? 'link active' : 'link'}>Home</Link></li>
					<li><Link to="/medium" className={(this.props.active=='medium') ? 'link active' : 'link'}>Notes</Link></li>
					{/* <li><Link to="/notes" className={(this.props.active=='notes') ? 'link active' : 'link'}>Notes</Link></li> */}
					<li><Link to="/book" className={(this.props.active=='book') ? 'link active' : 'link'}>Books</Link></li>
					{/* <li><Link to="/work" className={(this.props.active=='work') ? 'link active' : 'link'}>Done</Link></li> */}
					<li><Link to="/workout" className={(this.props.active=='workout') ? 'link active' : 'link'}>Workout</Link></li>
				</ul>
			</div>
		)
	}
}

export default Nav;