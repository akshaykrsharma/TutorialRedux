import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from './types';
import firebase from 'firebase';

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

export const loginUser = ({ email, password }) => {
	return dispatch => {
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
