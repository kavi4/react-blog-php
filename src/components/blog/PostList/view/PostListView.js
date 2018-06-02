import './PostListView.css';
import React            from 'react';
import shortid          from 'shortid';
import Skeleton         from './skeleton';
import PropTypes        from 'prop-types';
import PostListItem     from './PostListItem';
import RoutedPagination from '../../RoutedPagination';


const PostListView = ({posts = [],pagination,loading,conf,titleText})=>{

	if(posts[0] && !loading){

		let postsPreviews = posts.map((post)=>{
		return <PostListItem post = {post} key = {shortid.generate()} basePath = {conf.BASE_PATH}/>
		});

		let title = titleText ? <h2 className = "post-list__title" >{titleText}</h2> : false;

		return(
			<div className = "post-list">
				{title}
				{postsPreviews}
				<RoutedPagination pagination = {pagination}/>
			</div>
		);
	}
	else
	{
		return <Skeleton pageSize = {pagination.pageSize}/>
	}
}

PostListView.propTypes = {
	posts      : PropTypes.array,
	pagination : PropTypes.shape({
		pageSize : PropTypes.number.isRequired,
	}),
	loading    : PropTypes.bool.isRequired,
	conf       : PropTypes.object.isRequired,
}

export default PostListView;