import './Blog.css';
import React           from 'react';
import {Route ,Switch} from 'react-router-dom';
import PostList        from './PostList';

const Blog = ({api,conf})=>{

	return (
			<Switch>
				<Route path = {conf.BASE_PATH+"/page/:page"} render = {()=><PostList api = {api.post} conf = {conf}/>}/>
				<Route path = {conf.BASE_PATH} render = {()=><PostList  api = {api.post} conf = {conf}/>}/>
				<Route path = "/"              render = {()=><PostList  api = {api.post} conf = {conf}/>}/>
			</Switch>
	);
}
export default Blog;

/*
				<Route path = {match.url + "/post/:post/comment-page/:page"} component = {PostContainer}/>
				<Route path = {match.url + "/post/:post"}                    component = {PostContainer}/>
				<Route path = {match.url + "/category/:category/page/:page"} component = {CategoryPostListContainer}/>
				<Route path = {match.url + "/category/:category"}            component = {CategoryPostListContainer}/>
				<Route path = {match.url + "/tag/:tag/page/:page"}           component = {TagPostListContainer}/>
				<Route path = {match.url + "/tag/:tag"}                      component = {TagPostListContainer}/>
				<Route path = {match.url}                                    component = {PostListContainer}/>

*/