import React from "react";
import { Link } from "react-router-dom";
const LeftGrid = () => {
  return (
    <div className='first-div'>
      <Link to='/'>
        <span>
          <i className='change-icon fas fa-xs fa-chevron-left'> </i> Back
        </span>
      </Link>

      <h3>Logic</h3>
    </div>
  );
};

export default LeftGrid;
