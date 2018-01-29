import React from 'react';
import EmployeeList from '../components/EmployeeList/EmployeeList';

class PageLifetech extends React.PureComponent {
          
  render() {
    console.log("Рендер PageLifeTech");
    return (
      <EmployeeList company='lifetech' />
    );
    
  }

}
    
export default PageLifetech;