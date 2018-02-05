import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { changeVisibleFilter } from '../../actions/filterlist';

import FilterWindow from '../FilterWindow/FilterWindow';
import './FilterList.css';

class FilterList extends React.PureComponent {

  static propTypes = {
    filter_title: PropTypes.any, // передано из Redux
    isFilter: PropTypes.bool, // передано из Redux
  };

  chVisibleFilter = () => {
    this.props.changeVisibleFilter(this.props.isFilter);
  }

  render() {
    const {filter} = this.props.filter_title;
    return (
      <div className='FilterList'>
        <img className='btn_FilterList' src='../images/filter.png' title='1' alt='1' onClick={this.chVisibleFilter} />
        {
        (this.props.isFilter)&&
        <FilterWindow />
        }
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

export default connect(mapStateToProps,mapDispatchToProps)(FilterList);