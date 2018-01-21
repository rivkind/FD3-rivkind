import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {default as isoFetch} from 'isomorphic-fetch';

import { fetchData } from '../../actions/functionlist';

import Spinner from '../Spinner/Spinner';
import HeaderBlock from '../HeaderBlock/HeaderBlock';
import './FunctionList.css';
//import { FETCH_DATA_START,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from '../../constants/constants';

class FunctionList extends React.Component {

  componentWillMount () {
    this.props.fetchData(this.props.lang);
  }


 
  render() {
    if(this.props.title_site) document.title = this.props.title_site;

    return (
      <div>
      {
        (this.props.isLoading)
        ?
        <Spinner />
        :
        null
      }
      {
      (this.props.lang)&&
      <div>
        <HeaderBlock />
        {this.props.children}
      </div>
      }
      </div>
    );
  }
}



const mapStateToProps = state => ({
  lang: state.functionlist.lang,
  isLoading: state.functionlist.isLoading,
  title_site: state.functionlist.title.titleSite
})

const mapDispatchToProps = {
  fetchData
}

//export default FunctionList;
export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(FunctionList);
