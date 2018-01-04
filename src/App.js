import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount(){
    const config = {
    apiKey: 'AIzaSyB7cAb2AbWAJDmCKWshYU8nDZ27tLvXrmc',
    authDomain: 'manager-aaba3.firebaseapp.com',
    databaseURL: 'https://manager-aaba3.firebaseio.com',
    projectId: 'manager-aaba3',
    storageBucket: 'manager-aaba3.appspot.com',
    messagingSenderId: '385490799188'
    };

    firebase.initializeApp(config);
  }
  
  render(){
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;