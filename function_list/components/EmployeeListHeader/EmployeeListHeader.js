import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { changeSort } from '../../actions/employeelist';

import './EmployeeListHeader.css';


class EmployeeListHeader extends React.PureComponent {

  static propTypes = {
    settings_data: PropTypes.any, // передано из Redux
    list_title:PropTypes.any, // передано из Redux
    sortName: PropTypes.string, // передано из Redux
    sortDirection: PropTypes.string, // передано из Redux
    birthday: PropTypes.string, // передано из props
  };
  
  chSort = (EO) => {
    var direction = 'asc';
    if(EO.target.id==this.props.sortName) {
      direction = (this.props.sortDirection == "asc") ? 'desc' : 'asc';
    }
    this.props.changeSort(EO.target.id, direction);
  }
 
  render() {
    
    const {surname,sex,position,mng,division,unit,team,lctn,phone,email,birthday} = this.props.list_title;
    
    const arraySettings = [
        {"label":"positionEmployee","name":position,"sortName":"position","birthday":true},
        {"label":"mngEmployee","name":mng,"sortName":"mng","birthday":false},
        {"label":"divisionEmployee","name":division,"sortName":"division","birthday":false},
        {"label":"unitEmployee","name":unit,"sortName":"unit","birthday":false},
        {"label":"teamEmployee","name":team,"sortName":"gr","birthday":false},
        {"label":"lctnEmployee","name":lctn,"sortName":"lctn","birthday":true},
        {"label":"phoneEmployee","name":phone,"sortName":"phone","birthday":true},
        {"label":"emailEmployee","name":email,"sortName":"email","birthday":true}];

    const headerCode=arraySettings.map( (setting,index) =>
        ((this.props.settings_data[index] && !this.props.birthday) || (this.props.birthday && setting.birthday))&&
        <td key={setting.label} className={setting.label}><div className='titleEmployee' id={setting.sortName}  onClick={this.chSort}>{setting.name}</div></td>
    );

    return (
        
        <tr>
            <td className='surnameEmployee'><div className='titleEmployee' id='surname'  onClick={this.chSort}><div></div>{surname}</div></td>
            <td className='sexEmployee'><div className='titleEmployee' id='sex'  onClick={this.chSort}>{sex}</div></td>
            {
                (this.props.birthday)&&
                <td className='birthdayEmployee'><div className='titleEmployee'>{birthday}</div></td>
            }
            {headerCode}
            <td></td>
        </tr>
        
    );
  }

}


const mapStateToProps = state => ({
    list_title: state.functionlist.title,
    settings_data: state.settinglist.settings,
    sortName: state.employeelist.sortName,
    sortDirection: state.employeelist.sortDirection,
})

const mapDispatchToProps = {
    changeSort
  }

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeListHeader);