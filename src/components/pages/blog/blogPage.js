import './style.css';
import React           from 'react';
import {Route ,Switch} from 'react-router-dom';
import Header          from '../../header';
import Footer          from '../../footer';
import Blog            from '../../blog';
import BlogApi         from '../../../api/blog';
import Sidebar         from '../../sidebar';
import conf            from '../../../config';

const BlogPage = ()=>{
	return (
			<div className = "container">
				<Header/>
					<div className = "row">
						<div className = "col-md-9">
							<Blog api = {BlogApi} conf = {conf.blog}/>
						</div>
						<div className = "col-md-3">
							<Sidebar/>
						</div>
					</div>
				<Footer/>
			</div>
	);
}
export default BlogPage;