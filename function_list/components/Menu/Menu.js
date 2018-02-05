import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

class Menu extends React.Component {
          
  render() {
    console.log("Рендер Menu");
    return (
        <div className='MenuBlock'>
          <span></span>
            <div>
              <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink"><span></span>Life</NavLink>
              <NavLink to="/lifetech" className="PageLink" activeClassName="ActivePageLink"><span></span>LifeTech</NavLink>
          </div>
        </div>
    );
  }
}
    
export default Menu;
    