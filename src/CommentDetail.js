import React from 'react'
import faker from 'faker'

const CommentDetail = ()=>{
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.people()}/>
        </a>
        <div className="content">
            <a href="/" className="author">
                Prithvi
            </a>
            <div className="metadata">
                <span className="date">Today at 6:00PM</span>
            </div>
            <div className="text">Nice Blog post!!</div>
        </div>
    </div>
    );
};


export default CommentDetail;