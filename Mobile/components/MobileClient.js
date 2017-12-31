import React from 'react';
import PropTypes from 'prop-types';

import {chooseClients} from './events';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fio: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };


  changeBalance = (EO) => {
    let newBalance = parseInt(EO.target.value);
    chooseClients.emit('ESetBalance',{id:this.props.info.id, balance:newBalance});
  }

  deleteClient = () => {
    chooseClients.emit('EDeleteClient',this.props.info.id);
  }

  editClient = () => {
    chooseClients.emit('EEditClient',this.props.info.id);
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({info:newProps.info});
  };

  render() {

    console.log("MobileClient id="+this.state.info.id+" render");
    
    return (
      <div className='MobileClient' key={this.state.info.id}>
        <input type="button" value="+10" onClick={this.changeBalance} />
        <input type="button" value="-10" onClick={this.changeBalance} />
        <input type="button" value="x" onClick={this.deleteClient} />
        <input type="button" value="edit" onClick={this.editClient} />
        {
          (this.state.info.balance>=0)
          ?<span className='MobileClientBalance MobileClientBalanceActive'>аккаунт активен</span>
          :<span className='MobileClientBalance MobileClientBalanceBlocked'>аккаунт блокирован</span>
        }
        <span className='MobileClientFIO'>{this.state.info.fio}</span>
      </div>
    );

  }

}

export default MobileClient;
