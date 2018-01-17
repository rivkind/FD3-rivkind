import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {default as isoFetch} from 'isomorphic-fetch';

//import { fetchData } from '../../actions/functionlist';



import './EmployeeList.css';
import { FETCH_DATA_START,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from '../../constants/constants';

class EmployeeList extends React.PureComponent {

  static propTypes = {
    employee: PropTypes.any, // передано из Redux
    lang: PropTypes.any, // передано из Redux
  };

  

  componentDidMount () {
    //this.loadData();
    this.props.dispatch({type:FETCH_DATA_START});
    //this.props.dispatch({type:FETCH_DATA_START});
    //this.props.fetchData();
  }
 
  render() {
      console.log('Рендер EmployyList');
    return (
      <div>
        
      {this.props.lang}
      </div>
    )
    ;

  }

}



const mapStateToProps = state => ({
  employee: state.employee,
  lang: state.language.lang,
})

//export default EmployeeList;
//export default connect(mapStateToProps)(EmployeeList);

import { withRouter } from 'react-router-dom'
export default withRouter(connect(mapStateToProps)(EmployeeList))
