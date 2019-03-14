const INITIAL_STATE = { email: '', password: '' };
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from './../actions/types';

export default (state = INITIAL_STATE, action) => {
	console.log('AuthReducer Action=', action);

	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };

		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };

		case LOGIN_USER_SUCCESS:
			console.warn('AuthReducer Action=', action.payload.user.email);

			return { ...state, user: action.payload.user };
		//Todo Ask about it

		case LOGIN_USER_ERROR:
			console.warn('AuthReducer Action=', action.payload);

			return { ...state, user: null };

		default:
			return state;
	}
};
