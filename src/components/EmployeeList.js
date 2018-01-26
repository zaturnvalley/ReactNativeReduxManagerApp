import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeesFetch } from '../actions'

class EmployeeList extends Component {
  render(){
    return (
      <View>
        <Text>Stuff</Text>
        <Text>Stuff</Text>
        <Text>Stuff</Text>
      </View>
    );
  }
}
export default connect(null, { employeesFetch })(EmployeeList);