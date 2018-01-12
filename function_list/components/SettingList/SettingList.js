import React from 'react';

import './SettingList.css';

class SettingList extends React.PureComponent {

  render() {

    return (
      <div className='SettingList'>
        <img src='../images/settings.png' title="Настройки" alt="Настройки" />
        <div>
            <table cellSpacing="8">
                <tbody>
                    <tr><td align="left"><b>Настройки:</b></td></tr>
                    <tr><td> </td></tr>
                    <tr><td><input defaultValue="Применить" type="submit" /><input defaultValue="Закрыть" type="button" /></td></tr>
                </tbody>
            </table>
            
        </div>
      </div>
    );
  }

}

export default SettingList;