import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './Login/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyCvNAqix6AmJG94B8-e_xs9O91GlGUgtf0',
			authDomain: 'manager-471e2.firebaseapp.com',
			databaseURL: 'https://manager-471e2.firebaseio.com',
			projectId: 'manager-471e2',
			storageBucket: 'manager-471e2.appspot.com',
			messagingSenderId: '389364729477'
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
