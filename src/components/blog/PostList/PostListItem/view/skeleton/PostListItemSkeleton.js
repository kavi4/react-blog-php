import './PostListItemSkeleton.css';
import React from 'react';


const PostListItemSkeleton = ()=>{
    return (

        <div className = "post-preview-skeleton">
            <div className = "post-preview-skeleton__header">
                <div className = "post-preview-skeleton__avatar"/>
                <div className = "post-preview-skeleton__title"/>
                <ul className  = "post-preview-skeleton__info-list">
                    <li className = "post-preview-skeleton__info-item"/>
                    <li className = "post-preview-skeleton__info-item"/> 
                </ul>
            </div>
            <div className = "post-preview-skeleton__image"/>
            <div className = "post-preview-skeleton__content">
                <div className = "post-preview-skeleton__content-item"/>
                <div className = "post-preview-skeleton__content-item"/>
                <div className = "post-preview-skeleton__content-item"/>
                <div className = "post-preview-skeleton__content-item"/>
            </div>
            <div className = "post-preview-skeleton__more-btn" />
            <div className = "clear"></div>
        </div>
    );
}

export default PostListItemSkeleton;