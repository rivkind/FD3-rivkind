import React from 'react';
import {connect} from 'react-redux';

import { changeVisibleFilter } from '../../actions/filterlist';

import './FilterWindow.css';

class FilterWindow extends React.PureComponent {

  componentWillMount () {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }
  handleClickOutside = (e) => {

    const FilterWindow = document.getElementsByClassName('FilterWindow')[0];
    
    if(!FilterWindow.contains(e.target)){
        this.props.changeVisibleFilter(this.props.isFilter);
    }
    
  }

  chVisibleFilter = () => {
    
    this.props.changeVisibleFilter(this.props.isFilter);

  }

  test = () => {
    
    console.log('a');

  }

  render() {
    const {filter,apply,close,all_company,all_gender,all_no_maternity,male,female,maternity,all_mng,all_division,all_unit,all_team,all_position} = this.props.filter_title;
    this.test();
    var positionCode=this.props.position.map( pos =>
      <option key={pos.id} value={pos.id}>{pos.name}</option>
    );
    let adults = this.props.unit.filter(u => u.id_type == 1);

    let mngCode = adults.map( u =>
      <option key={u.id} value={u.id}>{u.name}</option>
    );
    adults = this.props.unit.filter(u => u.id_type == 2);
    
    let divisionCode = adults.map( u =>
      <option key={u.id} value={u.id}>{u.name}</option>
    );
    adults = this.props.unit.filter(u => u.id_type == 3);
    
    let unitCode = adults.map( u =>
      <option key={u.id} value={u.id}>{u.name}</option>
    );
    
    let teamCode = this.props.team.map( t =>
      <option key={t.id} value={t.id}>{t.name}</option>
    );
    //var mngCode=this.props.unit.filter(function(u){
      //if(u.id_type==1){return <option value={u.id}>{u.name}</option>;}
    //}
      
    //);

    return (
        <div className='FilterWindow'>
            <h4>{filter}:</h4>
            <div>
            <select><option value='0'>{all_company}</option><option value='2'>BeST</option><option value='1'>LifeTech</option></select>
            </div>
            <div>
            <select>
                <option value='0'>{all_gender}</option>
                <option value='DM'>{all_no_maternity}</option>
                <option value='M'>{male}</option>
                <option value='F'>{female}</option>
                <option value='D'>{maternity}</option>
            </select>
            </div>
            <div><select><option value='0'>{all_mng}</option>{mngCode}</select></div>
            <div><select><option value='0'>{all_division}</option>{divisionCode}</select></div>
            <div><select><option value='0'>{all_unit}</option>{unitCode}</select></div>
            <div><select><option value='0'>{all_team}</option>{teamCode}</select></div>
            <div><select><option value='0'>{all_position}</option>{positionCode}</select></div>
            <div className='btnBlockFilter'><input defaultValue={apply} type="button" /><input defaultValue={close} type="button" onClick={this.chVisibleFilter} /></div>
        </div>
    );
  }

}

const mapStateToProps = state => ({
  filter_title: state.functionlist.title,
  isFilter: state.filterlist.isFilter,
  position:state.functionlist.position,
  unit:state.functionlist.unit,
  team:state.functionlist.team,
})

const mapDispatchToProps = {
  changeVisibleFilter,
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterWindow);