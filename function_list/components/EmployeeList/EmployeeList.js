import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import EmployeeItem from '../EmployeeItem/EmployeeItem';
import EmployeeListHeader from '../EmployeeListHeader/EmployeeListHeader';
import Counter from '../Counter/Counter';
import Pagination from '../Pagination/Pagination';


import { changeCount, changeActivePage } from '../../actions/employeelist';

import './EmployeeList.css';


class EmployeeList extends React.PureComponent {

  static propTypes = {
   // company: PropTypes.string.isRequired,
    //lang: PropTypes.string.isRequired,
  };

  componentDidMount(){
    this.props.changeActivePage(1);
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
        new_data = data.filter(employee => employee.search.toLowerCase().indexOf(search.toLowerCase())!=-1)
                    .sort(this.compareValues('surname'));
    }
    else{
        new_data = data.filter(employee => employee.company == company);
    }
    if(sort_name!=null || direction!=null){
        new_data = new_data.sort(this.compareValues(sort_name,direction)); 
    }
    
    return new_data;
    
  }
 
  render() {
    
    const company = this.getCompany(this.props.location.pathname);
    const search = this.props.match.params.searchword;
    var sort_name = this.props.sortName;
    var sort_diraction = this.props.sortDirection;
    
    
    if(this.props.employees.length>0){
      const data = this.prepareData(this.props.employees,company,search,sort_name,sort_diraction);
      var count = data.length;

      var startItem = parseInt((this.props.activePage-1)*this.props.itemPage);
      var endItem = startItem+parseInt(this.props.itemPage);

      var employeeCode = data.slice(startItem,endItem).map(employee =>
        <EmployeeItem key={employee.pos} items={employee}  />
      )
      
    }
    
    return (
      <div>
        <Counter count={count} />
        {
          (this.props.employees.length>0 && count>0)&&
          <div>
          <table cellPadding='0' cellSpacing='0' className='employeeList'>
            <thead>
              <EmployeeListHeader />
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
    );
  }
}




const mapStateToProps = state => ({
  employees: state.functionlist.employee,
  sortName: state.employeelist.sortName,
  sortDirection: state.employeelist.sortDirection,
  itemPage: state.employeelist.itemPage,
  activePage: state.employeelist.activePage,
})

const mapDispatchToProps = {
  changeCount, changeActivePage
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeList);
