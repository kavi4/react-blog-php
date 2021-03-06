import React        from 'react';
import {NavLink}    from 'react-router-dom';
import PropTypes    from 'prop-types';
import shortid      from 'shortid';
import Skeleton     from './skeleton';
import TagCloudItem from './TagCloudItem';
import './TagCloudView.css';

const TagCloudView = ({tags,loading,conf})=>{
	
	if(tags[0] && !loading){

		let list = tags.map((tag)=>{
			return <TagCloudItem key = {shortid.generate()} {...tag} conf = {conf}/>
		});

		return(
			<div className = "tag-cloud">
				<h2 className = "tag-cloud__title" >Tag Cloud</h2>
				{list}
				<div className = "blog_clear" ></div>
			</div>
		);
	}
	else
	{
		return <Skeleton/>
	}
}

TagCloudView.propTypes = {
	tags   		 : PropTypes.array,
	loading      : PropTypes.bool.isRequired,
}

export default TagCloudView;