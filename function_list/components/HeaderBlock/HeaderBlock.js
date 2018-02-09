import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Birthday from '../Birthday/Birthday';
import Language from '../Language/Language';
import FilterList from '../FilterList/FilterList';
import SettingList from '../SettingList/SettingList';
import Tooltip from '../Tooltip/Tooltip';
import Menu from '../Menu/Menu';

import './HeaderBlock.css';

class HeaderBlock extends React.Component {

  static propTypes = {
    isError: PropTypes.bool.isRequired,// передано из Redux
  };

  render() {
    
    return (
      <header>
        <Logo />
        {
          (!this.props.isError)&&
          <span>
            <Search />
            <Birthday />
            <div className='HeaderBlockRight'>
              <div className='HeaderBlockRightTop'>
                <Language />
              </div>
              <div className='HeaderBlockRightBottom'>
                <SettingList />
              </div>
            </div>
            <Menu />
          </span>
        }
        {
          (this.props.tooltip>0)&&
          <Tooltip offsetx={this.props.tooltipX} offsety={this.props.tooltipY} tooltipid={this.props.tooltip} />
        }
      </header>
    );
  }
}


const mapStateToProps = state => ({
  isError: state.functionlist.isError,
  tooltip: state.employeelist.tooltip,
  tooltipX: state.employeelist.tooltipX,
  tooltipY: state.employeelist.tooltipY,
})



export default connect(mapStateToProps, null, null, {pure:false})(HeaderBlock);
