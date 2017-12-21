import React from 'react';
import PropTypes from 'prop-types';

import './ViewBlock.css';

class ViewBlock extends React.Component {

  static propTypes = {
    isNewItem: PropTypes.bool.isRequired,
    isEditItem: PropTypes.bool.isRequired,
    cbCancel: PropTypes.func.isRequired,
    activeItem: PropTypes.number,
    items:PropTypes.arrayOf(
      PropTypes.shape({
        id_item: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  };

  
  
  clickCancel = (EO) => {
    this.props.cbCancel();
  }


  

  render() {
    
    return (
      <div className="viewBlock">
      {
      (!this.props.isEditItem&&!this.props.isNewItem)
      ?
        <div>
          <div><span>{this.props.headers[0]}: </span>{this.props.items[this.props.activeItem].title}</div>
          <div><span>{this.props.headers[1]}: </span>{this.props.items[this.props.activeItem].description}</div>
          <div><span>{this.props.headers[2]}: </span>{this.props.items[this.props.activeItem].cost}</div>
        </div>
      :
        <div>
          <div><span>{this.props.headers[0]}: </span><input type="text" value={!this.props.isNewItem?this.props.items[this.props.activeItem].title:''} /></div>
          <div><span>{this.props.headers[1]}: </span><input type="text" value={!this.props.isNewItem?this.props.items[this.props.activeItem].description:''} /></div>
          <div><span>{this.props.headers[2]}: </span><input type="text" value={!this.props.isNewItem?this.props.items[this.props.activeItem].cost:''} /></div>
          <div><button>{(this.props.isNewItem)?'Добавить':'Редактировать'}</button><button onClick={this.clickCancel}>Отменить</button></div>
        </div> 
      }
      </div>
    )
  }
}

export default ViewBlock;