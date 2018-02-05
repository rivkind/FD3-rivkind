import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { fetchData } from '../../actions/functionlist';

import Spinner from '../Spinner/Spinner';
import HeaderBlock from '../HeaderBlock/HeaderBlock';

import './FunctionList.css';

class FunctionList extends React.Component {

  static propTypes = {
    lang: PropTypes.string, // передано из Redux
    isLoading: PropTypes.bool.isRequired,// передано из Redux
  };

  componentDidUpdate(oldProps, oldState){
      if(oldProps.lang!=this.props.lang){
        this.props.fetchData(this.props.lang);
      }
  }
  
  render() {
    console.log("Рендер FunctionList");
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
      <HeaderBlock />
      {this.props.children}
      </div>
    );
  }
}



const mapStateToProps = state => ({
  lang: state.language.lang,
  isLoading: state.functionlist.isLoading,
})

const mapDispatchToProps = {
  fetchData
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(FunctionList);

