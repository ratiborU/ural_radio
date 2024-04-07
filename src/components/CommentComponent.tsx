// import React, { useState, useEffect, useContext } from 'react';
import image from "../assets/user.svg";
import { IComment, IRuEng } from '../types/types';
import { useLanguageContext } from '../i18n/languageContext';


type CommentComponentProps = {
  comment: IComment;
}


const CommentComponent = ({comment} : CommentComponentProps) => {
  const {lang} = useLanguageContext();

  // нужно исправить дату
  const date = new Date(comment["date"]);
  
  return (
    <div className="article__comment">
      <div className="comment__image">
        <img src={image} alt="" />
      </div>
      <div className="comment_description">
        <p className="comment__text">{comment["content"][lang as keyof IRuEng]}</p>
        <p className="comment__date">{date.getMonth()} {date.getFullYear()}</p>
      </div>
    </div>
  );
};

export default CommentComponent;