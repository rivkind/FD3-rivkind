import React from 'react';
import PropTypes from 'prop-types';

import './InternetShop.css';

import HeaderBlock from './HeaderBlock';
import ItemShop from './ItemShop';

class InternetShop extends React.Component {

  static propTypes = {
    headers: PropTypes.array.isRequired,
    items:PropTypes.arrayOf(
      PropTypes.shape({
        id_item: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  };

  state = {
    items: this.props.items,
    isNewItem: false,
    isEditItem: false,
    activeItem: null,
    activeRow: null,
    isDelete:false,
    activeData: [],
  }

  rowSelected = (code,row) => {
    console.log('выбран ответ с кодом '+row);
    this.setState( {activeRow:code} );
  }
/*
  vote = () => {
    console.log('голосование завершено, выбран ответ с кодом '+this.state.selectedAnswerCode);

    this.props.answers.forEach( answer => {
      if ( answer.code==this.state.selectedAnswerCode )
        answer.count++;
    } );

    this.setState( {workMode:2} );
  }

  freeAnswerTextChanged = (fat) => { 
    console.log('VotesBlock: текст свободного ответа изменён - '+fat); 
    this.setState( {freeanswertext:fat} );
  }
*/
  render() {

    var itemsCode = this.props.items.map( (v,idx) =>
      <ItemShop key={idx}
        row={idx}
        text={v.title} cost={v.cost} code={v.id_item}
        description={v.description}
        activeRow={this.state.activeRow}
        cbSelected={this.rowSelected}
      />
    );
    
    return (
      <div>
        <div className='mainBlock'>
          <table className='InternetShop'>
            <HeaderBlock headers={this.props.headers} />
            <tbody>{itemsCode}</tbody>
          </table>
        </div>
      </div>
      /*<div className='VotesBlock'>
        <VotesQuestion question={this.props.question}/>
        <div className='Answers'>{answersCode}</div>
        {
          ((this.state.workMode==1)&&this.state.selectedAnswerCode) &&
          <input type='button' value='проголосовать' onClick={this.vote} />
        }
      </div>*/
    )
    ;

  }

}

export default InternetShop;
