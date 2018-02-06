import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Logo.css';

class Logo extends React.PureComponent {

  static propTypes = {
    isError: PropTypes.bool.isRequired,// передано из Redux
  };

  render() {
    
    return (
      <div>
      {
        (!this.props.isError)?
        <NavLink to="/" className="LogoLink"><img src='/images/life.png' /></NavLink>
        :
        <a href="/" className="LogoLink"><img src='/images/life.png' /></a>
      }
      </div>
    );
  }

}


const mapStateToProps = state => ({
  isError: state.functionlist.isError,
})



export default connect(mapStateToProps)(Logo);