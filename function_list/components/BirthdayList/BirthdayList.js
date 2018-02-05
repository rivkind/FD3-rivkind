import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import EmployeeItem from '../EmployeeItem/EmployeeItem';
import EmployeeListHeader from '../EmployeeListHeader/EmployeeListHeader';

import './BirthdayList.css';

class BirthdayList extends React.PureComponent {

  static propTypes = {
    employees:PropTypes.arrayOf( // передано из Redux
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired,
        pos: PropTypes.string.isRequired,
      })
    ),
  };  

  render() {
    
    const today = new Date();
    const futureDay = new Date();
    const backDay = new Date();

    futureDay.setDate(today.getDate()+15);
    backDay.setDate(today.getDate()-7);

    var month_now = ('0' + (today.getMonth() + 1)).slice(-2);
    var month_back = ('0' + (backDay.getMonth() + 1)).slice(-2);
    var month_future = ('0' + (futureDay.getMonth() + 1)).slice(-2);

    var birthdayArr = [];

    if((month_now=='01' && month_back=='12') || (month_now=='12' && month_future=='01')){
      var bDay = '2000-' + month_back + '-' + ('0' + backDay.getDate()).slice(-2);
      var bDay2 = '2000-12-31';
      var nowDay2 = '2000-' + month_future + '-' + ('0' + futureDay.getDate()).slice(-2);
      var nowDay = '2000-01-01';
    }else{
      var bDay = '2000-' + month_back + '-' + ('0' + backDay.getDate()).slice(-2);
      var nowDay = '2000-' + month_future + '-' + ('0' + futureDay.getDate()).slice(-2);
      this.props.employees.filter(employee => (employee.birthday>=bDay && employee.birthday<=nowDay))
      .sort(function(obj1, obj2) {
        if (obj1.birthday < obj2.birthday) return -1;
        if (obj1.birthday > obj2.birthday) return 1;
        return 0;
      })
      .map(employee =>
        birthdayArr.push(<EmployeeItem key={employee.pos} items={employee} birthday="true"  />)
      );
    }
    
    return (
      <div>
        <table cellPadding='0' cellSpacing='0' className='employeeList'>
          <thead>
            <EmployeeListHeader birthday="true" />
          </thead>
          <tbody className='EmployeeListBody'>
            {birthdayArr}
          </tbody>
        </table>
      </div>
    );
  }

}

const mapStateToProps = state => ({
    employees: state.functionlist.employee,
})

export default connect(mapStateToProps)(BirthdayList);