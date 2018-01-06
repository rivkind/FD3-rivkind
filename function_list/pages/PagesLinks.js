import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

//import HeaderBlock from '../components/HeaderBlock';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
     
        <div className='PagesLink'>
          <span></span>
          <div>
            <NavLink to="/external_accounts" className="PageLink" activeClassName="ActivePageLink">EA</NavLink>
            <NavLink to="/group" className="PageLink" activeClassName="ActivePageLink">Group</NavLink>
            <NavLink to="/lifetech" className="PageLink" activeClassName="ActivePageLink">LifeTech</NavLink>
            <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Life</NavLink>
          </div>
        </div>
     
    );
    
  }

}
    
export default PagesLinks;
    