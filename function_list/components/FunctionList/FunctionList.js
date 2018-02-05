import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { fetchData } from '../../actions/functionlist';
import { changeSort } from '../../actions/employeelist';
import { changeActivePage } from '../../actions/employeelist';

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
        this.props.changeSort('', '');
        this.props.changeActivePage(1);
      }
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
  changeActivePage,fetchData,changeSort
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(FunctionList);

