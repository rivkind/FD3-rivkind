import React from 'react';
import {connect} from 'react-redux';
import { fetchData } from '../../actions/functionlist';
import './BirthdayList.css';

class BirthdayList extends React.PureComponent {

    componentDidMount(){
        if(this.props.employees.length==0){
          this.props.fetchData(this.props.lang);
        }
      }

  render() {

    return (
      <div className='CounterBlock'>
        dffdfh
      </div>
    );
  }

}

const mapStateToProps = state => ({
    list_title: state.functionlist.title,
    employees: state.functionlist.employee,
})

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(BirthdayList);