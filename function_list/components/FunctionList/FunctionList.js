import React from 'react';
import PropTypes from 'prop-types';



import HeaderBlock from '../HeaderBlock/HeaderBlock';
import './FunctionList.css';

class FunctionList extends React.Component {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };
 
  render() {
    return (
      <div>
      <HeaderBlock />
      {this.props.children}
      </div>
    )
    ;

  }

}

export default FunctionList;
