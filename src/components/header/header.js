import React     from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../static/images/logo.png';
import './style.css';

const Header = ()=>{
	return (
	    <div className = "header">
	        <div className = "row">
	        	<div className = "col-md-3">
		        	<a href="/"><img  className="header__logo" src={logo}/></a>
		        </div>
		        <div className="col-md-9">
		        	<div className = "header__navigation">
		            	<NavLink className="header__navigation-link"  activeClassName="header__navigation-link_active" to = "/blog">Blog</NavLink>
		            	<NavLink className="header__navigation-link"  activeClassName="header__navigation-link_active" to = "/about">About</NavLink>
		            	<NavLink className="header__navigation-link"  activeClassName="header__navigation-link_active" to = "/contacts">Contacts</NavLink>
		            </div>
		        </div>
	        </div>
		</div>
	);
}

export default Header;