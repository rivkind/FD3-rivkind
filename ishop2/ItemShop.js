var ItemShop = React.createClass({

    displayName: 'ItemShop',

    propTypes: {
        num: React.PropTypes.number.isRequired,
        code: React.PropTypes.number.isRequired,
        cost: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        descr: React.PropTypes.string.isRequired,
        cbSelected: React.PropTypes.func.isRequired,
        cbEdited: React.PropTypes.func.isRequired,
        cbDeleted: React.PropTypes.func.isRequired,
        activeRow: React.PropTypes.number,
    },

    rowClicked: function(EO) {
        //console.log(this.props.code);
        this.props.cbSelected(this.props.num,this.props.code);
    },

    editClicked: function(EO) {
        this.props.cbEdited(this.props.num,this.props.code);
    },

    deleteClicked: function(EO) {
        //console.log('delete');
        this.props.cbDeleted(this.props.num);
    },

    render: function() {
        return React.DOM.tr({
            key:this.props.code,
            
            className: this.props.activeRow === this.props.code ? 'ItemShop_active': '',
           },
                React.DOM.td({onClick:this.rowClicked,key:1},this.props.text),
                React.DOM.td({onClick:this.rowClicked,key:2},this.props.descr),
                React.DOM.td({onClick:this.rowClicked,key:3},this.props.cost),
                React.DOM.td({key:4},
                    React.DOM.a({onClick:this.editClicked},'edit'),
                ),
                React.DOM.td({key:5},
                    React.DOM.a({onClick:this.deleteClicked},'delete'),
                ),
            );
        },
});