import React from 'react';

import './Spinner.css';

class Spinner extends React.PureComponent {

  render() {
    console.log("Рендер Spinner");
    return (
      <div className="backdrop">
        <div className="loader"> 
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
         </div>
      </div>
    );
  }

}

export default Spinner;