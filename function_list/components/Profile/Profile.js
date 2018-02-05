import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import { fetchData } from '../../actions/functionlist';

import './Profile.css';

class Profile extends React.PureComponent {

  componentDidMount(){
    if(this.props.employees.length==0){
      this.props.fetchData(this.props.lang);
    }
  }

  componentDidUpdate(oldProps, oldState){
    if(oldProps.lang!=this.props.lang){
      this.props.fetchData(this.props.lang);
    }
  }

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
    //var names = profile.map(p => ([p.surname],[p.id]));
    //console.log(names);
    //var ht=profile.map( employee =>
      //<div>{employee.surname}</div>
    //);
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
                <tr><td>{birthday}:</td><td>7 марта</td></tr>
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
  lang: state.language.lang,
})

const mapDispatchToProps = {
  fetchData
}


export default connect(mapStateToProps,mapDispatchToProps)(Profile);