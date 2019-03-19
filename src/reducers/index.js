import UserReducer from './UserReducer';

export default (state, action) => {
	return {
		...state,
		...UserReducer(state, action)
	};
};
