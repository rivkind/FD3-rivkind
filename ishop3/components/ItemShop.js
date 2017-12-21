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
    cbEdited: PropTypes.func.isRequired,
    cbDeleted: PropTypes.func.isRequired,
  };

  rowClicked = (EO) => {
    this.props.cbSelected(this.props.code,this.props.row);
  }

  editClicked = (EO) => {
    this.props.cbEdited(this.props.code,this.props.row);
  }

  deleteClicked = (EO) => {
    this.props.cbDeleted(this.props.row);
  }
  
  render() {
    return (
        <tr key={this.props.code} className={(this.props.code==this.props.activeRow) ? 'ItemShop_active' : ''}>
            <td key='1' onClick={this.rowClicked}>{this.props.text}</td>
            <td key='2' onClick={this.rowClicked}>{this.props.description}</td>
            <td key='3' onClick={this.rowClicked}>{this.props.cost}</td>
            <td key='4'><a onClick={this.editClicked}>edit</a></td>
            <td key='5'><a onClick={this.deleteClicked}>delete</a></td>
        </tr>
    )
  }
}

export default ItemShop;