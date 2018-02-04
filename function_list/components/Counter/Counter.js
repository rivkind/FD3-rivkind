import React from 'react';
import {connect} from 'react-redux';
import './Counter.css';

class Counter extends React.PureComponent {

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