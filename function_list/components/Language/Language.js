import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchData } from '../../actions/functionlist';
//import {fetchData } from '../../actions/functionlist';

import './Language.css';

class Language extends React.PureComponent {

  static propTypes = {
    lang: PropTypes.string.isRequired, // передано из Redux
  };

  componentWillMount() {
    // изначально счётчика с идентификатором counterid нет
    // создадим
    
  }

  changeLanguage = (EO) => {
    let l1=EO.target.src.split('/');
    let lang = l1[l1.length-1].split('.');
    this.props.fetchData(lang[0]);
    //this.props.dispatch(language_change(lang[0]));
    //fetchData(lang[0]);
    //console.log('Язык - ',this.props.lang);
    
    
    //dispatch({type:LANGUAGE_CHANGE,preload:lang[0]});
    
  }


  render() {
    console.log('Рендер',this.props.lang);
    return (
      <div className='LanguageBlock'>
      {
        (this.props.lang=='rus')?
        <img src="../images/eng.png" onClick={this.changeLanguage} />
        :
        <img src="../images/rus.png" onClick={this.changeLanguage} />
      }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  lang: state.functionlist.lang,
  //employee: state.functionlist.employee,
  //title: state.functionlist.title,
})

const mapDispatchToProps = {
  fetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(Language);