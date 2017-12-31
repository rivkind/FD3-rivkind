import React from 'react';
import PropTypes from 'prop-types';

import {chooseClients} from './events';

import './MobileForm.css';

class MobileForm extends React.PureComponent {

  static propTypes = {
    client: PropTypes.string,
  };

  state = {
    name: this.props.client,
  };

  newTextRef = null;
  
  setNewTextRef = (ref) => {
    this.newTextRef=ref;
  };

  saveClient = () => {
      if ( this.newTextRef ) {
        let newText=this.newTextRef.value;
        (newText)?chooseClients.emit('ENameClient',newText):alert('Введите данные');
      }
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({name:newProps.client});
  };

  render() {

    console.log("MobileForm render");
    
    return (
      <div className='MobileForm'>
        <div className='MobileFormTitle'>
        {
            (this.state.name)?"Редактирование клиента":"Добавление клиента"
        }
        </div>
        <div><input type="text" defaultValue={this.state.name}  ref={this.setNewTextRef} /></div>
        <input type="button" value="Сохранить" onClick={this.saveClient} />
      </div>
    );

  }

}

export default MobileForm;