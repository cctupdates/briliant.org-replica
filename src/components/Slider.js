import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className='slider'>
      <div className='arrow'>
        <span>
          <i className='fas fa-chevron-left'></i>
        </span>
      </div>

      <Link to='/courses/logic'>
        {" "}
        <div className='component'></div>
      </Link>

      <Link to='/courses/logic/second'>
        {" "}
        <div className='component'></div>
      </Link>

      <Link to='/courses/logic/third'>
        {" "}
        <div className='component'></div>
      </Link>

      <Link to='/courses/logic/fourth'>
        {" "}
        <div className='component'></div>
      </Link>

      <Link to='/courses/logic/fifth'>
        {" "}
        <div className='component'></div>
      </Link>

      <Link to='/courses/logic/sixth'>
        {" "}
        <div className='component'></div>
      </Link>

      <div className='arrow'>
        <span>
          <i className='fas fa-chevron-right'></i>
        </span>
      </div>
    </div>
  );
};

export default Slider;
