import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import MobileForm from './MobileForm';

import {chooseClients} from './events';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    clients_view: this.props.clients,
    clientName: null,
    editClient: 0,
  };

  componentDidMount = () => {
    chooseClients.addListener('ESetBalance',this.setBalance);
    chooseClients.addListener('EDeleteClient',this.deleteClient);
    chooseClients.addListener('EEditClient',this.edClient);
    chooseClients.addListener('ENameClient',this.nameClient);
  };

  componentWillUnmount = () => {
    chooseClients.removeListener('ESetBalance',this.setBalance);
    chooseClients.removeListener('EDeleteClient',this.deleteClient);
    chooseClients.removeListener('EEditClient',this.edClient);
    chooseClients.removeListener('ENameClient',this.nameClient);
  };

  dataFilter = (data,f) => {
    switch(f) { 
      case "Активные": return data.filter( v => v.balance >= 0);
      case "Заблокированные": return data.filter( v => v.balance < 0);
      default: return data; 
    } 
  }

  deleteClient = (id) => {
    let newClients = this.state.clients.filter( v => v.id != id); 
    let newClientsFilter = this.dataFilter(newClients,this.state.name); 
    this.setState({clients:newClients,clients_view:newClientsFilter,clientName:null,editClient:0});
  }

  edClient = (id) => {
    let newClients = this.state.clients.filter( v => v.id == id); 
    this.setState({clientName:newClients[0].fio,editClient:newClients[0].id});
  }

  nameClient = (fio) => {
    if(this.state.editClient!=0){
      let newClients=[...this.state.clients];
      newClients.forEach( (c,i) => {
        if ( c.id==this.state.editClient ) {
          let newClient={...c};
          newClient.fio=fio;
          newClients[i]=newClient;
          let newClientsFilter = this.dataFilter(newClients,this.state.name);
          this.setState({clients:newClients,clients_view:newClientsFilter});
        }
      });
    }else{
      let newId = this.state.clients[this.state.clients.length-1].id+1;
      let newClient = {id:newId, fio:fio, balance:20};
      let newClients=[...this.state.clients,newClient];
      let newClientsFilter = this.dataFilter(newClients,this.state.name);
      this.setState({clients:newClients,clients_view:newClientsFilter,clientName:null,editClient:0});
    }
    
  }

  setBalance = (data) => {
    
    this.state.clients.forEach( (c,i) => {
      if ( c.id==data.id ) {
        let oldActive=c.balance>=0;
        let newBalance = (data.balance+c.balance);
        let newActive=newBalance>=0;
        if(oldActive!=newActive){
          let newClients=[...this.state.clients];
          let newClient={...c}; // копия хэша изменившегося клиента
          newClient.balance=newBalance;
          newClients[i]=newClient;
          let newClientsFilter = this.dataFilter(newClients,this.state.name);
          this.setState({clients:newClients,clients_view:newClientsFilter});
        }else{
          let newClients=this.state.clients;
          newClients[i].balance=newBalance;
          this.setState({clients:newClients});
        }
      }
    } );
  };

  setFilter = (EO) => {
    console.log(EO);
    if(EO.target.value!=this.state.name){
      let newClientsFilter = this.dataFilter(this.state.clients,EO.target.value);
      this.setState({name:EO.target.value, clients_view:newClientsFilter});
    }
  };

  newClient = () => this.setState({clientName:null,editClient:0});
  
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients_view.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

    return (
      <div>
      <div className='MobileCompany'>
        {
          (this.state.clientName)?<input type="button" className="BtnNewClient" value="Новый клиент" onClick={this.newClient} />:null
        }
        <input type="button" value="Все" onClick={this.setFilter} />
        <input type="button" value="Активные" onClick={this.setFilter} />
        <input type="button" value="Заблокированные" onClick={this.setFilter} />
        <div className='MobileCompanyName'>&laquo;{this.state.name}&raquo; клиенты</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
      </div>
      <MobileForm client={this.state.clientName} key={this.state.editClient}  />
      </div>
    );
  }

}

export default MobileCompany;
