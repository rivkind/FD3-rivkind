var InternetShop = React.createClass({

    displayName: 'InternetShop',

    propTypes: {
        items:React.PropTypes.arrayOf(
          React.PropTypes.shape({
            id_item: React.PropTypes.number.isRequired,
            title: React.PropTypes.string.isRequired,
            cost: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
          })
        )
        
    },

    getInitialState: function() {
        return { 
        items: this.props.items,
          isNewItem: false,
          isEditItem: false,
          activeItem: null,
        };
    },

    rowSelected: function(code) {
        this.setState( {activeItem:code,isNewItem:false} );
    },

    rowEdited: function(code) {
        this.setState( {isEditItem:true,isNewItem:false} );
    },

    clickNew: function() {
        this.setState( {isNewItem:true,activeItem: null,isEditItem: false} );
    },

    rowDeleted: function(code) {
        if(confirm("Вы уверены, что хотите удалить?")){
            var updData = this.state.items;
            updData.splice(code, 1);
            this.setState( {items:updData,activeItem:null,isEditItem:false,isNewItem:false} );
        }
        
    },

    render: function() {
        var headersCode = React.DOM.tr({className:'item_header'},
            this.props.headers.map(function(title,idx){
                return React.DOM.th({key:idx},title);
            })
        );

        var itemsCode=this.state.items.map( (v,idx) =>
            React.createElement(ItemShop, {key:idx,num:idx,
              text:v.title, cost:v.cost, code:v.id_item, descr:v.description,
              cbSelected:this.rowSelected,
              cbEdited:this.rowEdited,
              cbDeleted:this.rowDeleted,
              activeRow:this.state.activeItem,
            })
        );

        return React.DOM.div(null,
            React.DOM.div(null,
                React.DOM.table( {className:'InternetShop'}, 
                    React.DOM.thead( null, headersCode ),
                    React.DOM.tbody( null, itemsCode ),
                ),
            ),  
        ((this.state.isNewItem)||(this.state.activeItem))
        ?React.createElement(ViewBlock,{isNewItem:this.state.isNewItem,
            isEditItem:this.state.isEditItem,
            activeItem:this.state.activeItem,
            data:this.state.items,
        })
        :null,
        (!this.state.isNewItem)? React.DOM.div({className:'btnNewItem',onClick:this.clickNew},React.DOM.button(null,'Новый товар')):null,
        );
    },

});