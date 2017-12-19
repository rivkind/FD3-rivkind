var FilterBlock = React.createClass({
    
      displayName: 'FilterBlock',
    
      propTypes: {
        countries:React.PropTypes.arrayOf(
          React.PropTypes.string.isRequired,
        ),
      },
    
      getInitialState: function() {
        return { 
          isChecked: false,
          data: this.props.countries,
          searchWord: '',
        };
      },
      
      _sort: function() {
        this.setState({isChecked: !this.state.isChecked,},this._prepareData);
      },
      
      _search: function(e){
        this.setState({searchWord: e.target.value.toLowerCase()},this._prepareData);
      },

      _prepareData: function() {
        var updatedList = this.props.countries.slice();
        if(this.state.searchWord){
          var word=this.state.searchWord;
          updatedList = updatedList.filter(function(item){
            return item.toLowerCase().includes(word);
          });
        }
        if(this.state.isChecked){
          updatedList.sort();
        }
        this.setState({data: updatedList});
      },
      
      
      render: function() {
        return React.DOM.div( {className:'FilterBlock'}, 
          React.DOM.input( {className:'FilterSort',type:'checkbox',onClick:this._sort}),
          React.DOM.input( {className:'FilterSearch',type:'text',onChange:this._search}),
          React.DOM.ul({className:'FilterList'},
          this.state.data.map(function(name,idx){
            return React.DOM.li({key:idx},name);
          })
         ),
    );
  },
});