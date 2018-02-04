import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Birthday from '../Birthday/Birthday';
import Spinner from '../Spinner/Spinner';
import Language from '../Language/Language';
import FilterList from '../FilterList/FilterList';
import SettingList from '../SettingList/SettingList';
import Menu from '../Menu/Menu';
import './HeaderBlock.css';

class HeaderBlock extends React.Component {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {
    console.log('Рендер Шапки');
    return (
      <header>
        {
          (this.props.isLoading)
          ?
          <Spinner />
          :
          null
        }
        <Logo />
        
        <Search />
        <Birthday />
        <div className='HeaderBlockRight'>
          <div className='HeaderBlockRightTop'>
            <Language />
          </div>
          <div className='HeaderBlockRightBottom'>
            <SettingList />
            <FilterList />
          </div>
        </div>
        <Menu />
      </header>
    );
  }

}

const mapStateToProps = state => ({
  isLoading: state.functionlist.isLoading,
})

export default connect(mapStateToProps, null, null, {pure:false})(HeaderBlock);
