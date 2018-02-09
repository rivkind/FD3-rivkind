import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import { tooltipVisible } from '../../actions/employeelist';

import './Birthday.css';

class Birthday extends React.PureComponent {

  static propTypes = {
    birthday_title: PropTypes.string, // передано из Redux
    employees:PropTypes.arrayOf( // передано из Redux
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired,
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

    var date = new Date();

    var nowDay = '2000-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    
    var birthday = this.props.employees
      .filter(employee => employee.birthday==nowDay)
      .map(employee =>
        <div key={employee.id}>
          <NavLink title={employee.surname} to={`/employee/${employee.id}`} className='BirthdayBlockItem'><img src={`/images/${employee.photo}`} onClick={this.outHover}  onMouseOut={this.outHover} onMouseOver={this.onHover} data-id={employee.id} /></NavLink>
          <span></span>
        </div>
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

const mapDispatchToProps = {
  tooltipVisible,
}

export default connect(mapStateToProps,mapDispatchToProps)(Birthday);