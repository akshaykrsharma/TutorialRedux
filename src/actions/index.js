import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

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
