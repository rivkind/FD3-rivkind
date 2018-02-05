import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './Counter.css';

class Counter extends React.PureComponent {

  static propTypes = {
    counter_title: PropTypes.string, // передано из Redux
    count: PropTypes.number, // через props
  };

  render() {

    return (
      <div className='CounterBlock'>
        <span></span>
        <div className='CounterBlockView' title={this.props.counter_title}>
        {
          (this.props.count>0)?
          <div>{this.props.count}</div>
          :
          '0'
        }
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  counter_title: state.functionlist.title.counter,
})

export default connect(mapStateToProps)(Counter);