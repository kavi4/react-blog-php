import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import PostListReducer     from '../components/blog/PostList/PostListReducer';
import CategoryListReducer from '../components/blog/CategoryList/CategoryListReducer';
//import LatestPostsReducer  from '../components/blog/latestPostsList/reducer';
//import TagCloudReducer     from '../components/blog/tagCloud/reducer';
//import CommentFormReducer  from '../components/blog/commentForm/reducer';
//import CommentListReducer  from '../components/blog/commentList/reducer';

export default combineReducers({
	router : routerReducer,
	blog   : combineReducers({
				postList:PostListReducer,
				categoryList:CategoryListReducer,
		}),
});

/*	
loginForm  : LoginFormReducer,
	postList        : PostListReducer,
	categoryList    : CategoryListReducer,
	tagCloud        : TagCloudReducer,
	commentForm     : CommentFormReducer,
	latestPostsList : LatestPostsReducer,
	commentList     : CommentListReducer,

*/