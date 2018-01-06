import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_Life from './Page_Life';
import Page_Lifetech from './Page_Lifetech';
import Page_Group from './Page_Group';
import Page_EA from './Page_EA';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Page_Life} />
        <Route path="/lifetech" component={Page_Lifetech} />
        <Route path="/group" component={Page_Group} />
        <Route path="/external_accounts" component={Page_EA} />
      </div>
    );
    
  }

}
    
export default PagesRouter;
    