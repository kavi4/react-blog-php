import React from 'react';
import './LatestPostListSkeleton.css';

import LatestPostListItemSkeleton from '../LatestPostListItem/skeleton';

const LatestPostListSkeleton = ()=>{
	let list = new Array(4).fill(4);

	list = list.map((item)=>{
		return <LatestPostListItemSkeleton/>
	});

	return (

			<div className = "latest-post-list-skeleton">
				<div className = "latest-post-list-skeleton__title"/>
				{list}
			</div>
	);
}

export default LatestPostListSkeleton;