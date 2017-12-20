import React from 'react';
import PropTypes from 'prop-types';

import './ItemShop.css';

class ItemShop extends React.Component {

  static propTypes = {
    row: PropTypes.number,
    code: PropTypes.number.isRequired,
    cost: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cbSelected: PropTypes.func.isRequired,
    activeRow: PropTypes.number,
  };

  rowClicked = (EO) => {
    this.props.cbSelected(this.props.code,this.props.row);
  }
  
  render() {
      console.log(this.props.row);
    return (
        <tr key={this.props.code} onClick={this.rowClicked} className={(this.props.code==this.props.activeRow) ? 'ItemShop_active' : ''}>
            <td key='1'>{this.props.text}</td>
            <td key='2'>{this.props.description}</td>
            <td key='3'>{this.props.cost}</td>
            <td key='4'><a>edit</a></td>
            <td key='5'><a>delete</a></td>
        </tr>
    )
  }
}

export default ItemShop;