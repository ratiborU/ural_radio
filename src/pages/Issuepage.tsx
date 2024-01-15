import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import IssuesService from '../api/IssuesService';
import ArticleComponent from '../conponents/ArticleComponent';
import { FormattedMessage } from 'react-intl'


const Issuepage = ({currentLocale}) => {
  const {id} = useParams();

  const [articles, setArticles] = useState();
  const [issue, setIssue] = useState();
  const [lang, setLang] = useState('Ru');
  const [issuePdf, setIssuePdf] = useState();


  const [fetchArticles, isArticlesLoading, articlesError] = useFetching( async () => {
    const articlesResponse = await IssuesService.getArticlesByIssueId(id);
    setArticles(articlesResponse);
  })

  const [fetchIssue, isIssueLoading, issueError] = useFetching( async () => {
    const issueResponse = await IssuesService.getIssueById(id);
    console.log(issueResponse);
    setIssue(issueResponse);
  })

  const [fetchIssuePdf, isIssuePdfLoading, issuePdfError] = useFetching( async () => {
    const issueResponse = await IssuesService.getFileLinkById(issue["filePathId"]);
    setIssuePdf(issueResponse);
  })

  useEffect(() => {
    fetchArticles();
    fetchIssue();
  }, [id]);

  useEffect(() => {
    fetchIssuePdf();
  }, [issue]);

  useEffect(() => {
    setLang(currentLocale == "en-US" ? "Eng" : "Ru");
  }, [currentLocale]);

  return (
    <>
      <p className='issue__title'>{isIssueLoading ? "загрузка" : issue["title"][lang]}</p>
      <a href={issuePdf}>
        <button className='issue__button'>
        <FormattedMessage id='issue-issue__button' />
        </button>
      </a>
      
      <p className='issue__title'><FormattedMessage id='issue-issue__title' /></p>

      {isArticlesLoading 
        ? "загрузка"
        : articles.map(article => <ArticleComponent key={article["id"]} article={article} currentLocale={currentLocale}/>)
      }
      <iframe className='issue_video'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/hN_q-_nGv4U?autoplay=0`}>
      </iframe>
    </>
  );
};

export default Issuepage;