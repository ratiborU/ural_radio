import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import IssuesService from '../api/IssuesService';
import { useFetching } from '../hooks/useFetching';
import CommentComponent from '../conponents/CommentComponent';
import { FormattedMessage } from 'react-intl'


const Articlepage = ({currentLocale}) => {
  const {id} = useParams();

  const [article, setArticle] = useState({});
  const [biographicalReference, setBiographicalReference] = useState('');
  const [comments, setComments] = useState([]);
  const [articlePdf, setArticlePdf] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [lang, setLang] = useState('Ru');
  

  const [fetchArticle, isArticleLoading, articleError] = useFetching(async () => {
    const articleResponse = await IssuesService.getArticleById(id);
    setBiographicalReference(articleResponse["reference"]);
    setArticle(articleResponse);
  });


  const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
    const commentsResponse = await IssuesService.getCommentsByArticleId(id);
    setComments(commentsResponse);
  });


  const [fetchCommentSend, isCommentSendLoading, commentSendError] = useFetching(async () => {
    const commentsResponse = await IssuesService.createComment(id, commentContent);
    setCommentContent('');
  });


  const [fetchArticlePdf, isIssuePdfLoading, issuePdfError] = useFetching( async () => {
    const articlePdfResponse = await IssuesService.getFileLinkById("6599a59efe7f2cec36368d71");
    setArticlePdf(articlePdfResponse);
  })


  useEffect(() => {
    fetchArticle();
    fetchComments();
  }, [])


  useEffect(() => {
    fetchArticlePdf();
  }, [article])

  useEffect(() => {
    setLang(currentLocale == "en-US" ? "Eng" : "Ru");
  }, [currentLocale]);



  return (
    <>
      {isArticleLoading 
        ? "загрузка"
        : <div className='article'>
            <p className='article__title'>{article["title"][lang]}</p>
            <p className='article__authors'>{article["authors"].join(", ")}</p>

            <div className="article__buttons">
              <a className="article__button-link" href={articlePdf}>
                <button className='article__pdf-download'><FormattedMessage id='article-article__pdf-download'/></button>
              </a>
              <a className="article__button-link" href='#'>
                <button className='article__pdf-download article__pdf-download_second' onClick={() => {
                  navigator.clipboard.writeText(biographicalReference[lang]);
                }}><FormattedMessage id='article-article__pdf-download_second'/></button>
              </a>
            </div>
            
          
            <p className='article__subtitle'><FormattedMessage id='article-article__annotation'/></p>
            <p className='article__text'>{article["content"][lang]}</p>

            <p className='article__subtitle'><FormattedMessage id='article-article__words'/></p>
            <p className='article__text'>{article["keywords"].map(item => item[lang]).join(", ")}</p>

            <p className='article__subtitle'><FormattedMessage id='article-article__literature'/></p>
            <ol className='article__literature-list'>
              {
                article["literature"].map((item, itemId) => <li className='article__literature-book' key={itemId}>{item}</li>)
              }
            </ol>
            
            
            <p className='article__title'><FormattedMessage id='article-article__comments-title'/></p>
            {isArticleLoading && isCommentsLoading
              ? <p>загрузка</p>
              : <div className="article__comments">
                  {comments.map((comment, commentId) => <CommentComponent key={commentId} comment={comment} currentLocale={currentLocale}/>)}
                </div>
            } 
            {/* <div className="article__comments">
              {comments.map((comment, commentId) => <CommentComponent key={commentId} comment={comment}/>)}
            </div> */}

            <p className='article__subtitle'><FormattedMessage id='article-article__comments-subtitle1'/></p>
            <p className='article__comment-title'><FormattedMessage id='article-article__comments-subtitle2'/></p>
            <textarea className='article__comment-field' placeholder='Введите текст...' name="" id="" cols="30" rows="10" value={commentContent} onChange={(e) => setCommentContent(e.target.value)}></textarea>
            <button className='article__comment-button' onClick={() => fetchCommentSend()}><FormattedMessage id='article-article__comment-button'/></button>
          </div>
      }
    </>
  );
};

export default Articlepage;