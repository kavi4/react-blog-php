import React from 'react';
import './sidebar.css';
import CategoryList    from '../blog/CategoryList';
import TagCloud from '../blog/TagCloud';
import Api from '../../api/blog';
import conf from '../../config';


const SideBar = ()=>{
	return(
		<div className = "sidebar">
				<CategoryList api = {Api.category} conf = {conf.blog}/>
			<div className="latest-posts-wrapper" >
				
			</div>
			<div className="tag-cloud-wrapper" >
				<TagCloud api = {Api.tag} conf = {conf.blog}/>
			</div>
			
		</div>
	);
}
export default SideBar;