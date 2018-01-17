import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { language_create as fetchLanguage,language_change } from '../../actions/language';

import './Language.css';

class Language extends React.PureComponent {

  static propTypes = {
    lang: PropTypes.string.isRequired, // передано из Redux
  };

  componentWillMount() {
    // изначально счётчика с идентификатором counterid нет
    // создадим
    //this.props.fetchLanguage();
    //this.props.dispatch( counterButton_create(this.props.counterid) );
  }

  changeLanguage = (EO) => {
    let l1=EO.target.src.split('/');
    let lang = l1[l1.length-1].split('.');
    this.props.dispatch( language_change(lang[0]));
    console.log('Язык - ',this.props.lang);
    
    
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
  lang: state.language.lang,
})

const mapDispatchToProps = {
  //fetchLanguage
}

export default connect(mapStateToProps)(Language);