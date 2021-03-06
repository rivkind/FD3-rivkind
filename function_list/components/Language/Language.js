import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { languageChange, getLanguage } from '../../actions/language';

import './Language.css';

class Language extends React.PureComponent {

  static propTypes = {
    lang: PropTypes.string.isRequired, // передано из Redux
  };

  componentWillMount () {
    this.props.getLanguage(this.props.lang);
  }

  changeLanguage = (EO) => {

    let lang = EO.target.dataset.label;
    this.props.languageChange(lang);
  
  }

  render() {
    
    return (
      <div className='LanguageBlock'>
      {
        (this.props.lang=='rus')?
        <img data-label='eng' src="../images/eng.png" onClick={this.changeLanguage} />
        :
        <img data-label='rus' src="../images/rus.png" onClick={this.changeLanguage} />
      }
      </div>
    );
  }

}

const mapStateToProps = state => ({

  lang: state.language.lang,
  
})

const mapDispatchToProps = {

  languageChange,
  getLanguage,

}

export default connect(mapStateToProps,mapDispatchToProps)(Language);