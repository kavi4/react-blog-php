import './LatestPostListItemView.css';
import React     from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const LatestPostListItemView = ({image,id,title,created,conf})=>{

	return(
		<div className = "post-promo-item">
			<img className = "post-promo__avatar" src = {image}/>
			<div className = "post-promo-info" >
				<NavLink className = "post-promo__title" to = {conf.BASE_PATH + "/post/" + id}>{title}</NavLink>
				<div     className = "post-promo__date" >{created}</div>
			</div>
			<div className = "blog_clear"/>
		</div>
	);
}

LatestPostListItemView.propTypes = {
	    image   : PropTypes.string,
	    title   : PropTypes.string.isRequired,
	    created : PropTypes.string.isRequired,
}

export default LatestPostListItemView;