import React from 'react';
import PropTypes from 'prop-types';

import './HeaderBlock.css';

class HeaderBlock extends React.Component {

  static propTypes = {
    headers: PropTypes.array.isRequired,
  };
  
  render() {
    return (
        <thead><tr>
            {this.props.headers.map(function(listValue,idx){
            return <td key={idx}>{listValue}</td>;
            })}
        </tr></thead>
    )
  }
}

export default HeaderBlock;