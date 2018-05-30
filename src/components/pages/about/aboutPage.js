import './style.css';
import React   from 'react';
import Header  from '../../header';
import Footer  from '../../footer';

const AboutPage = ()=>{
	return (
			<div className="container">
				<Header/>
					<div className="row">
						<div className="col-md-9">about Page</div>
						<div className="col-md-3"></div>
					</div>
				<Footer/>
			</div>
	);
}

export default AboutPage;