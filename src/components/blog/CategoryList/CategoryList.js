import React            from 'react';
import {connect}        from 'react-redux';
import PropTypes        from 'prop-types';
import {withRouter}     from 'react-router-dom';
import * as actions     from './CategoryListActions';
import CategoryListView from './view';


const CategoryList = ({categoryes,Load,loading,conf})=>{

 if(!categoryes[0]){Load();}
  return (
      <CategoryListView loading = {loading} categoryes = {categoryes} conf = {conf}/>
    );
}

const mapStateToProps = (store,props) => {
let conf = props.conf;
let CategoryList = store[conf.STORE].categoryList;
  return  { 
        categoryes : CategoryList.categoryes,
        loading    : CategoryList.loading,
        conf       : props.conf,
        };
}

const mapDispatchToProps = (dispatch,props) => {
  let Api  = props.api;
  return {
    Load : () => {
      actions.loading();
      Api.getList({action:(response)=>{dispatch(actions.loaded(response));} })
    },
  };
}

CategoryList.propTypes = {
  categoryes : PropTypes.array,
  loading    : PropTypes.bool.isRequired,
  Load       : PropTypes.func.isRequired,
  conf       : PropTypes.object.isRequired,
}

export default  connect(mapStateToProps,
  mapDispatchToProps,)(CategoryList);