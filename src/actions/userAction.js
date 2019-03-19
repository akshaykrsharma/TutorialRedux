import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';
import APIManager from '../Networking/ApiManager';

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
export const loginUser = ({ email, password }, cb) => {
	return dispatch => {
		APIManager.getResponse('https://reqres.in/api/login', 'POST', { email, password }, (status, response) => {
			console.log('Response=', status, response);
			if (status) {
				cb(status, response);
				dispatch({ type: LOGIN_USER_SUCCESS, payload: response });
			} else {
				cb(status, response);
			}
		});
	};
};
