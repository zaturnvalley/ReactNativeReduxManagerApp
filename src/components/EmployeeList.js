import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions'

class EmployeeList extends Component {
  componentWillMount(){
    this.props.employeesFetch();

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !=== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.employees);
  }

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