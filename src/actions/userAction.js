import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';
import APIManager from '../Networking/ApiManager';
import { AsyncStorage } from 'react-native';
import Utils from '../Utility/Utils';

export const emailChanged = text => {
	console.log('emailInAction=', text);
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};
export const passwordChanged = text => {
	console.log('passwordInAction=', text);
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const setUser = payload => {
	return {
		type: LOGIN_USER_SUCCESS,
		payload: payload
	};
};

export const loginUser = ({ email, password }, cb) => {
	return dispatch => {
		APIManager.getResponse('https://reqres.in/api/login', 'POST', { email, password }, (status, response) => {
			console.log('Response=', status, response);

			//Call CallBack method which provides status(True from success and false for Error) and response from Api Call
			cb(status, response);

			if (status) {
				// Saving UserData in AsyncTask
				Utils._storeData('userData', JSON.stringify(response));
				dispatch(setUser(response));
				// dispatch({ type: LOGIN_USER_SUCCESS, payload: response });
			}
		});
	};
};
