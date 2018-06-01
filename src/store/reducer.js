import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';

import BlogReducer from '../components/blog/BlogReducer';

export default combineReducers({
	router : routerReducer,
	blog   : BlogReducer,
});