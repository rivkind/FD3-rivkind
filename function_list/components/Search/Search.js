import React from 'react';

import './Search.css';

class Search extends React.PureComponent {

  render() {

    return (
      <div className='SearchBlock'>
        <span></span>
        <div>
          <input name="text" placeholder="Поиск..." type="text" />
          <a>
            <img src='../images/search.png' />
          </a>
        </div>
        
      </div>
    );
  }

}

export default Search;