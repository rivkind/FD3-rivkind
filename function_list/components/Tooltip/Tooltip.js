import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './Tooltip.css';


class Tooltip extends React.Component {

  render() {

    const {surname,sex,close,position,mng,division,unit,team,lctn,phone,email,birthday} = this.props.list_title;
    var profile = this.props.employees.filter(employee => employee.id == this.props.tooltipid);
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
        <div className='Tooltip' style={{left:this.props.offsetx,top:this.props.offsety}}>
        
          
          <div>
            <div>
              <div className='surnameTooltip'>{surname1}</div>
            </div>
            <div className='infoTooltip'>
              <div className='photoTooltip'><img src={`/images/${ph}`} /></div>
              <div className='iTooltip'>
                <div><div>{position}: {pos}</div><div>{mng}: </div><div>{phone}: {p}</div></div>
              </div>
              <div style={{clear:'both'}}></div>
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




export default connect(mapStateToProps)(Tooltip);
