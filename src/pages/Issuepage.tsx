import React from 'react';
import { Link, useParams } from 'react-router-dom';
import issues from '../api/IssuesApi';

const Issuepage = () => {
  const {id} = useParams();
  return (
    <>
      <p className='issue__title'>{issues[id].name}</p>
      <button className='issue__button'>Скачать выпуск</button>
      <p className='issue__title'>Содержание</p>
      <div className="article-paragraph">
        <button className='article-paragraph__button'>Скачать статью</button>
        <div className="article-paragraph__description">
          <Link to={`/catalog/article/${id}`} className='article-paragraph__name'>Исследование полосно-пропускающих фильиров</Link>
          <p className='article-paragraph__authors'>A. S. Voloshin, A. Yu. Efimov</p>
        </div>
      </div>

      <div className="article-paragraph">
        <button className='article-paragraph__button'>Скачать статью</button>
        <div className="article-paragraph__description">
          <Link to={`/catalog/article/${id}`} className='article-paragraph__name'>Исследование полосно-пропускающих фильиров</Link>
          <p className='article-paragraph__authors'>A. S. Voloshin, A. Yu. Efimov</p>
        </div>
      </div>

      <div className="article-paragraph">
        <button className='article-paragraph__button'>Скачать статью</button>
        <div className="article-paragraph__description">
          <Link to={`/catalog/article/${id}`} className='article-paragraph__name'>Исследование полосно-пропускающих фильиров</Link>
          <p className='article-paragraph__authors'>A. S. Voloshin, A. Yu. Efimov</p>
        </div>
      </div>
    </>
  );
};

export default Issuepage;