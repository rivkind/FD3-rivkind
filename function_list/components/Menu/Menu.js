import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Menu.css';

class Menu extends React.Component {
          
  render() {

    return (
     
        <div className='MenuBlock'>
          <span></span>
            <div>
            <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink"><span></span>Life</NavLink>
            <NavLink to="/lifetech" className="PageLink" activeClassName="ActivePageLink"><span></span>LifeTech</NavLink>
            <NavLink to="/group" className="PageLink" activeClassName="ActivePageLink"><span></span>Group</NavLink>
            <NavLink to="/external_accounts" className="PageLink" activeClassName="ActivePageLink"><span></span>EA</NavLink>
          </div>
        </div>
     
    );
    
  }

}
    
export default Menu;
    