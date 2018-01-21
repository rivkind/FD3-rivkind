import React from 'react';
import {connect} from 'react-redux';
import { SETTINGS_CHANGE_VISIBLE,FILTER_CHANGE_VISIBLE,SETTINGS_CHANGE } from '../../constants/constants';
import './SettingList.css';

class SettingList extends React.PureComponent {

  changeVisibleSettings = () => {
    this.props.dispatch({
      type: SETTINGS_CHANGE_VISIBLE,
      preload:!this.props.isSettings,
    });
    if(this.props.isFilter){
      this.props.dispatch({
        type: FILTER_CHANGE_VISIBLE,
        preload:false,
      });
    }
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
    localStorage.setItem('settings', JSON.stringify(dataSettings));
    this.props.dispatch({
      type: SETTINGS_CHANGE,
      preload:dataSettings,
    });
    this.props.dispatch({
      type: SETTINGS_CHANGE_VISIBLE,
      preload:!this.props.isSettings,
    });
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
        <img src='../images/settings.png' title={settings} alt={settings} onClick={this.changeVisibleSettings} />
        {
        (this.props.isSettings)&&
        <div>
          <h4>{settings}:</h4>
          {inputCode}
          <div className='btnBlockSettings'><input defaultValue={apply} type="button" onClick={this.saveSettings} /><input defaultValue={close} type="button" onClick={this.changeVisibleSettings} /></div>
        </div>
        }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  settings_title: state.functionlist.title,
  isSettings: state.settinglist.isSettings,
  isFilter: state.filterlist.isFilter,
  settings_data: state.functionlist.settings,
})

export default connect(mapStateToProps)(SettingList);