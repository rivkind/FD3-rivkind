import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import './Birthday.css';

class Birthday extends React.PureComponent {

  render() {

    return (
      <div className='BirthdayBlock'>
        <span></span>
        <div>
          <NavLink to="/birthday" title={this.props.birthday_title}><img src='../images/birthday.png' /></NavLink>
          <span></span>
          <NavLink to="/birthday" className='BirthdayBlockItem'><img src='../images/men.png' /></NavLink>
          <span></span>
          <NavLink to="/birthday" className='BirthdayBlockItem'><img src='../images/men.png' /></NavLink>
        </div>
      </div>
    );
  }

}


const mapStateToProps = state => ({
  birthday_title: state.functionlist.title.birthday,
})

export default connect(mapStateToProps)(Birthday);