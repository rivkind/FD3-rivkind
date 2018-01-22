import React from 'react';
import { NavLink } from 'react-router-dom';

import './MenuLink.css';

const MenuLink = ({ address,children }) => (
    <NavLink
     to={address === 'life'? '':address}
     className="PageLink" activeClassName="ActivePageLink">
     <span></span>{children}
     </NavLink>
);

export default MenuLink;
    