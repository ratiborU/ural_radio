import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import IssuesService from '../api/IssuesService';
import { FormattedMessage } from 'react-intl'

const ArticleComponent = ({article, currentLocale}) => {
  const [articlePdf, setArticlePdf] = useState('');
  const [lang, setLang] = useState('Ru');

  const [fetchArticlePdf, isArticlePdfLoading, articlePdfError] = useFetching( async () => {
    const articlePdfResponse = await IssuesService.getFileLinkById("6599a59efe7f2cec36368d71"); //article["filePathId"]
    console.log(articlePdfResponse);
    setArticlePdf(articlePdfResponse);
  })

  useEffect(() => {
    fetchArticlePdf();
  }, []);

  useEffect(() => {
    setLang(currentLocale == "en-US" ? "Eng" : "Ru");
  }, [currentLocale]);
  

  return (
    <div className="article-paragraph">
      <a href={articlePdf}>
        <button className='article-paragraph__button'><FormattedMessage id='article-article-paragraph__button' /></button>
      </a>
      <div className="article-paragraph__description">
        <Link to={`/catalog/article/${article["id"]}`} className='article-paragraph__name'>
          {article["title"][lang]}
        </Link>
        <p className='article-paragraph__authors'>{article["authors"].join(", ")}</p>
      </div>
    </div>
  );
};

export default ArticleComponent;