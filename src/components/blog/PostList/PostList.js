import React        from 'react';
import {connect}    from 'react-redux';
import * as actions from './PostListActions';
import PostListView from './view';
import PropTypes    from 'prop-types';
import {withRouter} from 'react-router-dom';

const PostList = ({posts,pagination,Load,match,loading = true,thisPage,conf})=>{

  let newPage = match.params.page || 1;
 if((thisPage != newPage) && !loading){Load();}

  return (
      <PostListView loading = {loading} posts = {posts} pagination = {pagination} conf = {conf} />
    );
}

const mapStateToProps = (store,props) => {
let conf = props.conf;
let postList = store[conf.STORE].postList;
let pagination = postList.pagination ? postList.pagination : {};

pagination.pageSize      = conf.POSTS_PAGE_SIZE;
pagination.leftNumPages  = conf.POSTS_LEFT_NUM_PAGES;
pagination.rightNumPages = conf.POSTS_RIGHT_NUM_PAGES;
pagination.linkPattern   = conf.BASE_PATH + "/page/:page";

  return  {	
  			posts      : postList.posts,
  			pagination : pagination,
        loading    : postList.loading,
        thisPage   : postList.thisPage,
        conf       : conf,
  			};
  
}

const mapDispatchToProps = (dispatch,props) => {
  let page = +props.match.params.page || 1;
  let Api  = props.api;
  return {
  	Load : () => {
      dispatch(actions.loading());
      Api.getPage({page:page,pageSize:props.conf.POSTS_PAGE_SIZE,action:(response)=>{dispatch(actions.loaded(response));} })
    },
  };
}

PostList.propTypes = {
  posts      : PropTypes.array,
  pagination : PropTypes.shape({
    pageSize : PropTypes.number.isRequired,
  }),
  loading    : PropTypes.bool.isRequired,
  Load       : PropTypes.func.isRequired,
  conf       : PropTypes.object.isRequired,
}

export default  withRouter(connect(mapStateToProps,
  mapDispatchToProps,)(PostList));