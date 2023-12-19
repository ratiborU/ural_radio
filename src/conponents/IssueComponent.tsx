import React from 'react';
import issues from '../api/IssuesApi';
import { Link } from 'react-router-dom';

const IssuseComponent = ({id}) => {
  return (
    <div className="catalog__item">
      <div className="catalog__item-image">
        <Link className="catalog__item-image-link" to={`/catalog/${id}`}>
          <img src={issues[id].image} alt="" />
        </Link>
      </div>
      <p className='catalog__item-date'>{issues[id].date}</p>
      <p className='catalog__item-title'>{issues[id].name}</p>
      <Link  to={`/catalog/${id}`}>
        <button className='catalog__item-button'>Читать</button>
      </Link>
    </div>
  );
};

export default IssuseComponent;