import React              from 'react';
import {connect}          from 'react-redux';
import PropTypes          from 'prop-types';
import {withRouter}       from 'react-router-dom';
import * as actions       from './LatestPostListActions';
import LatestPostListView from './view';


const LatestPostList = ({posts,Load,loading,conf})=>{

 if(!posts[0]){Load();}
  return (
      <LatestPostListView loading = {loading} posts = {posts} conf = {conf}/>
    );
}

const mapStateToProps = (store,props) => {
let conf = props.conf;

let postList = store[conf.STORE].latestPostList;
  return  { 
        posts   : postList.posts,
        loading : postList.loading,
        conf    : props.conf,
        };
}

const mapDispatchToProps = (dispatch,props) => {
  let Api  = props.api;
  return {
    Load : () => {
      actions.loading();
      Api.getLatestPostList({action:(response)=>{dispatch(actions.loaded(response));} })
    },
  };
}

LatestPostList.propTypes = {
  posts : PropTypes.array,
  loading    : PropTypes.bool.isRequired,
  Load       : PropTypes.func.isRequired,
  conf       : PropTypes.object.isRequired,
}

export default  connect(mapStateToProps,
  mapDispatchToProps,)(LatestPostList);