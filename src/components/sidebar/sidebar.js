import './sidebar.css';
import React           from 'react';
import CategoryList    from '../blog/CategoryList';
import TagCloud        from '../blog/TagCloud';
import LatestPostList  from '../blog/LatestPostList';
import Api             from '../../api/blog';
import conf            from '../../config';


const SideBar = ()=>{
	return(
		<div className = "sidebar">
				<CategoryList api = {Api.category} conf = {conf.blog}/>
			<div className="latest-posts-wrapper" >
				<LatestPostList api = {Api.post} conf = {conf.blog}/>
			</div>
			<div className="tag-cloud-wrapper" >
				<TagCloud api = {Api.tag} conf = {conf.blog}/>
			</div>
			
		</div>
	);
}
export default SideBar;