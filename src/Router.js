import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Log In" initial />
        </Scene> 
        <Scene key="main"> 
          <Scene 
            rightTitle="Add"
            onRight={() => { console.log('right') }}
            key="employeeList" 
            component={EmployeeList} 
            title="Employees" 
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee"/>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;