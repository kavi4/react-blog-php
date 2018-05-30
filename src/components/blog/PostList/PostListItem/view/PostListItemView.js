import './PostListItemView.css';
import React     from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const PostPreview = ({post,basePath})=>{
	if(post){
		return(
			<div className = "post-preview">
	           	<div className = "post-preview__header">
	                <div className = "post-preview__avatar"></div>
		            <h4  className = "post-preview__title"> {post.title} </h4>
		            <ul  className = "post-preview__info-list">
			               <li className = "post-preview__info-item" ><i className = "fa fa-clock-o"></i> {post.created} </li>
			               <li className = "post-preview__info-item">
				                <i className = "fa fa-folder-open-o"></i>
				                <NavLink className = "post-preview__category-link" to = {basePath + "/category/" + post.category_id} title = {"View all posts in " + post.category_title}>
				                	{post.category_title}
				                </NavLink>
			                </li>
		            </ul>
	            </div>
	          	<div className = "post-preview__image">
	                <img src = {post.image}/>
	            </div>
	            <div className = "post-preview__content">
	            	{post.content_preview}
	            </div>
	            <NavLink to = {basePath + "/post/" + post.id} className = "post-preview__more-btn" >Read more <i className="fa fa-arrow-circle-o-right" ></i></NavLink>
	            <div className = "blog_clear"></div>
			</div>
		);
	}else{
		return false;
	}

}

PostPreview.propTypes = {
	post : PropTypes.shape({
	    id              :PropTypes.number.isRequired,
	    title           :PropTypes.string,
	    image           :PropTypes.string,
	    content_preview :PropTypes.string,
	    created         :PropTypes.string,
	    category_id     :PropTypes.string,
  	}),
  	basePath : PropTypes.string.isRequired,
}

export default PostPreview;

