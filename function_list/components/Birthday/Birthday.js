import React from 'react';
import { NavLink } from 'react-router-dom';

import './Birthday.css';

class Birthday extends React.Component {

  render() {

    return (
      <div className='BirthdayBlock'>
        <span></span>
        <div>
          <NavLink to="/birthday"><img src='../images/birthday.png' /></NavLink>
          <span></span>
          <NavLink to="/birthday" className='BirthdayBlockItem'><img src='../images/men.png' /></NavLink>
          <span></span>
          <NavLink to="/birthday" className='BirthdayBlockItem'><img src='../images/men.png' /></NavLink>
        </div>
      </div>
    );
  }

}

export default Birthday;