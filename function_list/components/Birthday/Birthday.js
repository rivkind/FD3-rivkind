import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import './Birthday.css';

class Birthday extends React.PureComponent {

  render() {

    var date = new Date();

    var nowDay = '2000-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    
    var birthday = this.props.employees.filter(employee => employee.birthday==nowDay).map(employee =>
      <div key={employee.id}><NavLink title={employee.surname} to={`/employee/${employee.id}`} className='BirthdayBlockItem'><img src='../images/men.png' /></NavLink><span></span></div>
    );

    return (
      <div className='BirthdayBlock'>
        <span></span>
        <div>
          <div>
          <NavLink to="/birthday" title={this.props.birthday_title}><img src='../images/birthday.png' /></NavLink>
          <span></span>
          </div>
          {birthday}
        </div>
      </div>
    );
  }

}


const mapStateToProps = state => ({
  birthday_title: state.functionlist.title.birthday,
  employees: state.functionlist.employee,
})

export default connect(mapStateToProps)(Birthday);