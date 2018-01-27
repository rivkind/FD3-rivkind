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

  render() {
    const {filter,apply,close,all_company,all_gender,all_no_maternity,male,female,maternity,all_mng,all_division,all_unit,all_team,all_position} = this.props.filter_title;
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
            <div><select><option value='0'>{all_mng}</option></select></div>
            <div><select><option value='0'>{all_division}</option></select></div>
            <div><select><option value='0'>{all_unit}</option></select></div>
            <div><select><option value='0'>{all_team}</option></select></div>
            <div><select><option value='0'>{all_position}</option></select></div>
            <div className='btnBlockFilter'><input defaultValue={apply} type="button" /><input defaultValue={close} type="button" onClick={this.chVisibleFilter} /></div>
        </div>
    );
  }

}

const mapStateToProps = state => ({
  filter_title: state.functionlist.title,
  isFilter: state.filterlist.isFilter,
})

const mapDispatchToProps = {
  changeVisibleFilter,
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterWindow);