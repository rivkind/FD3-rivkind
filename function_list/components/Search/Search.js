import React from 'react';
import {connect} from 'react-redux';
import './Search.css';

class Search extends React.PureComponent {

  render() {
    console.log('Рендер Search');
    return (
      <div className='SearchBlock'>
        <span></span>
        <div>
          <input name="text" placeholder={this.props.search_title} type="text" ref='' />
          <a>
            <img src='../images/search.png' />
          </a>
        </div>
        
      </div>
    );
  }

}

//export default Search;
const mapStateToProps = state => ({
  search_title: state.functionlist.title.search,
})

export default connect(mapStateToProps)(Search);