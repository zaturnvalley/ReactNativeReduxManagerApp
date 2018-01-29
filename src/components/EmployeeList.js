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

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that
    // this component will be rendered with
    // while this.props is still the old set of props

    
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