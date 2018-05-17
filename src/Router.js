import React, { Component } from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmpoyeeCreate from './components/EmpolyeeCreate';


const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={LoginForm} title="Please Login" />

        <Scene
          initial
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add" 
          key="employeeList" 
          component={EmployeeList} 
          title="Employees" 
        />
        
        <Scene key="employeeCreate" component={EmpoyeeCreate} title="Create Employee" />
      </Stack>
    </Router>
  )
};

export default RouterComponent;
