import UserReducer from './UserReducer';
import UserListReducer from './UserListReducer';

export default (state, action) => {
	return {
		...state,
		...UserReducer(state, action),
		...UserListReducer(state, action)
	};
};
