import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {default as isoFetch} from 'isomorphic-fetch';

import { fetchData } from '../../actions/functionlist';

import Spinner from '../Spinner/Spinner';
import HeaderBlock from '../HeaderBlock/HeaderBlock';
import './FunctionList.css';

class FunctionList extends React.Component {

  componentWillMount () {
    this.props.fetchData(this.props.lang,this.props.company);
  }

  

  componentDidUpdate(oldProps, oldState){
    if(oldProps.lang!=this.props.lang){
      this.props.fetchData(this.props.lang,oldProps.company);
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
  lang: state.language.lang,
  company: state.functionlist.company,
  isLoading: state.functionlist.isLoading,
  title_site: state.functionlist.title.titleSite
})

const mapDispatchToProps = {
  fetchData
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(FunctionList);
