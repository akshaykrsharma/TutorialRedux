import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import AppNavigation from './Navigation/AppNavigation';
//console.disableYellowBox = true;

class App extends Component {
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<AppNavigation />
			</Provider>
		);
	}
}

export default App;
