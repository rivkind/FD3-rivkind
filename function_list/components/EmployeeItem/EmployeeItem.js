import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import { tooltipVisible } from '../../actions/employeelist';

import './EmployeeItem.css';

class EmployeeItem extends React.PureComponent {

  static propTypes = {
    settings_data: PropTypes.any, // передано из Redux
    birthday: PropTypes.string, // передано из props
    employees:PropTypes.arrayOf( // передано из props
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        mng: PropTypes.string.isRequired,
        division: PropTypes.string.isRequired,
        unit: PropTypes.string.isRequired,
        gr: PropTypes.string.isRequired,
        lctn: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired,
        maternity: PropTypes.number.isRequired,
        sex: PropTypes.number.isRequired,
        pos: PropTypes.string.isRequired,
      })
    ),
  };
  
  onHover = (EO) => {
    this.props.tooltipVisible(EO.target.dataset.id,EO.screenX,EO.screenY);
    //console.log(EO.screenY);
  }
  outHover = (EO) => {
    this.props.tooltipVisible(0,0,0);
    //console.log(EO.screenY);
  }
 
  render() {
    const arrayData = [
      {"label":"positionEmployee","name":this.props.items.position,"link":"1","birthday":true},
      {"label":"mngEmployee","name":this.props.items.mng,"link":"1","birthday":false},
      {"label":"divisionEmployee","name":this.props.items.division,"link":"1","birthday":false},
      {"label":"unitEmployee","name":this.props.items.unit,"link":"1","birthday":false},
      {"label":"teamEmployee","name":this.props.items.gr,"link":"1","birthday":false},
      {"label":"lctnEmployee","name":this.props.items.lctn,"link":"1","birthday":true},
      {"label":"phoneEmployee","name":this.props.items.phone,"birthday":true}];

    var infoCode=arrayData.map( (data,index) =>
      ((this.props.settings_data[index] && !this.props.birthday) || (this.props.birthday && data.birthday))&&
      <td key={data.label} className={data.label}>
      {
        (data.link!=undefined)
        ?
        <NavLink className='linkEmployee' to={`/search/${data.name}`}>{data.name}</NavLink>
        :
        (data.name)
      }
      </td>
    );

    
    return (
      <tr className='EmployeeItem'>
        <td className='surnameEmployee'>
          <NavLink to={`/employee/${this.props.items.id}`} className='linkEmployee' href="#" onClick={this.outHover} onMouseOut={this.outHover} onMouseOver={this.onHover} data-id={this.props.items.id}>{this.props.items.surname}</NavLink>
        </td>
        <td className='sexEmployee'>
        {
          (this.props.items.maternity==1)
          ?
          <img src='/images/icon-maternity.png' />
          :
          (this.props.items.sex==1)?
          <img src='/images/boy.png' />
          :
          <img src='/images/girl.png' />
        }
        </td>
        {
        (this.props.birthday)&&
        <td className='birthdayEmployee'>{this.props.items.birthday}</td>
        }
        {infoCode}
        <td></td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  settings_data: state.settinglist.settings,
})

const mapDispatchToProps = {
  tooltipVisible,
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeItem);
