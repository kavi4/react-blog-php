import './TagCloudSkeleton.css';
import React                from 'react';
import shortid              from "shortid";
import TagCloudItemSkeleton from '../cloudItem/skeleton';

const TagCloudSkeleton = ()=>{
	let list = new Array(8).fill(8);

	list = list.map((item)=>{
		return <TagCloudItemSkeleton key={shortid.generate()}/>
	});

	return (

			<div className = "tag-cloud-skeleton">
			<div className = "tag-cloud-skeleton__title" />
				{list}
				<div className = "blog_clear" ></div>
			</div>
	);
}

export default TagCloudSkeleton;