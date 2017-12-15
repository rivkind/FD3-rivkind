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
          allCountries: this.props.countries,
          data: [],
          searchWord: '',
        };
      },
      
      _prepareData: function(word) {
        var updatedList = this.state.allCountries;
        updatedList = updatedList.filter(function(item){
          return item.toLowerCase().includes(word);
        });
        this.setState({data: updatedList});
      },

      _sort: function() {
        this.setState({
            isChecked: !this.state.isChecked,
        });
        this._prepareData(this.state.searchWord);
      },
      
      _search: function(e){
        var tempWord = e.target.value.toLowerCase();
        this.setState({searchWord: tempWord});
        this._prepareData(tempWord);
      },
      componentWillMount: function(){
        this.setState({data: this.state.allCountries})
      },
      
      render: function() {
        return React.DOM.div( {className:'FilterBlock'}, 
          React.DOM.input( {className:'FilterSort',type:'checkbox',onClick:this._sort}),
          React.DOM.input( {className:'FilterSearch',type:'text',onChange:this._search}),
          React.DOM.ul({className:'FilterList'},
          (this.state.isChecked)?
                this.state.data.sort().map(function(name,idx){
                    return React.DOM.li({key:idx},name);
                }):
                this.state.data.map(function(name,idx){
                  return React.DOM.li({key:idx},name);
              })
         ),
        );
    
      },
    
    });