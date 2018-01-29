import React from 'react';
import {connect} from 'react-redux';

import { getSettings, changeVisibleSettings } from '../../actions/settinglist';

import SettingsWindow from '../SettingsWindow/SettingsWindow';
import './SettingList.css';

class SettingList extends React.PureComponent {

  componentWillMount () {
    this.props.getSettings();
  }

  
  chVisibleSettings = () => {

    this.props.changeVisibleSettings(this.props.isSettings);
  }

  
  render() {
    console.log('Рендер SettingList: ',this.props.settings_data);
    const {settings} = this.props.settings_title;
    
    return (
      <div className='SettingList'>
        <img className='btn_SettingList' src='../images/settings.png' title={settings} alt={settings} onClick={this.chVisibleSettings} />
        {
        (this.props.isSettings)&&
        <SettingsWindow />
        }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  settings_title: state.functionlist.title,
  isSettings: state.settinglist.isSettings,
  settings_data: state.settinglist.settings,
})

const mapDispatchToProps = {
  changeVisibleSettings,
  getSettings,
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingList);