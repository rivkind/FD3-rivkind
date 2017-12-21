import React from 'react';
import PropTypes from 'prop-types';

import './InternetShop.css';

import HeaderBlock from './HeaderBlock';
import ItemShop from './ItemShop';
import ViewBlock from './ViewBlock';

class InternetShop extends React.Component {

  static propTypes = {
    headers: PropTypes.array.isRequired,
    items:PropTypes.arrayOf(
      PropTypes.shape({
        id_item: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  };

  state = {
    items: this.props.items,
    isNewItem: false,
    isEditItem: false,
    activeItem: null,
    activeRow: null,
    isDelete:false,
    activeData: [],
  }

  rowSelected = (code,row) => {
    console.log('выбран ответ с кодом '+row);
    this.setState( {activeRow:code, activeItem:row,isNewItem:false,isEditItem:false} );
  }

  rowEdited = (code,row) => {
    this.setState( {activeRow:code, activeItem:row,isEditItem:true} );
  }

  blockCancel = (code,row) => {
    this.setState( {activeRow:null, activeItem:null,isEditItem:false,isNewItem:false} );
  }

  rowDeleted = (row) => {
    if(confirm("Вы уверены, что хотите удалить?")){
      var updData = this.state.items;
      updData.splice(row, 1);
      this.setState( {items:updData,isEditItem:false,isNewItem:false,activeRow:null, activeItem:null} );
    }
  }

  newItem = () => {
    this.setState( {activeRow:null, activeItem:null,isNewItem:true,isEditItem:false} );
  }

  render() {
    //var newArr = this.props.items[this.state.activeItem].slice();
    var itemsCode = this.props.items.map( (v,idx) =>
      <ItemShop key={idx}
        row={idx}
        text={v.title} cost={v.cost} code={v.id_item}
        description={v.description}
        activeRow={this.state.activeRow}
        cbSelected={this.rowSelected}
        cbEdited={this.rowEdited}
        cbDeleted={this.rowDeleted}
      />
    );
    //console.log(this.props.items[this.state.activeItem]);
    return (
      <div>
        <div className='mainBlock'>
          <table className='InternetShop'>
            <HeaderBlock headers={this.props.headers} />
            <tbody>
            {itemsCode}
            {
              (!this.state.isNewItem) &&
              <tr><td colSpan='5'><button onClick={this.newItem}>Новый товар</button></td></tr>
            }
            </tbody>
          </table>
          {
            ((this.state.activeRow)||this.state.isNewItem) &&
            <ViewBlock 
              items={this.props.items} 
              isNewItem={this.state.isNewItem}
              activeItem={this.state.activeItem}
              isEditItem={this.state.isEditItem}
              headers={this.props.headers}
              cbCancel={this.blockCancel}
             />
          }
        </div>
      </div>
    );

  }

}

export default InternetShop;
