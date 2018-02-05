import React from 'react';
import {connect} from 'react-redux';
import { fetchData } from '../../actions/functionlist';
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import './BirthdayList.css';

class BirthdayList extends React.PureComponent {

    componentDidMount(){
        if(this.props.employees.length==0){
          this.props.fetchData(this.props.lang);
        }
      }
      componentDidUpdate(oldProps, oldState){
        if(oldProps.lang!=this.props.lang){
          this.props.fetchData(this.props.lang);
        }
      }

  render() {

    var today = new Date();
    var futureDay = new Date();
    var backDay = new Date();
    futureDay.setDate(today.getDate()+15);
    backDay.setDate(today.getDate()-7);
    var month_now = ('0' + (today.getMonth() + 1)).slice(-2);
    var month_back = ('0' + (backDay.getMonth() + 1)).slice(-2);
    var month_future = ('0' + (futureDay.getMonth() + 1)).slice(-2);
    var birthday = [];
    if((month_now=='01' && month_back=='12') || (month_now=='12' && month_future=='01')){
      var bDay = '2000-' + month_back + '-' + ('0' + backDay.getDate()).slice(-2);
      var bDay2 = '2000-12-31';
      var nowDay2 = '2000-' + month_future + '-' + ('0' + futureDay.getDate()).slice(-2);
      var nowDay = '2000-01-01';
    }else{
      var bDay = '2000-' + month_back + '-' + ('0' + backDay.getDate()).slice(-2);
      var nowDay = '2000-' + month_future + '-' + ('0' + futureDay.getDate()).slice(-2);
      this.props.employees.filter(employee => (employee.birthday>=bDay && employee.birthday<=nowDay))
      .sort(function(obj1, obj2) {
        if (obj1.birthday < obj2.birthday) return -1;
        if (obj1.birthday > obj2.birthday) return 1;
        return 0;
    })
    .map(employee =>
        birthday.push(<EmployeeItem key={employee.pos} items={employee} birthday="true"  />)
      );
    }
    

    console.log(birthday);
    console.log(bDay);

    return (
      <div>
      <table cellPadding='0' cellSpacing='0' className='employeeList'>
<tbody className='EmployeeListBody'>
{birthday}
  </tbody>
        </table>
       
      </div>
    );
  }

}

const mapStateToProps = state => ({
    list_title: state.functionlist.title,
    employees: state.functionlist.employee,
    lang: state.language.lang,
})

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(BirthdayList);