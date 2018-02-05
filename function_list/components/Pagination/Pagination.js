import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { changeActivePage, changeItemPage } from '../../actions/employeelist';


import './Pagination.css';

class Pagination extends React.PureComponent {

    static propTypes = {
        activePage: PropTypes.number.isRequired, // передано из props
        itemPage: PropTypes.number.isRequired, // через props
        countData: PropTypes.number.isRequired, // через props
    };

    chActivePage = (EO) => {
        this.props.changeActivePage(parseInt(EO.target.value));
    }

    chItemPage = (EO) => {
        this.props.changeItemPage(parseInt(EO.target.value));
    }
    clickBtnBack = () => {
        this.props.changeActivePage(parseInt(this.props.activePage)-1);
    }
    clickBtnForward = () => {
        this.props.changeActivePage(parseInt(this.props.activePage)+1);
    }

    render() {
        var page = Math.ceil(this.props.countData/this.props.itemPage);
        var pages = [];
        var itempages = [];
        var itemPage = [15,25,50,75,100];
        for (var i = 1; i <= page; i++) {
            pages.push(<option key={i} value={i}>{i}</option>);
        }
        for (var i = 0; i < itemPage.length; i++) {
            itempages.push(<option key={i} value={itemPage[i]}>{itemPage[i]} строк</option>);
        }

        return (
        <div className='PaginationBlock'>
            <button onClick={this.clickBtnBack} disabled={1 == this.props.activePage}>Назад</button><div>Страница<select value={this.props.activePage} onChange={this.chActivePage}>{pages}</select> из {page}</div><select value={this.props.itemPage} onChange={this.chItemPage}>{itempages}</select><button onClick={this.clickBtnForward} disabled={page == this.props.activePage}>Вперед</button>
        </div>
        );
    }

}

const mapDispatchToProps = {

    changeActivePage,
    changeItemPage,

}

export default connect(null,mapDispatchToProps)(Pagination);