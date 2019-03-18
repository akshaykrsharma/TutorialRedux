import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, IS_LOADING } from './types';
import firebase from 'firebase';
import axios from 'axios';

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

loginSuccess = user => {
	return { type: LOGIN_USER_SUCCESS, payload: user };
};

export const loginUser = ({ email, password }) => {
	return dispatch => {
		dispatch({ type: IS_LOADING });
		// axios
		// 	.get('https://reqres.in/api/users/1')
		// 	.then(response => {
		// 		console.log(response);
		// 		dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
		// 	})
		// 	.catch(error => {
		// 		console.log(error);
		// 		dispatch({ type: LOGIN_USER_ERROR, payload: 'User Not Found' });
		// 	});
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => {
				dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
			})
			.catch(() => {
				dispatch({ type: LOGIN_USER_ERROR, payload: 'User Not Found' });
			});
	};
};
