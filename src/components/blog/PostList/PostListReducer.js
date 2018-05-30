import * as types from './PostListActionTypes';

const PostListReducer = (state = {posts :[],errors:[],loading:false,pagination:{}},action)=>
{
	switch(action.type)
	{
		case types.LOADED:{
			let newState = {
				posts      : action.posts,
				errors     : action.errors,
				loading    : action.loading,
				pagination : action.pagination,
				thisPage   : action.pagination.currentPage,
			};
			return newState;
		}

		case types.LOADING:{
			let newState = {
				posts      : [],
				errors     : [],
				loading    : action.loading,
				pagination : {},
				thisPage   : state.page,

			}
			return newState;
		}

		default:return state;
	}
}

export default PostListReducer;