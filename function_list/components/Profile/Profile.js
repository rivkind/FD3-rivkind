import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


import './Profile.css';

class Profile extends React.PureComponent {

  static propTypes = {
    list_title:PropTypes.any, // передано из Redux
    employees:PropTypes.arrayOf( // передано из Redux
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        mng: PropTypes.string.isRequired,
        division: PropTypes.string.isRequired,
        unit: PropTypes.string.isRequired,
        gr: PropTypes.string.isRequired,
        lctn: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired,
        maternity: PropTypes.string.isRequired,
        sex: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
      })
    ),
  };

  render() {
    const {surname,sex,close,position,mng,division,unit,team,lctn,phone,email,birthday} = this.props.list_title;
    var profile = this.props.employees.filter(employee => employee.id == this.props.match.params.id);
    var surname1 = profile.map((elem) => elem.surname);
    var pos = profile.map((elem) => elem.position);
    var m = profile.map((elem) => elem.mng);
    var d = profile.map((elem) => elem.division);
    var u = profile.map((elem) => elem.unit);
    var t = profile.map((elem) => elem.gr);
    var l = profile.map((elem) => elem.lctn);
    var e = profile.map((elem) => elem.email);
    var p = profile.map((elem) => elem.phone);
    var ph = profile.map((elem) => elem.photo);
    var b = profile.map((elem) => elem.birthday);
    
    return (
      <div className='ProfileBlock'>
        <div className='ProfileBlockHeader'>{surname1}</div>
        <div className='ProfileBlockContent'>
          <div className='ProfileBlockPhoto'>
          <img src={`/images/${ph}`} />
          </div>
          <div className='ProfileBlockInfo'>
            <table>
              <tbody>
                <tr><td>{birthday}:</td><td>{b}</td></tr>
                <tr><td>{position}:</td><td>{pos}</td></tr>
                {
                (m!='')&&
                <tr><td>{mng}:</td><td>{m}</td></tr>
                }
                {
                (d!='')&&
                <tr><td>{division}:</td><td>{d}</td></tr>
                }
                {
                (u!='')&&
                <tr><td>{unit}:</td><td>{u}</td></tr>
                }
                {
                (t!='')&&
                <tr><td>{team}:</td><td>{t}</td></tr>
                }
                {
                (l!='')&&
                <tr><td>{lctn}:</td><td>{l}</td></tr>
                }
                <tr><td>{email}:</td><td>{e}</td></tr>
                <tr><td>{phone}:</td><td>{p}</td></tr>
                </tbody>
              </table>
            
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  list_title: state.functionlist.title,
  employees: state.functionlist.employee,
})




export default connect(mapStateToProps)(Profile);