// import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import FileService from '../api/FileService';
import { FormattedMessage } from 'react-intl'
import { IIssue, IRuEng } from '../types/types';
import { useLanguageContext } from '../i18n/languageContext';
import { useQuery } from 'react-query';


type IssueComponentProps = {
  issue: IIssue;
}


const IssuseComponent = ({issue}: IssueComponentProps) => {
  const {lang} = useLanguageContext();
  const date = new Date(issue["date"]);

  const { data: image } = useQuery({
    queryFn: async () => await FileService.getFileLinkById("6599a59efe7f2cec36368d71"),
    queryKey: ["image"],
    staleTime: Infinity,
  });

  return (
    <div className="catalog__item">
      <div className="catalog__item-image">
        <Link className="catalog__item-image-link" to={`/catalog/${issue["id"]}`}>
        <img src={image} alt="" />
        </Link>
      </div>
      <p className='catalog__item-date'>{date.getDate()} {date.getMonth()} {date.getFullYear()}</p>
      <p className='catalog__item-title'>{issue["title"][lang as keyof IRuEng]}</p>
      <Link  to={`/catalog/${issue["id"]}`}>
        <button className='catalog__item-button'><FormattedMessage id='catalog-catalog__item-button' /></button>
      </Link>
    </div>
  );
};


export default IssuseComponent;