import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

import ColorFrame from './ColorFrame';

class RainbowFrame extends React.Component {

    shuffle = (arr) => {
        return arr.sort(function() {return 0.5 - Math.random()});
    }
    
    render() {

    let newArrColors = this.shuffle(this.props.colors);

    let childCode = <div className='Answers'>{this.props.text}</div>;

    for(let i=0; i<newArrColors.length; i++){
        childCode = <ColorFrame color={this.props.colors[i]}>
                        {childCode}
                    </ColorFrame>
    }
    return (
      <div>
        {childCode}
      </div>
    );

  }

}

export default RainbowFrame;