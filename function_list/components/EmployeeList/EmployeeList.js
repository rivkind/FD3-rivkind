import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import EmployeeItem from '../EmployeeItem/EmployeeItem';
//import { prepareData, changeCompany } from '../../actions/employeelist';
//import { fetchData } from '../../actions/functionlist';


import './EmployeeList.css';


class EmployeeList extends React.PureComponent {

  

  static propTypes = {
   // company: PropTypes.string.isRequired,
    //lang: PropTypes.string.isRequired,
  };
  
  
 
  render() {
    const {surname,sex,close,position,mng,division,unit,team,lctn,phone,email} = this.props.list_title;
    const arraySettings = [
      {"label":"positionEmployee","name":position},
      {"label":"mngEmployee","name":mng},
      {"label":"divisionEmployee","name":division},
      {"label":"unitEmployee","name":unit},
      {"label":"teamEmployee","name":team},
      {"label":"lctnEmployee","name":lctn},
      {"label":"phoneEmployee","name":phone},
      {"label":"emailEmployee","name":email}];

    var headerCode=arraySettings.map( (setting,index) =>
      (this.props.settings_data[index])&&
      <td key={setting.label} className={setting.label}><div className='titleEmployee'>{setting.name}</div></td>
    );

    var employeeCode=this.props.employees.map( employee =>
      <EmployeeItem key={employee.pos} items={employee}  />
    );

    //var employeeCode='';

    console.log('Render Employee1');
    return (
      
      <table cellPadding='0' cellSpacing='0' className='employeeList'>
      <thead>
        <tr>
          <td className='surnameEmployee'><div className='titleEmployee'>{surname}</div></td>
          <td className='sexEmployee'><div className='titleEmployee'>{sex}</div></td>
          {headerCode}
          <td></td>
          </tr>
        </thead>
        <tbody className='EmployeeListBody'>
        {employeeCode}
        </tbody>
      </table>
    )
    ;

  }

}




const mapStateToProps = state => ({
  list_title: state.functionlist.title,
  settings_data: state.settinglist.settings,
  //search: state.search.search,
  //data: state.functionlist.employee,
  //company: state.employeelist.company,
  employees: state.employeelist.employee,
  //lang: state.language.lang,
})

//const mapDispatchToProps = {
  //prepareData,fetchData,changeCompany
//}

export default connect(mapStateToProps,null)(EmployeeList);
