import React from 'react';
import { NavLink } from 'react-router-dom';

import './Logo.css';

class Logo extends React.Component {

  render() {

    return (
      <NavLink to="/" exact className="LogoLink"><img src='/images/life.png' /></NavLink>
    );
  }

}

export default Logo;