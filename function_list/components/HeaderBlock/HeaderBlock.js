import React from 'react';

import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Birthday from '../Birthday/Birthday';
import Language from '../Language/Language';
import FilterList from '../FilterList/FilterList';
import SettingList from '../SettingList/SettingList';
import Menu from '../Menu/Menu';

import './HeaderBlock.css';

class HeaderBlock extends React.Component {

  render() {
    console.log('Рендер Шапки');
    return (
      <header>
        <Logo />
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
      </header>
    );
  }
}

export default HeaderBlock;
