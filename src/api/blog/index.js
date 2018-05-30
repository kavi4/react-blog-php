import PostApi     from './post';
import CommentApi  from './comment';
import CategoryApi from './category';
import TagApi      from './tag';

const BlogApi = {
	post:PostApi,
	category:CategoryApi,
	tag:TagApi,
	comment:CommentApi,
}

export default BlogApi;