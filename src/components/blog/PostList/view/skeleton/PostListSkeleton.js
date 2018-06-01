import './PostListSkeleton.css';

import shortid          from 'shortid';
import React        from 'react';
import ItemSkeleton from '../PostListItem/skeleton';

const PostListSkeleton = ({pageSize})=>{
	let list = new Array(pageSize).fill(pageSize);

	list = list.map((item)=>{
		return <ItemSkeleton key={shortid.generate()}/>
	});

	return (
		<div className = "post-list-skeleton">
			{list}
		</div>
	);
}

export default PostListSkeleton;