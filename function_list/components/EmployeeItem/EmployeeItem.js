import React from 'react';
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
    return (
      <div className='EmployeeItem'>
        <div className='surnameEmployee'>{this.props.info.surname}</div>
        <div></div>
        {
            (this.props.settings_data[0])&&
            <div>{this.props.info.position}</div>
        }
        
      </div>
    )
    ;

  }

}




const mapStateToProps = state => ({
  settings_data: state.settinglist.settings,
})

export default connect(mapStateToProps)(EmployeeItem);
