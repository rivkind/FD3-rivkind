import React from 'react';

import './FilterList.css';

class FilterList extends React.PureComponent {

  render() {

    return (
      <div className='FilterList'>
        <img src='../images/filter.png' title="Фильтр" alt="Фильтр" />
        <div>
            <table cellSpacing="8">
                <tbody>
                    <tr><td align="left"><b>Фильтр:</b></td></tr>
                    <tr><td> </td></tr>
                    <tr><td><input defaultValue="Применить" type="submit" /><input defaultValue="Закрыть" type="button" /></td></tr>
                </tbody>
            </table>
            
        </div>
      </div>
    );
  }

}

export default FilterList;