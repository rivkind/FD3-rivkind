import React from 'react';

import './Birthday.css';

class Birthday extends React.PureComponent {

  render() {

    return (
      <div className='BirthdayBlock'>
        <span></span>
        <div>
          <a><img src='../images/birthday.png' /></a>
        </div>
      </div>
    );
  }

}

export default Birthday;