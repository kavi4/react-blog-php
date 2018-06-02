import './CategoryListItem.css';
import React     from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryListItem = ({id,title,conf})=>{
	if(title){
		return(
			<NavLink className="category-list__item" to = {conf.BASE_PATH+"/posts/category/" + id}>{title}</NavLink>
		);
	}else{
		return false;
	}

}

CategoryListItem.propTypes = {
	id    : PropTypes.number.isRequired,
	title : PropTypes.string.isRequired,
}


export default CategoryListItem;

