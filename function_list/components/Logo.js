import React from 'react';

import './Logo.css';

class Logo extends React.PureComponent {

  render() {

    return (
      <a href="/" className='LogoLink'>
        <img src='../images/life.png' />
      </a>
    );
  }

}

export default Logo;