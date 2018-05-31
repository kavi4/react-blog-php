import './TagCloudItemView.css';
import React     from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const TagCloudItemView = ({id,title,conf})=>{
	if(title){
		return(
			<NavLink className = "tag-cloud__item" to = {conf.BASE_PATH+"/tag/" + id}>{title}</NavLink>
		);
	}else{
		return false;
	}

}

TagCloudItemView.propTypes = {
	id    : PropTypes.number.isRequired,
	title : PropTypes.string.isRequired,
}


export default TagCloudItemView;

