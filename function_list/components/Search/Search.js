import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';

import { newSearchWord } from '../../actions/search';


import './Search.css';

class Search extends React.PureComponent {

  static propTypes = {
    search_title: PropTypes.string, // передано из Redux
    search: PropTypes.string, // передано из Redux
  };

  newTextRef = null;
  
  setNewTextSearch = (ref) => this.newTextRef=ref;
  
  pressEnter = (target) => {
    if(target.charCode==13) this.setSearch();  
  };

  setSearch = () => {
    if ( this.newTextRef ) {
      let newText=this.newTextRef.value.trim();
      if(newText!=''){
        this.props.newSearchWord(newText);
        this.newTextRef.value=''; 
      }
    }
  }

  render() {
    console.log('Рендер Search');
    return (
      <div className='SearchBlock'>
        <span></span>
        <div>
          <input name="text" placeholder={this.props.search_title} type="text"  onKeyPress={this.pressEnter} ref={this.setNewTextSearch} />
          <a>
            <img src='../images/search.png' onClick={this.setSearch} />
          </a>
        </div>
        {
          (this.props.search)&&
          <Redirect from="/" to={`/search/${this.props.search}`} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search_title: state.functionlist.title.search,
  search: state.search.search,
})

const mapDispatchToProps = {
  newSearchWord,
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);

