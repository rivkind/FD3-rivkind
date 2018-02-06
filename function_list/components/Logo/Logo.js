import React from 'react';
import { NavLink } from 'react-router-dom';

import './Logo.css';

class Logo extends React.PureComponent {

  render() {
    
    return (
      <NavLink to="/" className="LogoLink"><img src='/images/life.png' /></NavLink>
    );
  }

}

export default Logo;