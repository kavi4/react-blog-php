import React   from 'react';
import shortid from 'shortid';
import './CategoryListSkeleton.css';
import CategoryListItemSkeleton from '../../CategoryListItem/view/skeleton';


const CategoryListSkeleton = ()=>{
	let list = new Array(4).fill(4);

	list = list.map((item)=>{
		return <CategoryListItemSkeleton key={shortid.generate()}/>
	});

	return(
			<div className = "category-skeleton-list">
				<div className = "category-skeleton-list__title" ></div>
				{list}
			</div>
	);
}

export default CategoryListSkeleton;