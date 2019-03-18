import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginForm from '../Login/LoginForm';
import Home from '../Home/Home';

const MainNavigator = createStackNavigator({
	LoginForm: { screen: LoginForm },
	Home: { screen: Home }
});

const App = createAppContainer(MainNavigator);

export default App;
