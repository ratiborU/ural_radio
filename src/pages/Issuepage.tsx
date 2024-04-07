// import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import IssuesService from '../api/IssuesService';
import ArticleService from '../api/ArticleService';
import FileService from '../api/FileService';
import ArticleComponent from '../components/ArticleComponent';
import { FormattedMessage } from 'react-intl'
import { IRuEng } from '../types/types';
import { useLanguageContext } from '../i18n/languageContext';
import { useQuery } from 'react-query';



const Issuepage = () => {
  const {id} = useParams();
  const {lang} = useLanguageContext();

  const {isLoading: isLoadingIssue, data: issue, error} = useQuery({
    queryFn: async () => await IssuesService.getIssueById(id),
    queryKey: ["issue", id],
    staleTime: Infinity
  });

  const {isLoading: isLoadingArticles, data: articles} = useQuery({
    queryFn: async () => await ArticleService.getArticlesByIssueId(id),
    queryKey: ["articlesA", id],
    staleTime: Infinity
  });

  const {isLoading: isLoadingVideo, data: video} = useQuery({
    queryFn: async () => await FileService.getFileById(issue?.videoPathId),
    queryKey: ["video", issue?.videoPathId],
    enabled: !isLoadingIssue,
    staleTime: Infinity
  });

  const {data: pdf} = useQuery({
    queryFn: async () => await FileService.getFileById(issue?.filePathId),
    queryKey: ["pdf", issue?.filePathId],
    enabled: !isLoadingIssue,
    staleTime: Infinity
  });

  if (error) {
    return <p>Произошла ошибка</p>
  }
  if (isLoadingIssue) {
    return "загрузка";
  }

  return (
    <>

      <p className='issue__title'>{issue?.title[lang as keyof IRuEng]}</p>
      <a href={pdf}>
        <button className='issue__button'>
        <FormattedMessage id='issue-issue__button' />
        </button>
      </a>
      
      <p className='issue__title'><FormattedMessage id='issue-issue__title' /></p>

      {isLoadingArticles 
        ? "загрузка"
        : articles?.map(article => <ArticleComponent key={article["id"]} article={article}/>)
      }

      {(isLoadingVideo || video == '')
        ? <></>
        : <video className='issue_video' width="750px" controls >
            <source src={video} type="video/mp4"/>
          </video>
      }
      
    </>
  );
};

export default Issuepage;