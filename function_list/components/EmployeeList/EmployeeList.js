import React from 'react';
import {connect} from 'react-redux';

import EmployeeItem from '../EmployeeItem/EmployeeItem';
import { prepareData } from '../../actions/employeelist';


import './EmployeeList.css';


class EmployeeList extends React.PureComponent {

  

  static propTypes = {
    //employee: PropTypes.any, // передано из Redux
    //lang: PropTypes.any, // передано из Redux
  };
  componentDidMount(){
    
    if(this.props.location.pathname == '/') var company = 'life';
    else if(this.props.location.pathname.indexOf('search')!=-1) var company = 'search'; 
    else var company = 'lifetech';
    
    if(this.props.match.params.searchword!='' || company!=this.props.company){
      if(company == 'search'){
        //console.log("sfdsffffffffffffffffffffffffffffffffffffffffff",this.props.data);
        //this.props.prepareData(this.props.data,company,this.props.match.params.searchword);
      }else this.props.prepareData(this.props.data,company);

      
    }
    //console.log('componentDidMount');
  }

  

  componentDidUpdate(oldProps, oldState){
    
    if(oldProps.data!=this.props.data){
      
      if(this.props.location.pathname.indexOf('search')!=-1){
        this.props.prepareData(this.props.data,'search',this.props.match.params.searchword);
      }else this.props.prepareData(this.props.data,this.props.company);
    }else if(oldProps.search!=this.props.search){
      this.props.prepareData(this.props.data,'search',this.props.search);
    }
  }
  
 
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
      <div key={setting.label} className={setting.label}>{setting.name}</div>
    );

    var employeeCode=this.props.employees.map( employee =>
      <EmployeeItem key={employee.pos} items={employee}  />
    );

    //var employeeCode='';

    console.log('Render Employee1');
    return (
      
      <div>
        <div className='EmployeeListHeader'>
          <div className='surnameEmployee'>{surname}</div>
          <div className='sexEmployee'>{sex}</div>
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
  search: state.search.search,
  data: state.functionlist.employee,
  company: state.employeelist.company,
  employees: state.employeelist.employee,
})

const mapDispatchToProps = {
  prepareData,
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeList);
