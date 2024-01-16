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
  const [issueVideo, setIssueVideo] = useState();


  const [fetchArticles, isArticlesLoading, articlesError] = useFetching( async () => {
    const articlesResponse = await IssuesService.getArticlesByIssueId(id);
    setArticles(articlesResponse);
  })

  const [fetchIssue, isIssueLoading, issueError] = useFetching( async () => {
    const issueResponse = await IssuesService.getIssueById(id);
    setIssue(issueResponse);
  })

  const [fetchIssuePdf, isIssuePdfLoading, issuePdfError] = useFetching( async () => {
    const issueResponse = await IssuesService.getFileLinkById(issue["filePathId"]);
    setIssuePdf(issueResponse);
  })
  const [fetchIssueVideo, isIssueVideoLoading, issueVideoError] = useFetching( async () => {
    const issueResponse = await IssuesService.getFileById(issue["videoPathId"]);
    setIssueVideo(issueResponse);
    console.log(issueResponse);
  })

  useEffect(() => {
    fetchArticles();
    fetchIssue();
  }, [id]);

  useEffect(() => {
    fetchIssuePdf();
    fetchIssueVideo();
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
      {(isIssueVideoLoading || issueVideo == '')
        ? <></>
        : <video className='issue_video' width="750px" controls >
            <source src={issueVideo} type="video/mp4"/>
          </video>
      }
      
    </>
  );
};

export default Issuepage;