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
				thisPage   : state.loadingPage,
			};
			return newState;
		}

		case types.LOADING:{
			let newState = {
				posts       : [],
				errors      : [],
				loading     : action.loading,
				pagination  : {},
				loadingPage : action.loadingPage,

			}
			return newState;
		}

		default:return state;
	}
}

export default PostListReducer;