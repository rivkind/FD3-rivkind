"use strict";
import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

const filterName='Все';
const clientsArr=[ 
  {id:101, fio:"Иванов И.И.", balance:200}, 
  {id:105, fio:"Сидоров С.С.", balance:-100}, 
  {id:110, fio:"Петров П.П.", balance:180},
  {id:120, fio:"Григорьев Г.Г.", balance:220},
];

test('работа MobileCompany', () => {

  

  const component = renderer.create(
    <MobileCompany name={filterName}
    clients={clientsArr} />
  );

  let testInstance = component.root;
  expect(testInstance.findAllByProps({className: "MobileClient"}).length).toEqual(4);

  component.getInstance().deleteClient(110);
  testInstance = component.root;
  expect(testInstance.findAllByProps({className: "MobileClient"}).length).toEqual(3);

  component.getInstance().nameClient("Ривкинд Алексей");
  testInstance = component.root;
  expect(testInstance.findAllByProps({className: "MobileClient"}).length).toEqual(4);

  component.getInstance().nameClient("Локтев Алексей");
  testInstance = component.root;
  expect(testInstance.findAllByProps({className: "MobileClient"}).length).toEqual(5);

  component.getInstance().edClient(105);
  component.getInstance().nameClient("Петрович П.П.");
  testInstance = component.root;
  expect(testInstance.findAllByProps({className: "MobileClient"}).length).toEqual(5);

  let data = {};
  data.target = {value:"Активные"};
  component.getInstance().setFilter(data);
  testInstance = component.root;
  expect(testInstance.findAllByProps({className: "MobileClient"}).length).toEqual(4);

  data.target = {value:"Заблокированные"};
  component.getInstance().setFilter(data);
  testInstance = component.root;
  expect(testInstance.findAllByProps({className: "MobileClient"}).length).toEqual(1);

  data.target = {value:"Все"};
  component.getInstance().setFilter(data);
  testInstance = component.root;
  expect(testInstance.findAllByProps({className: "MobileClient"}).length).toEqual(5);
  
});
