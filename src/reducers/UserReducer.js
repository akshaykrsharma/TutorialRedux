const INITIAL_STATE = { email: '', password: '', error: '' };
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from '../actions/types';

export default (state, action) => {
	console.log('AuthReducer Action=', action.type);

	switch (action.type) {
		case EMAIL_CHANGED:
			return { email: action.payload };

		case PASSWORD_CHANGED:
			return { password: action.payload };

		case LOGIN_USER_SUCCESS:
			console.log('AuthReducer Action=', action.payload);
			return { email: '', password: '', user: action.payload };
		//Todo Ask about it

		default:
			return state ? {} : INITIAL_STATE;
	}
};
