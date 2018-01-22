import React from 'react';
import {connect} from 'react-redux';

import EmployeeItem from '../EmployeeItem/EmployeeItem';

import { EMPLOYEE_CHANGE_DATA } from '../../constants/constants';

import './EmployeeList.css';


class EmployeeList extends React.PureComponent {

  

  static propTypes = {
    //employee: PropTypes.any, // передано из Redux
    //lang: PropTypes.any, // передано из Redux
  };
  componentDidMount(){
    if(this.props.location.pathname == '/') var company = 'life';
    else var company = 'lifetech';
    
    if(company!=this.props.company){
      var new_data = this.props.employees_data.filter(employee => employee.company == company);
      this.props.dispatch({
        type: EMPLOYEE_CHANGE_DATA,
        preload:new_data,
        company:company,
      });
    }
  }

  componentWillReceiveProps(){
    
  }
  
 
  render() {
    const {surname,sex,close,position,mng,division,unit,team,lctn,phone,email} = this.props.list_title;
    const arraySettings = [
      {"label":"postitionEmployee","name":position},
      {"label":"mngEmployee","name":mng},
      {"label":"divisionEmployee","name":division},
      {"label":"unitEmployee","name":unit},
      {"label":"teamEmployee","name":team},
      {"label":"lctnEmployee","name":lctn},
      {"label":"phoneEmployee","name":phone},
      {"label":"emailEmployee","name":email}];

    var headerCode=arraySettings.map( (setting,index) =>
      (this.props.settings_data[index])&&
      <div key={setting.label}>{setting.name}</div>
    );

    var employeeCode=this.props.employees.map( employee =>
      <EmployeeItem key={employee.id} info={employee}  />
    );

    console.log('Render Employee1');
    return (
      
      <div>
        <div className='EmployeeListHeader'>
          <div className='surnameEmployee'>{surname}</div>
          <div>{sex}</div>
          {headerCode}
        </div>
        <div className='EmployeeListBody'>
        {employeeCode}
        </div>
      </div>
    )
    ;

  }

}




const mapStateToProps = state => ({
  list_title: state.functionlist.title,
  settings_data: state.settinglist.settings,
  employees: state.functionlist.view_employee,
  employees_data: state.functionlist.employee,
  company: state.functionlist.company,
})

export default connect(mapStateToProps)(EmployeeList);
