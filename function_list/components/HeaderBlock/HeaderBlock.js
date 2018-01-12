import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Birthday from '../Birthday/Birthday';
import Counter from '../Counter/Counter';
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

    return (
      <header>
        <Logo />
        <Search />
        <Birthday />
        <div className='HeaderBlockRight'>
          <div className='HeaderBlockRightTop'>
            <Counter />
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

export default HeaderBlock;