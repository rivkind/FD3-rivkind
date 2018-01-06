import React from 'react';
//import PropTypes from 'prop-types';


import HeaderBlock from './HeaderBlock';
import PagesRouter from '../pages/PagesRouter';
import './FunctionList.css';

class FunctionList extends React.Component {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {

    return (
      <div>
      <HeaderBlock />
      <PagesRouter />
      </div>
    )
    ;

  }

}

export default FunctionList;
