import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import EmployeeItem from '../EmployeeItem/EmployeeItem';
import Counter from '../Counter/Counter';
import Pagination from '../Pagination/Pagination';

import { changeSort,changeCount, changeActivePage } from '../../actions/employeelist';
import { fetchData } from '../../actions/functionlist';


import './EmployeeList.css';


class EmployeeList extends React.PureComponent {

  

  static propTypes = {
   // company: PropTypes.string.isRequired,
    //lang: PropTypes.string.isRequired,
  };

  componentDidMount(){
    if(this.props.employees.length==0){
      this.props.fetchData(this.props.lang);
    }
    this.props.changeActivePage(1);
  }

  componentDidUpdate(oldProps, oldState){
    var company = this.getCompany(this.props.location.pathname);
    if(oldProps.lang!=this.props.lang){
      this.props.fetchData(this.props.lang,company);
    }
  }
  
  chSort = (EO) => {
    var direction = 'asc';
    if(EO.target.id==this.props.sortName) {
      direction = (this.props.sortDirection == "asc") ? 'desc' : 'asc';
    }
    this.props.changeSort(EO.target.id, direction);
  }

  getCompany = (path) => {
    if(path == '/') return 'life';
    else if(path.indexOf('search')!=-1) return 'search'; 
    else return 'lifetech';
  }

  compareValues = (key, order='asc') => {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0; 
      }
  
      const varA = (typeof a[key] === 'string') ? 
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? 
        b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  prepareData = (data,company,search=null,sort_name=null,direction=null) => {
    
    var new_data = [];
    if(company=='search'){
        console.log('a');
        new_data = data.filter(employee => employee.search.toLowerCase().indexOf(search.toLowerCase())!=-1);
        new_data = new_data.sort(this.compareValues('surname'));
    }
    else{
        new_data = data.filter(employee => employee.company == company);
    }
    if(sort_name!=null || direction!=null){
        
        new_data = new_data.sort(this.compareValues(sort_name,direction)); 
    }
    //this.props.changeCount(new_data.length);
    return new_data;
    
  }
 
  render() {
    
    const {surname,sex,close,position,mng,division,unit,team,lctn,phone,email} = this.props.list_title;

    const arraySettings = [
      {"label":"positionEmployee","name":position,"sortName":"position"},
      {"label":"mngEmployee","name":mng,"sortName":"mng"},
      {"label":"divisionEmployee","name":division,"sortName":"division"},
      {"label":"unitEmployee","name":unit,"sortName":"unit"},
      {"label":"teamEmployee","name":team,"sortName":"gr"},
      {"label":"lctnEmployee","name":lctn,"sortName":"lctn"},
      {"label":"phoneEmployee","name":phone,"sortName":"phone"},
      {"label":"emailEmployee","name":email,"sortName":"email"}];

    const headerCode=arraySettings.map( (setting,index) =>
      (this.props.settings_data[index])&&
      <td key={setting.label} className={setting.label}><div className='titleEmployee' id={setting.sortName}  onClick={this.chSort}>{setting.name}</div></td>
    );

    const company = this.getCompany(this.props.location.pathname);
    var sort_name = this.props.sortName;
    var sort_diraction = this.props.sortDirection;
    const search = this.props.match.params.searchword;
    if(this.props.employees.length>0){
      const data = this.prepareData(this.props.employees,company,search,sort_name,sort_diraction);
      var count = data.length;

      var startItem = parseInt((this.props.activePage-1)*this.props.itemPage);
      var endItem = startItem+parseInt(this.props.itemPage);

      var employeeCode = data.slice(startItem,endItem).map(employee =>
        <EmployeeItem key={employee.pos} items={employee}  />
      )
      
    }
    
    console.log('Render Employee1');
    return (
      <div>
        <Counter count={count} />
        {
          (this.props.employees.length>0 && count>0)&&
          <div>
          <table cellPadding='0' cellSpacing='0' className='employeeList'>
          <thead>
            <tr>
              <td className='surnameEmployee'><div className='titleEmployee' id='surname'  onClick={this.chSort}><div></div>{surname}</div></td>
              <td className='sexEmployee'><div className='titleEmployee' id='sex'  onClick={this.chSort}>{sex}</div></td>
              {headerCode}
              <td></td>
              </tr>
            </thead>
            <tbody className='EmployeeListBody'>
            {employeeCode}
            </tbody>
          </table>
          <Pagination activePage={this.props.activePage} itemPage={this.props.itemPage} countData={count} />
          </div>
        }
        {
          (this.props.employees.length > 0 && count == 0 && search != '')&&
          <div className='noFoundSearch'>По Вашему запросу "{search}" данных не найдено!</div>
        }
      </div>
    )
    ;

  }

}




const mapStateToProps = state => ({
  lang: state.language.lang,
  list_title: state.functionlist.title,
  settings_data: state.settinglist.settings,
  employees: state.functionlist.employee,
  sortName: state.employeelist.sortName,
  sortDirection: state.employeelist.sortDirection,
  company: state.employeelist.company,
  itemPage: state.employeelist.itemPage,
  activePage: state.employeelist.activePage,
})

const mapDispatchToProps = {
  changeSort,fetchData, changeCount, changeActivePage
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeList);
