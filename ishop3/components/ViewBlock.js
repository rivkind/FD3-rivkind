import React from 'react';
import PropTypes from 'prop-types';

import './ViewBlock.css';

class ViewBlock extends React.Component {

  static propTypes = {
    isNewItem: PropTypes.bool.isRequired,
    isEditItem: PropTypes.bool.isRequired,
    cbCancel: PropTypes.func.isRequired,
    title: PropTypes.string,
    cost: PropTypes.string,
    description: PropTypes.string,
  };

  state = {
    title: this.props.title,
    description: this.props.description,
    cost: this.props.cost,
  }
  


  clickCancel = (EO) => {
    this.props.cbCancel();
  }

  chTitle = (EO) => {
    this.setState({title: EO.target.value});
  }

  chDescr = (EO) => {
    this.setState({description: EO.target.value});
  }

  chCost = (EO) => {
    this.setState({cost: EO.target.value});
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
          <div><span>{this.props.headers[0]}: </span>{this.state.title}</div>
          <div><span>{this.props.headers[1]}: </span>{this.state.description}</div>
          <div><span>{this.props.headers[2]}: </span>{this.state.cost}</div>
        </div>
      :
        <div>
          <div><span>{this.props.headers[0]}: </span><input type="text" onChange={this.chTitle} defaultValue={!this.props.isNewItem?this.state.title:''} /></div>
          <div><span>{this.props.headers[1]}: </span><input type="text" onChange={this.chDescr} defaultValue={!this.props.isNewItem?this.state.description:''} /></div>
          <div><span>{this.props.headers[2]}: </span><input type="text" onChange={this.chCost} defaultValue={!this.props.isNewItem?this.state.cost:''} /></div>
          <div><button>{(this.props.isNewItem)?'добавить':'сохранить'}</button><button onClick={this.clickCancel}>отменить</button></div>
        </div> 
      }
      </div>
    )
  }
}

export default ViewBlock;