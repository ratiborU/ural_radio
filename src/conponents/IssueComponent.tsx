import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import IssuesService from '../api/IssuesService';
import { FormattedMessage } from 'react-intl'

const IssuseComponent = ({item, currentLocale}) => {
  const date = new Date(item["date"]);
  const [lang, setLang] = useState('Ru');
  const [coverImage, setCoverImage] = useState();
  

  const [fetchCoverImage, isCoverImageLoading, coverImageError] = useFetching( async () => {
    const coverImageResponse = await IssuesService.getImageLinkById(item["coverPathId"]);
    // console.log(coverImageResponse);
    setCoverImage(coverImageResponse);
  })


  useEffect(() => {
    fetchCoverImage();
  }, []);

  useEffect(() => {
    setLang(currentLocale == "en-US" ? "Eng" : "Ru");
  }, [currentLocale]);
  

  return (
    <div className="catalog__item">
      <div className="catalog__item-image">
        <Link className="catalog__item-image-link" to={`/catalog/${item["id"]}`}>
        <img src={coverImage} alt="" />
        </Link>
      </div>
      <p className='catalog__item-date'>{date.getDate()} {date.getMonth()} {date.getFullYear()}</p>
      <p className='catalog__item-title'>{item["title"][lang]}</p>
      <Link  to={`/catalog/${item["id"]}`}>
        <button className='catalog__item-button'><FormattedMessage id='catalog-catalog__item-button' /></button>
      </Link>
    </div>
  );
};

export default IssuseComponent;