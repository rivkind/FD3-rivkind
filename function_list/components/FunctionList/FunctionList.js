import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {default as isoFetch} from 'isomorphic-fetch';

//import { fetchData } from '../../actions/functionlist';

import Spinner from '../Spinner/Spinner';
import HeaderBlock from '../HeaderBlock/HeaderBlock';
import './FunctionList.css';
//import { FETCH_DATA_START,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from '../../constants/constants';

class FunctionList extends React.Component {

  static propTypes = {
    //employee: PropTypes.any, // передано из Redux
  };

  

  componentDidMount () {
    //this.loadData();
    //this.props.dispatch({type:FETCH_DATA_START});
    //this.props.dispatch({type:FETCH_DATA_START});
    //this.props.fetchData();
  }
 
  render() {
    return (
      <div>
        
      <HeaderBlock />
      {this.props.children}
      </div>
    )
    ;

  }

}



//const mapStateToProps = state => ({
 // employee: state.employee,
//})

export default FunctionList;
//export default connect(mapStateToProps)(FunctionList);
