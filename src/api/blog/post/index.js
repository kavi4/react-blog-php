import GetPost           from './getPost';
import GetPage           from './getPage';
import GetCategoryPage   from './getCategoryPage';
import GetTagPage        from './getTagPage';
import GetLatestPostList from './getLatestPostList';

const PostApi = {
	getPost           : GetPost,
	getPage           : GetPage,
	getTagPage        : GetTagPage,
	getCategoryPage   : GetCategoryPage,
	getLatestPostList : GetLatestPostList,
}

export default PostApi;