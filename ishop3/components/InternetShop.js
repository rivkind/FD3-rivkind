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
    titleActive: '',
    descrActive: '',
    costActive: '',
    codeActive: '',
  }

  rowSelected = (code,row) => {
    this.setState( {
      activeRow:code, 
      activeItem:row,
      isNewItem:false,
      isEditItem:false,
      titleActive:this.state.items[row].title,
      descrActive:this.state.items[row].description,
      costActive:this.state.items[row].cost,
    } );
  }

  rowEdited = (code,row) => {
    this.setState( {
      activeRow:code, 
      activeItem:row,
      isEditItem:true,
      isNewItem:false,
      titleActive:this.state.items[row].title,
      descrActive:this.state.items[row].description,
      costActive:this.state.items[row].cost,
      codeActive:this.state.items[row].id_item,
    } );
  }

  blockCancel = () => {
    this.setState( {activeRow:null, activeItem:null,isEditItem:false,isNewItem:false} );
  }

  blockSubmit = (title,description,cost) => {
    
    if(this.state.isNewItem){
      let max_code = 0;
      for(let i=0;i<this.state.items.length;i++){
        if(max_code<this.state.items[i].id_item){max_code = this.state.items[i].id_item;}
      }
      max_code++;
      let newData = {id_item:max_code,title:title,description:description,cost:cost};
      let newArr = [...this.state.items,newData];
      this.setState({items:newArr,activeRow:null, activeItem:null,isNewItem:false,title:null,cost:null,description:null});
    }else{
      let newData = {id_item:this.state.codeActive,title:title,description:description,cost:cost};
      console.log(newData);
      let newArr = [...this.state.items];
      newArr[this.state.activeItem] = newData;
      console.log(newArr);
      this.setState({items:newArr,activeRow:null, activeItem:null,isNewItem:false,isEditItem:false,title:null,cost:null,description:null});
    }
    //this.setState( {activeRow:null, activeItem:null,isEditItem:false,isNewItem:false} );
  }

  rowDeleted = (row) => {
    if(confirm("Вы уверены, что хотите удалить?")){
      let updData = this.state.items;
      updData.splice(row, 1);
      this.setState( {items:updData,isEditItem:false,isNewItem:false,activeRow:null, activeItem:null} );
    }
  }

  newItem = () => {
    this.setState( {
      activeRow:null, 
      activeItem:null,
      isNewItem:true,
      isEditItem:false,
      titleActive:'',
      descrActive:'',
      costActive:'',
    } );
  }

  

  /*blockSubmit = () => {
    if(this.state.isNewItem){
      let newArr = [...this.state.items,this.state.activeData];
     // this.setState({items:newArr,activeRow:null, activeItem:null,isNewItem:true});
    }else{
      let newArr = [...this.state.items];
      newArr[this.state.activeItem] = this.state.activeData;
     // this.setState({items:newArr,activeRow:null, activeItem:null,isEditItem:true});
    }
    

    
  }*/

  render() {
    let itemsCode = this.state.items.map( (v,idx) =>
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
              title={this.state.titleActive} 
              description={this.state.descrActive}
              cost={this.state.costActive} 
              isNewItem={this.state.isNewItem}
              isEditItem={this.state.isEditItem}
              headers={this.props.headers}
              cbCancel={this.blockCancel}
              cbSubmit={this.blockSubmit}
             />
          }
        </div>
      </div>
    );

  }

}

export default InternetShop;
