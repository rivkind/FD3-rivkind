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
          activeRow: null,
          isDelete:false,
        };
    },

    rowSelected: function(num,code) {
         this.setState( {activeRow:code,activeItem:num,isNewItem:false,isEditItem:false} );
       
        
    },

    rowEdited: function(code,num) {
        this.setState( {isEditItem:true,isNewItem:false,activeRow:num,activeItem:code} );
    },

    clickNew: function() {
        this.setState( {isNewItem:true,activeRow:null,activeItem: null,isEditItem: false} );
    },

    rowDeleted: function(code) {
        if(confirm("Вы уверены, что хотите удалить?")){
            var updData = this.state.items;
            updData.splice(code, 1);
            this.setState( {items:updData,activeItem:null,activeRow:null,isEditItem:false,isNewItem:false} );
        }
        
    },
    clickCancel: function() {
        this.setState( {isNewItem:false,activeRow:null,activeItem: null,isEditItem: false} );
    },

    clickSubmit: function(data) {
        //this.setState({items[this.state.activeItem].title: title});
        this.setState( {isNewItem:false,activeRow:null,activeItem: null,isEditItem: false,items:data} );
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
              activeRow:this.state.activeRow,
            })
        );
        return React.DOM.div(null,
            React.DOM.div({className:'mainBlock'},
                React.DOM.table( {className:'InternetShop'}, 
                    React.DOM.thead( null, headersCode ),
                    React.DOM.tbody( null, itemsCode ),
                ),
                ((this.state.isNewItem)||(this.state.activeItem!=null))?
                React.createElement(ViewBlock,{isNewItem:this.state.isNewItem,
                    isEditItem:this.state.isEditItem,
                    activeItem:this.state.activeItem,
                    data:this.state.items,
                    headers:this.props.headers,
                    cbCancel:this.clickCancel,
                    cbSubmit:this.clickSubmit,
                })
                :null,
            ),  
        
        (!this.state.isNewItem)? React.DOM.div({className:'btnNewItem',onClick:this.clickNew},React.DOM.button(null,'Новый товар')):null,
        );
    },

});