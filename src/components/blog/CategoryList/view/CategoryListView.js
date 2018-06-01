import React     from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import shortid   from 'shortid';
import Skeleton  from './skeleton';
import CategoryListItem from './CategoryListItem';

import './CategoryListView.css';

const CategoryList = ({categoryes,conf})=>{

	if(categoryes[0]){

		let list = categoryes.map((category)=>{
			return <CategoryListItem key = {shortid.generate()} {...category} conf = {conf}/>
		});

		return(
			<div className = "category-list">
				<h2 className = "category-list__title" >Categoryes</h2>
				{list}
			</div>
		);
	}else{
		return <Skeleton/>;
	}
}

CategoryList.propTypes = {
	categoryes : PropTypes.array,
}

export default CategoryList;