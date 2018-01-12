import React from 'react';
import {connect} from 'react-redux';

import { language_create as fetchLanguage } from '../../actions/language';

import './Language.css';

class Language extends React.PureComponent {

  componentWillMount() {
    // изначально счётчика с идентификатором counterid нет
    // создадим
    this.props.fetchLanguage();
    //this.props.dispatch( counterButton_create(this.props.counterid) );
  }

  render() {

    return (
      <div className='LanguageBlock'>
        <a href='#'><img src="../images/eng.png" /></a>
      </div>
    );
  }

}

const mapDispatchToProps = {
  fetchLanguage
}

export default connect(null,mapDispatchToProps)(Language);