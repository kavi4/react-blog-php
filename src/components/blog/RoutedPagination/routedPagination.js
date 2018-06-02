import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';
import shortid   from 'shortid';
/*

PAGINATION={
	currentPage,
	total,
	pageSize,
	linkPattern,
	leftNumPages,
	rightNumPages,
}
 */
const RoutedPagination = ({pagination})=>{
	let total         = pagination.total;
	let pageSize      = pagination.pageSize;
	let pages         = Math.ceil(total/pageSize);
	let currentPage   = pagination.currentPage;
	let linkPattern   = pagination.linkPattern;
	let leftNumPages  = pagination.leftNumPages;
	let rightNumPages = pagination.rightNumPages;

	if(!total||!currentPage||!linkPattern){return false;}

	const getLink=(page)=>{
		return <NavLink to = {linkPattern.replace(':page',page)} className="routed-pagination__link" activeClassName = "routed-pagination__link_active" key = {shortid.generate()}>{page}</NavLink>
	};

	const getEmptyLink=(text)=>{
		return <a className = "routed-pagination__link routed-pagination__link-disable" key={shortid.generate()}>{text}</a>
	}

	const getFirstLink = ()=>{
		if(currentPage !=1){
			return getLink(1);
		}
	}

	const getFirstDelimeter = ()=>{

		if(currentPage - leftNumPages>2){
			return getEmptyLink("...");
		}
	}

	const getLeftLinks = ()=>{
		let links = [];
		for(let i = leftNumPages; i >=1;i--){
			if(currentPage-i>1){
				links.push(getLink(currentPage-i));
			}
		}
		return links;
	}

	const getRightLinks = ()=>{

		let links = [];
		for(let i = currentPage+1;i <= currentPage + rightNumPages;i++){
			if(i<pages){
				links.push(getLink(i));
			}
		}
		return links;
	}

	const getLastDelimeter = ()=>{
		if(currentPage + rightNumPages < pages-1){
			return getEmptyLink("...");
		}
	}

	const getLastLink = ()=>{
		if(currentPage !=pages){
			return getLink(pages);
		}
	}


	return (
		<div className="routed-pagination">
			{getFirstLink()}
			{getFirstDelimeter()}
			{getLeftLinks()}
			{getLink(currentPage)}
			{getRightLinks()}
			{getLastDelimeter()}
			{getLastLink()}
		</div>
	);
}

RoutedPagination.propTypes = {
	currentPage   : PropTypes.number,
	total         : PropTypes.number,
	pageSize      : PropTypes.number,
	linkPattern   : PropTypes.string,
	leftNumPages  : PropTypes.number,
	rightNumPages : PropTypes.number,
  }

export default RoutedPagination;