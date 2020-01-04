/* eslint-disable max-len */
import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  const { active } = props;
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/" className={active === "home" ? "link active" : "link"}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/medium" className={active === "medium" ? "link active" : "link"}>
            Notes
          </Link>
        </li>
        {/* <li><Link to="/notes" className={(active==='notes') ? 'link active' : 'link'}>Notes</Link></li> */}
        <li>
          <Link to="/book" className={active === "book" ? "link active" : "link"}>
            Books
          </Link>
        </li>
        {/* <li><Link to="/work" className={(active==='work') ? 'link active' : 'link'}>Done</Link></li> */}
        {/* <li><Link to="/workout" className={(active==='workout') ? 'link active' : 'link'}>Workout</Link></li> */}
      </ul>
    </div>
  );
};

export default Nav;
