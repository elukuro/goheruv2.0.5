import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Nav extends Component{
	render(){
		return(
			<div className="nav">
				<ul>
					<li><Link to="/" className={(this.props.active=='home') ? 'link active' : 'link'}>Home</Link></li>
					<li><Link to="/notes" className={(this.props.active=='notes') ? 'link active' : 'link'}>Notes</Link></li>
				</ul>
			</div>
		)
	}
}

export default Nav;