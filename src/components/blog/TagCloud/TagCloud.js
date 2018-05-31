import React        from 'react';
import {connect}    from 'react-redux';
import PropTypes    from 'prop-types';
import {withRouter} from 'react-router-dom';
import * as actions from './TagCloudActions';
import TagCloudView from './view';

const TagCloud = ({tags,Load,loading,conf})=>{

 if(!tags[0]){Load();}
  return (
      <TagCloudView loading = {loading} tags = {tags} conf = {conf}/>
    );
}

const mapStateToProps = (store,props) => {
let conf = props.conf;
let TagCloud = store[conf.STORE].tagCloud;
  return  { 
        tags : TagCloud.tags,
        loading    : TagCloud.loading,
        conf       : props.conf,
        };
}

const mapDispatchToProps = (dispatch,props) => {
  let Api  = props.api;
  return {
    Load : () => {
      actions.loading();
      Api.getCloud({action:(response)=>{dispatch(actions.loaded(response));} })
    },
  };
}

TagCloud.propTypes = {
  tags : PropTypes.array,
  loading    : PropTypes.bool.isRequired,
  Load       : PropTypes.func.isRequired,
  conf       : PropTypes.object.isRequired,
}

export default  connect(mapStateToProps,
  mapDispatchToProps,)(TagCloud);