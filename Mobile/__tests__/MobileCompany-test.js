"use strict";
import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

import MobileCompany from '../components/MobileCompany';

test('работа MobileClient', () => {


  
  const filterName='Все';
  const clientsArr=[ 
    {id:101, fio:"Иванов И.И.", balance:200}, 
    {id:105, fio:"Сидоров С.С.", balance:-100}, 
    {id:110, fio:"Петров П.П.", balance:180},
    {id:120, fio:"Григорьев Г.Г.", balance:220},
  ];
  const wrapper = shallow(<MobileCompany name={filterName}
    clients={clientsArr} />);
    
    
});
