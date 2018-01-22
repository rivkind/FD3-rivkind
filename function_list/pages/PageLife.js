import React from 'react';
import EmployeeList from '../components/EmployeeList/EmployeeList';

class PageLife extends React.PureComponent {
          
  render() {
    //console.log(this.props);
    return (
      <EmployeeList company='life' />
    );
    
  }

}
    
export default PageLife;