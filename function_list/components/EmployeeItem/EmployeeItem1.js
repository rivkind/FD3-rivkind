import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'
import {connect} from 'react-redux';

import './EmployeeItem.css';


class EmployeeItem extends React.PureComponent {

  

  static propTypes = {
    //employee: PropTypes.any, // передано из Redux
    //lang: PropTypes.any, // передано из Redux
  };
  componentDidMount(){
    //console.log("_____________________________________");
  }
  
  
 
  render() {
    console.log("_____________________________________");
     //console.log("Рендер сотрудника ",this.props.items.id);
     const arrayData = [
      {"label":"positionEmployee","name":this.props.items.position},
      {"label":"mngEmployee","name":this.props.items.mng},
      {"label":"divisionEmployee","name":this.props.items.division},
      {"label":"unitEmployee","name":this.props.items.unit},
      {"label":"teamEmployee","name":this.props.items.gr},
      {"label":"lctnEmployee","name":this.props.items.lctn},
      {"label":"phoneEmployee","name":this.props.items.phone},
      {"label":"emailEmployee","name":this.props.items.email}];

      var infoCode=arrayData.map( (data,index) =>
      (this.props.settings_data[index])&&
      <td key={data.label} className={data.label}>{data.name}</td>
    );

    return (
      <tr className='EmployeeItem'>
        <td className='surnameEmployee'>
          <a data-tip data-for={this.props.items.id}>{this.props.items.surname}</a>
          <ReactTooltip id={this.props.items.id} aria-haspopup='true' role='example' place="right" type="light">
 <p>{this.props.items.surname}</p>
 <p>You can put every thing here</p>
 <ul>
   <li>Word</li>
   <li>Chart</li>
   <li>Else</li>
 </ul>
</ReactTooltip>
        </td>
        <td className='sexEmployee'>123</td>
        {infoCode}
        <td></td>
      </tr>
    )
    ;

  }

}




const mapStateToProps = state => ({
  settings_data: state.settinglist.settings,
})

export default connect(mapStateToProps)(EmployeeItem);
