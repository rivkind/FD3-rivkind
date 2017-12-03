var InternetShop = React.createClass({
    
      displayName: 'InternetShop',
    
      propTypes: {
        items:React.PropTypes.arrayOf(
          React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            cost: React.PropTypes.string.isRequired,
            count_item: React.PropTypes.number.isRequired,
            images: React.PropTypes.string,
          })
        )
        
      },
    
      render: function() {
        var headersCode = React.DOM.tr({className:'item_header'},
            this.props.headers.map(function(title,idx){
                return React.DOM.th({key:idx},title);
            })
       );
       var itemsCode=this.props.items.map(function(v,idx){
        return React.DOM.tr({key:v.id_item,className:'item'},
              React.DOM.td({key:1,className:'item_img'},
                React.DOM.img({src:"\images\\"+v.images,}),
             ),
             React.DOM.td({key:2,className:'item_title'},v.title),
             React.DOM.td({key:3,className:'item_cost'},v.cost),
             React.DOM.td({key:4,className:'item_count'},v.count_item), 
            );
       });
        return React.DOM.table( {className:'InternetShop'}, 
          React.DOM.thead( null, headersCode ),
          React.DOM.tbody( null, itemsCode ),
        );
      },
    
    });