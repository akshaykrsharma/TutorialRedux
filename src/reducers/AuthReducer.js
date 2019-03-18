const INITIAL_STATE = { email: '', password: '', error: '', isLoading: false };
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, IS_LOADING } from './../actions/types';

export default (state = INITIAL_STATE, action) => {
	console.log('AuthReducer Action=', action.type);

	switch (action.type) {
		case IS_LOADING:
			return { ...state, isLoading: true };

		case EMAIL_CHANGED:
			return { ...state, email: action.payload };

		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };

		case LOGIN_USER_SUCCESS:
			console.warn('AuthReducer Action=', action.payload);
			return { ...state, user: action.payload, isLoading: false };
		//Todo Ask about it

		case LOGIN_USER_ERROR:
			console.warn('AuthReducer Action=', action.payload);
			return { ...state, error: 'Authentication Failed', isLoading: false };

		default:
			return state;
	}
};
