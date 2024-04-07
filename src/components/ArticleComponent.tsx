// import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import FileService from '../api/FileService';
import { FormattedMessage } from 'react-intl'
import { IArticle, IRuEng } from '../types/types';

import { useQuery } from 'react-query';
import { useLanguageContext } from '../i18n/languageContext';


type ArticleComponentProps = {
  article: IArticle
}


const ArticleComponent = ({article} : ArticleComponentProps) => {
  const {lang} = useLanguageContext();

  const { data: file } = useQuery({
    queryFn: async () => await FileService.getFileLinkById("6599a59efe7f2cec36368d71"),
    queryKey: ["file"],
    staleTime: Infinity,
  });

  return (
    <div className="article-paragraph">
      <a href={file}>
        <button className='article-paragraph__button'><FormattedMessage id='article-article-paragraph__button' /></button>
      </a>
      <div className="article-paragraph__description">
        <Link to={`/catalog/article/${article["id"]}`} className='article-paragraph__name'>
          {article["title"][lang as keyof IRuEng]}
        </Link>
        <p className='article-paragraph__authors'>{article["authors"].join(", ")}</p>
      </div>
    </div>
  );
};

export default ArticleComponent;