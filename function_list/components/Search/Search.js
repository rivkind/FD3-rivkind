import React from 'react';
import { Redirect } from 'react-router'
import {connect} from 'react-redux';

import { newSearchWord } from '../../actions/search';

import './Search.css';

class Search extends React.PureComponent {

  newTextRef = null;
  
  setNewTextSearch = (ref) => {
    this.newTextRef=ref;
  };

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
    const { from } =  '/';
    const to = "/search/"+this.props.search;
    return (
      <div className='SearchBlock'>
        <span></span>
        <div>
          <input name="text" placeholder={this.props.search_title} type="text"  onKeyPress={this.pressEnter} ref={this.setNewTextSearch} />
          <a>
            <img src='../images/search.png' onClick={this.setSearch} />
          </a>
          {(this.props.search && from!=to) && (
          <Redirect to={from || to} />
          )}
        </div>
        
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

