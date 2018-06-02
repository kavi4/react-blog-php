import React        from 'react';
import {connect}    from 'react-redux';
import * as actions from './PostListActions';
import PostListView from './view';
import PropTypes    from 'prop-types';
import {withRouter} from 'react-router-dom';

const PostList = ({posts,pagination,Load,match,loading = true,thisPage,conf})=>{

let newPage = match.url;
if((thisPage != newPage) && !loading){Load(newPage);}

let titleText = "";
let params    = match.params;

if(posts[0]){
  if(params.tag){titleText      = "Tag : "      + posts[0].tag_title; pagination.linkPattern      = conf.BASE_PATH + "/posts/tag/" + posts[0].tag_id + "/page/:page";}
  if(params.category){titleText = "Category : " + posts[0].category_title; pagination.linkPattern = conf.BASE_PATH + "/posts/category/" + posts[0].category_id + "/page/:page"}
}

return (
      <PostListView loading = {loading} posts = {posts} pagination = {pagination} conf = {conf} titleText = {titleText}/>
    );
}

const mapStateToProps = (store,props) => {
let conf = props.conf;
let postList = store[conf.STORE].postList;
let pagination = postList.pagination ? postList.pagination : {};

pagination.pageSize      = conf.POSTS_PAGE_SIZE;
pagination.leftNumPages  = conf.POSTS_LEFT_NUM_PAGES;
pagination.rightNumPages = conf.POSTS_RIGHT_NUM_PAGES;
pagination.linkPattern   = conf.BASE_PATH + "/posts/page/:page";

  return  {	
  			posts      : postList.posts,
  			pagination : pagination,
        loading    : postList.loading,
        thisPage   : postList.thisPage,
        conf       : conf,
  			};
  
}

const mapDispatchToProps = (dispatch,props) => {
  let params = props.match.params;
  let ApiMethod = props.api;
  return {
  	Load : (newPage) => {
      dispatch(actions.loading(newPage));
      ApiMethod({params:params,pageSize:props.conf.POSTS_PAGE_SIZE,action:(response)=>{dispatch(actions.loaded(response));} })
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