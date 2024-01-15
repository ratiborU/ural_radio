import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import IssuesService from '../api/IssuesService';
import { useFetching } from '../hooks/useFetching';
import CommentComponent from '../conponents/CommentComponent';


const Articlepage = () => {
  const {id} = useParams();

  const [article, setArticle] = useState({});
  const [biographicalReference, setBiographicalReference] = useState('');
  const [comments, setComments] = useState([]);
  const [articlePdf, setArticlePdf] = useState('');

  const [commentContent, setCommentContent] = useState('');

  const [fetchArticle, isArticleLoading, articleError] = useFetching(async () => {
    const articleResponse = await IssuesService.getArticleById(id);
    // console.log(articleResponse);
    setBiographicalReference(articleResponse["reference"]);
    console.log(articleResponse["reference"]);
    // console.log(articleResponse["authors"].join(", ") + " " + articleResponse["title"]["Ru"] + ". " + "Ural Radio Engineering Journal. 2024");
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
    // console.log(articlePdfResponse);
    setArticlePdf(articlePdfResponse);
  })


  useEffect(() => {
    fetchArticle();
    fetchComments();
  }, [])


  useEffect(() => {
    fetchArticlePdf();
  }, [article])



  return (
    <>
      {isArticleLoading 
        ? "загрузка"
        : <div className='article'>
            <p className='article__title'>{article["title"]["Ru"]}</p>
            <p className='article__authors'>{article["authors"].join(", ")}</p>

            <div className="article__buttons">
              <a className="article__button-link" href={articlePdf}>
                <button className='article__pdf-download'>Читать PDF</button>
              </a>
              <a className="article__button-link" href='#'>
                <button className='article__pdf-download article__pdf-download_second' onClick={() => {
                  navigator.clipboard.writeText(biographicalReference["Ru"]);
                }}>Биографическая ссылка</button>
              </a>
            </div>
            
          
            <p className='article__subtitle'>Аннотация</p>
            <p className='article__text'>{article["content"]["Ru"]}</p>

            <p className='article__subtitle'>Ключевые слова</p>
            <p className='article__text'>{article["keywords"].map(item => item["Ru"]).join(", ")}</p>

            <p className='article__subtitle'>Литература</p>
            <ol className='article__literature-list'>
              {
                article["literature"].map((item, itemId) => <li className='article__literature-book' key={itemId}>{item}</li>)
              }
            </ol>
            
            
            <p className='article__title'>Комментарии</p>
            {isArticleLoading && isCommentsLoading
              ? <p>загрузка</p>
              : <div className="article__comments">
                  {comments.map((comment, commentId) => <CommentComponent key={commentId} comment={comment}/>)}
                </div>
            } 
            {/* <div className="article__comments">
              {comments.map((comment, commentId) => <CommentComponent key={commentId} comment={comment}/>)}
            </div> */}

            <p className='article__subtitle'>Оставить комментарий</p>
            <p className='article__comment-title'>Ваш комментарий</p>
            <textarea className='article__comment-field' placeholder='Введите текст...' name="" id="" cols="30" rows="10" value={commentContent} onChange={(e) => setCommentContent(e.target.value)}></textarea>
            <button className='article__comment-button' onClick={() => fetchCommentSend()}>Отправить</button>
          </div>
      }
    </>
  );
};

export default Articlepage;