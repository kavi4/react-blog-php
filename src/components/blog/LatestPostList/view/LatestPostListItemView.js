import './LatestPostListItemView.css';
import React         from 'react';
import shortid       from 'shortid';
import Skeleton      from './skeleton';

import LatestPostListItem from './LatestPostListItem';

const LatestPostsListView = ({posts, loading, conf})=>{
	if(posts[0] && !loading){

		let list = posts.map((post)=>{
			return <LatestPostListItem key = {shortid.generate()} {...post} conf = {conf} />
		});

		return(
			<div className = "latest-post-list">
				<h2 className = "latest-post-list__title">Latest Posts</h2>
				{list}
			</div>
		);
	}
	else
	{
		return <Skeleton/>;
	}
}

export default LatestPostsListView;