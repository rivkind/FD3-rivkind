import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

import ColorFrame from './ColorFrame';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors:PropTypes.array.isRequired,
  };
    
    render() {

    let childCode = this.props.children;

    for ( let v of this.props.colors ) {
        childCode = <ColorFrame color={v}>{childCode}</ColorFrame>
    }
    return (
      <div>
        {childCode}
      </div>
    );

  }

}

export default RainbowFrame;