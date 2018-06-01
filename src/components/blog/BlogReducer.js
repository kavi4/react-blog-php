import { combineReducers } from 'redux';

import PostListReducer       from './PostList/PostListReducer';
import CategoryListReducer   from './CategoryList/CategoryListReducer';
import TagCloudReducer       from './TagCloud/TagCloudReducer';
import LatestPostListReducer from './LatestPostList/LatestPostListReducer';

export default combineReducers({
	postList       : PostListReducer,
	categoryList   : CategoryListReducer,
	tagCloud       : TagCloudReducer,
	latestPostList : LatestPostListReducer,
});

