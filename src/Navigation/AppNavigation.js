import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../Home/Home';
import LoginForm from '../Login/LoginForm';
import Splash from '../Splash';

const MainNavigator = createStackNavigator(
	{
		Splash: {
			screen: Splash
		},
		LoginForm: {
			screen: LoginForm
		},
		Home: {
			screen: Home
		}
	},
	{
		headerMode: 'none',
		cardStyle: { backgroundColor: 'white' }
	}
);

const App = createAppContainer(MainNavigator);

export default App;
