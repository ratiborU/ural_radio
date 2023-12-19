import React from 'react';
import { Link, useParams } from 'react-router-dom';
import image from "../assets/user.svg";

const Articlepage = () => {
  const {id} = useParams();
  return (
    <div className='article'>
      <p className='article__title'>Исследование  полосно-пропускающих фильиров</p>
      <p className='article__authors'>A. S. Voloshin, A. Yu. Efimov</p>
    
      <button className='article__pdf-download'>Читать PDF</button>
    
      <p className='article__subtitle'>Аннотация</p>
      <p className='article__text'>текст аннотации</p>

      <p className='article__subtitle'>Ключевые слова</p>
      <p className='article__text'>фильтр, пропускной способности</p>

      <p className='article__subtitle'>Литература</p>
      <p className='article__book'>Shiraski nnajima, fsafsa, 1982(23) DOI 10.421</p>

      <p className='article__title'>Комментарии</p>
      <div className="article__comments">
        <div className="article__comment">
          <div className="comment__image">
            <img src={image} alt="" />
          </div>
          <div className="comment_description">
            <p className="comment__text">Очень интересный выпуск, спасибо</p>
            <p className="comment__date">21.12.24</p>
          </div>
        </div>
      </div>

      <p className='article__subtitle'>Оставить комментарий</p>
      <p className='article__comment-title'>Ваш комментарий</p>
      <textarea className='article__comment-field' placeholder='Введите текст...' name="" id="" cols="30" rows="10"></textarea>
      <button className='article__comment-button'>Отправить</button>
    </div>
  );
};

export default Articlepage;