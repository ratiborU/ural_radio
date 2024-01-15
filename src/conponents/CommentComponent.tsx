import React from 'react';
import image from "../assets/user.svg";

const CommentComponent = ({comment}) => {
  const date = new Date(comment["date"]);
  return (
    <div className="article__comment">
      <div className="comment__image">
        <img src={image} alt="" />
      </div>
      <div className="comment_description">
        <p className="comment__text">{comment["content"]["Ru"]}</p>
        <p className="comment__date">21.12.24</p>
      </div>
    </div>
  );
};

export default CommentComponent;