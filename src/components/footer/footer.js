import React from 'react';
import './style.css';
import logo from '../../static/images/logo.png';

const Footer = ()=>{
	return (
		<footer className="footer" >
			<p className="footer__copyright" >Copyrigh © 2018  All Rights Reserved.</p>
			<img className="footer__logo" src={logo}/>
			<div className="clear"></div>
		</footer>
		)
}

export default Footer;