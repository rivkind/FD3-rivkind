var ViewBlock = React.createClass({

    displayName: 'ViewBlock',

    propTypes: {
        isNewItem: React.PropTypes.bool.isRequired,
        isEditItem: React.PropTypes.bool.isRequired,
        activeItem: React.PropTypes.number.isRequired,
        data:React.PropTypes.arrayOf(
            React.PropTypes.shape({
              id_item: React.PropTypes.number.isRequired,
              title: React.PropTypes.string.isRequired,
              cost: React.PropTypes.string.isRequired,
              description: React.PropTypes.string.isRequired,
            })
          )
    },

    render: function() {
        return React.DOM.div({className:'ViewBlock'},'asdsdf');
    },
});