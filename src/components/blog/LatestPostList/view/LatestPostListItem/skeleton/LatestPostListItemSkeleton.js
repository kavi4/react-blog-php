import React from 'react';
import './LatestPostListItemSkeleton.css';

const LatestPostListItemSkeleton = ()=>{
	return (
		<div className = "post-promo-skeleton-item">
			<div className = "post-promo-skeleton__avatar"/>
			<div className = "post-promo-skeleton-info" >
				<div className = "post-promo-skeleton__title"/>
				<div className = "post-promo-skeleton__date" />
			</div>
			<div className="blog_clear"/>
		</div>
	);
}

export default LatestPostListItemSkeleton;