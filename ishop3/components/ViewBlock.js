import React from 'react';
import PropTypes from 'prop-types';

import './ViewBlock.css';

class ViewBlock extends React.Component {

  static propTypes = {
    isNewItem: PropTypes.bool.isRequired,
    isEditItem: PropTypes.bool.isRequired,
    cbCancel: PropTypes.func.isRequired,
    cbSubmit: PropTypes.func.isRequired,
    title: PropTypes.string,
    cost: PropTypes.string,
    description: PropTypes.string,
  };

  state = {
    title: this.props.title,
    description: this.props.description,
    cost: this.props.cost,
    errTitle: false,
    errDescr: false,
    errCost: false,
  }
  


  clickCancel = (EO) => {
    this.props.cbCancel();
  }

  clickSubmit = (EO) => {
    if(this.state.title==''){this.setState({errTitle:true,});}
    if(this.state.description==''){this.setState({errDescr:true,});}
    if(this.state.cost==''){this.setState({errCost:true,});}
    if(this.state.title && this.state.description && this.state.cost){
      this.props.cbSubmit(this.state.title,this.state.description,this.state.cost);
    }
  }

  chTitle = (EO) => {
    this.setState({title: EO.target.value,errTitle:false,});
  }

  chDescr = (EO) => {
    this.setState({description: EO.target.value,errDescr:false,});
  }

  chCost = (EO) => {
    this.setState({cost: EO.target.value,errCost:false});
  }

  render() {
    console.log("props - "+this.props.title);
    console.log("state - "+this.state.title);
    return (
      <div className="viewBlock">
      {
      (!this.props.isEditItem&&!this.props.isNewItem)
      ?
        <div>
          <div><span>{this.props.headers[0]}: </span>{this.props.title}</div>
          <div><span>{this.props.headers[1]}: </span>{this.props.description}</div>
          <div><span>{this.props.headers[2]}: </span>{this.props.cost}</div>
        </div>
      :
        <div>
          <div>
            <span>{this.props.headers[0]}: </span>
            <input type="text" onChange={this.chTitle} defaultValue={!this.props.isNewItem?this.props.title:''} />
            { 
            (this.state.errTitle) &&
            <span className="err">Ошибка в поле Title</span>
            }
          </div>
          <div>
            <span>{this.props.headers[1]}: </span>
            <input type="text" onChange={this.chDescr} defaultValue={!this.props.isNewItem?this.props.description:''} />
            { 
            (this.state.errDescr) &&
            <span className="err">Ошибка в поле Description</span>
            }
          </div>
          <div>
            <span>{this.props.headers[2]}: </span>
            <input type="text" onChange={this.chCost} defaultValue={!this.props.isNewItem?this.props.cost:''} />
            { 
            (this.state.errCost) &&
            <span className="err">Ошибка в поле Cost</span>
            }
          </div>
          <div><button onClick={this.clickSubmit}>{(this.props.isNewItem)?'добавить':'сохранить'}</button><button onClick={this.clickCancel}>отменить</button></div>
        </div> 
      }
      </div>
    )
  }
}

export default ViewBlock;