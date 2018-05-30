import React from 'react';
import './sidebar.css';
import CategoryList    from '../blog/CategoryList';
import Api from '../../api/blog';
import conf from '../../config';


const SideBar = ()=>{
	return(
		<div className = "sidebar">
				<CategoryList api = {Api.category} conf = {conf.blog}/>
			<div className="latest-posts-wrapper" >
				
			</div>
			<div className="tag-cloud-wrapper" >
				
			</div>
			
		</div>
	);
}
export default SideBar;