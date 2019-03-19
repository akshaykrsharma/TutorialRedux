import AuthReducer from './AuthReducer';

export default (state, action) => {
	return {
		...state,
		...AuthReducer(state, action)
	};
};
