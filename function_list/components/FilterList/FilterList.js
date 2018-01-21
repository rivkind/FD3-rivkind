import React from 'react';
import {connect} from 'react-redux';
import { FILTER_CHANGE_VISIBLE,SETTINGS_CHANGE_VISIBLE } from '../../constants/constants';
import './FilterList.css';

class FilterList extends React.PureComponent {

  changeVisibleFilter = () => {
    this.props.dispatch({
      type: FILTER_CHANGE_VISIBLE,
      preload:!this.props.isFilter,
    });
    if(this.props.isSettings){
      this.props.dispatch({
        type: SETTINGS_CHANGE_VISIBLE,
        preload:false,
      });
    }
  }

  render() {
    const {filter,apply,close,all_company,all_gender,all_no_maternity,male,female,maternity,all_mng,all_division,all_unit,all_team,all_position} = this.props.filter_title;
    return (
      <div className='FilterList'>
        <img src='../images/filter.png' title="Фильтр" alt="Фильтр" onClick={this.changeVisibleFilter} />
        {
        (this.props.isFilter)&&
        <div>
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
          <div><select><option value='0'>{all_mng}</option></select></div>
          <div><select><option value='0'>{all_division}</option></select></div>
          <div><select><option value='0'>{all_unit}</option></select></div>
          <div><select><option value='0'>{all_team}</option></select></div>
          <div><select><option value='0'>{all_position}</option></select></div>
          <div className='btnBlockFilter'><input defaultValue={apply} type="button" /><input defaultValue={close} type="button" onClick={this.changeVisibleFilter} /></div>
        </div>
        }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  filter_title: state.functionlist.title,
  isFilter: state.filterlist.isFilter,
  isSettings: state.settinglist.isSettings,
})

export default connect(mapStateToProps)(FilterList);