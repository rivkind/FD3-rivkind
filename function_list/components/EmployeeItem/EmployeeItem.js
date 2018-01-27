import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './EmployeeItem.css';


class EmployeeItem extends React.PureComponent {

  

  static propTypes = {
    //employee: PropTypes.any, // передано из Redux
    //lang: PropTypes.any, // передано из Redux
  };
  componentDidMount(){
    //console.log(this.props.location.pathname);
  }
  
 
  render() {
     //console.log("Рендер сотрудника ",this.props.info.id);
     const arrayData = [
      {"label":"positionEmployee","name":this.props.items.position},
      {"label":"mngEmployee","name":this.props.items.mng},
      {"label":"divisionEmployee","name":this.props.items.division},
      {"label":"unitEmployee","name":this.props.items.unit},
      {"label":"teamEmployee","name":this.props.items.gr},
      {"label":"lctnEmployee","name":this.props.items.lctn},
      {"label":"phoneEmployee","name":this.props.items.phone},
      {"label":"emailEmployee","name":this.props.items.email}];

      var infoCode=arrayData.map( (data,index) =>
      (this.props.settings_data[index])&&
      <div className={data.label}>{data.name}</div>
    );

    return (
      <div className='EmployeeItem'>
        <div className='surnameEmployee'>{this.props.items.surname}</div>
        <div className='sexEmployee'></div>
        {infoCode}
      </div>
    )
    ;

  }

}




const mapStateToProps = state => ({
  settings_data: state.settinglist.settings,
})

export default connect(mapStateToProps)(EmployeeItem);
