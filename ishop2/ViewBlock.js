var ViewBlock = React.createClass({

    displayName: 'ViewBlock',

    propTypes: {
        isNewItem: React.PropTypes.bool.isRequired,
        isEditItem: React.PropTypes.any,
        activeItem: React.PropTypes.any,
        cbCancel: React.PropTypes.func.isRequired,
        cbSubmit: React.PropTypes.func.isRequired,
        data:React.PropTypes.shape({
              id_item: React.PropTypes.number.isRequired,
              title: React.PropTypes.string.isRequired,
              cost: React.PropTypes.string.isRequired,
              description: React.PropTypes.string.isRequired,
            })
          
    },

    getInitialState: function() {
        return { 
            data_new: this.props.data,
        };
    },

    chTitle: function(e) {
        this.setState({ title: e.target.value });
      //console.log(e.target.name);  
    },
    chDescr: function(e) {
        this.setState({ descr: e.target.value });
      //console.log(e.target.name);  
    },
    chCost: function(e) {
        this.setState({ cost: e.target.value });
      //console.log(e.target.name);  
    },

    clickCancel: function() {
        this.props.cbCancel();
    },

    clickSubmit: function() {

        if(this.props.isNewItem){
            
        }else{
           //this.state.data[this.props.activeItem].title = this.state.title;
        }
        this.props.cbSubmit(this.state.data);
    },

    //this.props.data[this.props.activeItem].title
    render: function() {
        console.log(this.state.data_new);
       return React.DOM.div({className:'ViewBlock'},
            React.DOM.div(null,this.props.headers[0]+': ',
            (!this.props.isEditItem&&!this.props.isNewItem)?
                React.DOM.span(null,this.state.data_new.title):
                React.DOM.input({type:'text',name:'titleInput',onChange:this.chTitle,
                value: !this.props.isNewItem?this.state.data_new.title:''}),
            ),
            /*React.DOM.div(null,this.props.headers[1]+': ',
            (!this.props.isEditItem&&!this.props.isNewItem)?
                React.DOM.span(null,this.state.data.description):
                React.DOM.input({type:'text',name:'descrInput',onChange:this.chDescr,
                value: !this.props.isNewItem?this.state.data.description:''}),
            ),
            React.DOM.div(null,this.props.headers[2]+': ',
            (!this.props.isEditItem&&!this.props.isNewItem)?
                React.DOM.span(null,this.state.cost):
                React.DOM.input({type:'text',name:'costInput',onChange:this.chCost,
                value: !this.props.isNewItem?this.state.cost:''}),
            ),*/
            (this.props.isEditItem||this.props.isNewItem)?
                React.DOM.div(null,React.DOM.button({onClick:this.clickSubmit},(this.props.isNewItem)?'Добавить':'Редатировать'),React.DOM.button({onClick:this.clickCancel},'Отмена'))
                :null
        );
    },
});