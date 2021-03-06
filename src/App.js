import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;