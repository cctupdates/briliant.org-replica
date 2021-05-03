import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <ul>
        <div>
            <Link to='/'>
              <img
                style={{ width: "200px", marginTop: "10px" }}
                src='https://www.ocf.berkeley.edu/~bmt/django_static/img/partner_logos/brilliant.png'
                alt=''
              />
            </Link>
          </div>

          <li>TODAY</li>
          <li>
            <Link to='/courses/logic'>COURSES</Link>
          </li>
          <li>PRACTICE</li>
        </ul>

        <ul className='auth'>
          <Link to='#!' className='btn btn-outline-primary'>
            Log in
          </Link>
          <Link to='#!' className='btn btn-primary'>
            SignUp
          </Link>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
