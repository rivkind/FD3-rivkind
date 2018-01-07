"use strict";
import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

test('работа MobileCompany', () => {

  const filterName='Все';
  const clientsArr=[ 
    {id:101, fio:"Иванов И.И.", balance:200}, 
    {id:105, fio:"Сидоров С.С.", balance:-100}, 
    {id:110, fio:"Петров П.П.", balance:180},
    {id:120, fio:"Григорьев Г.Г.", balance:220},
  ];

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

  //component.toJSON().children[0].children[2].props.onClick();
  //testInstance = component.root;
  //expect(testInstance.findAllByProps({className: "MobileClient"}).length).toEqual(4);


  
});
