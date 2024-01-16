import React, { useState, useEffect } from 'react';
import image from "../assets/user.svg";

const CommentComponent = ({comment, currentLocale}) => {
  const date = new Date(comment["date"]);
  const [lang, setLang] = useState('Ru');

  useEffect(() => {
    setLang(currentLocale == "en-US" ? "Eng" : "Ru");
  }, [currentLocale]);
  
  return (
    <div className="article__comment">
      <div className="comment__image">
        <img src={image} alt="" />
      </div>
      <div className="comment_description">
        <p className="comment__text">{comment["content"][lang]}</p>
        <p className="comment__date">21.12.24</p>
      </div>
    </div>
  );
};

export default CommentComponent;