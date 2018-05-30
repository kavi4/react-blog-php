import * as types from './CategoryListActionTypes';

const CategoryListReducer = (state = {categoryes :[],errors:[],loading:false,},action)=>
{
	switch(action.type)
	{
		case types.LOADED:{
			let newState = {
				categoryes : action.categoryes,
				errors     : action.errors,
				loading    : action.loading,
			};
			return newState;
		}

		case types.LOADING:{

			let newState = {
				categoryes : [],
				errors     : [],
				loading    : action.loading,
			}
			return newState;
		}

		default:return state;
	}
}

export default CategoryListReducer;