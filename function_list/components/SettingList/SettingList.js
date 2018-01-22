import React from 'react';
import {connect} from 'react-redux';

import { getSettings, changeVisibleSettings, saveSettingsAction } from '../../actions/settinglist';
import './SettingList.css';

class SettingList extends React.PureComponent {

  componentWillMount () {
    this.props.getSettings();
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }
  handleClickOutside = (e) => {

    const btnSettingsWindow = document.getElementsByClassName('btn_SettingList')[0];
    const settingsWindow = document.getElementsByClassName('SettingsWindow')[0];
    
    if(settingsWindow && !settingsWindow.contains(e.target) && !btnSettingsWindow.contains(e.target)){

      this.props.changeVisibleSettings(this.props.isSettings);
    
    }
    
  }
  
  chVisibleSettings = () => {

    this.props.changeVisibleSettings(this.props.isSettings);

  }

  saveSettings = () => {
    
    let dataSettings = [
      this.refs.postitionRef.checked,
      this.refs.mngRef.checked,
      this.refs.divisionRef.checked,
      this.refs.unitRef.checked,
      this.refs.teamRef.checked,
      this.refs.lctnRef.checked,
      this.refs.phoneRef.checked,
      this.refs.emailRef.checked
    ];
    
    this.props.saveSettingsAction(dataSettings,this.props.isSettings);
    
 }
  
  render() {
    const {settings,apply,close,position,mng,division,unit,team,lctn,phone,email} = this.props.settings_title;
    const arraySettings = [
      {"label":"postitionRef","name":position},
      {"label":"mngRef","name":mng},
      {"label":"divisionRef","name":division},
      {"label":"unitRef","name":unit},
      {"label":"teamRef","name":team},
      {"label":"lctnRef","name":lctn},
      {"label":"phoneRef","name":phone},
      {"label":"emailRef","name":email}];

    var inputCode=arraySettings.map( (setting,index) =>
      <div className='inputBlockSettings' key={index}><div><input  type='checkbox' ref={setting.label} defaultChecked={this.props.settings_data[index]} /></div><div>{setting.name}</div></div>
    );
    
    return (
      <div className='SettingList'>
        <img className='btn_SettingList' src='../images/settings.png' title={settings} alt={settings} onClick={this.chVisibleSettings} />
        {
        (this.props.isSettings)&&
        <div className='SettingsWindow'>
          <h4>{settings}:</h4>
          {inputCode}
          <div className='btnBlockSettings'><input defaultValue={apply} type="button" onClick={this.saveSettings} /><input defaultValue={close} type="button" onClick={this.chVisibleSettings} /></div>
        </div>
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
  saveSettingsAction,
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingList);