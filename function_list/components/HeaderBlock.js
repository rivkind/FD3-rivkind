import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Logo from './Logo';
import Search from './Search';
import Birthday from './Birthday';
import Counter from './Counter';
import Language from './Language';
import FilterList from './FilterList';
import SettingList from './SettingList';
import PagesLinks from '../pages/PagesLinks';
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
        <Counter />
        <Language />
        <FilterList />
        <SettingList />
        <PagesLinks />
      </header>
    );
  }

}

export default HeaderBlock;