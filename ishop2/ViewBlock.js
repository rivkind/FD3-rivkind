var ItemShop = React.createClass({

    displayName: 'ViewBlock',

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
});