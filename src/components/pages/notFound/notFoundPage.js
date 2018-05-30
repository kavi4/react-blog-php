import React from 'react';
import './style.css';
import Header from '../../header';
import Footer from '../../footer';

const NotFoundPage = ()=>{
	return (
			<div className="container">
				<Header/>
					Page not Found!
				<Footer/>
			</div>
	);
}

export default NotFoundPage;