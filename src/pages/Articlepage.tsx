// import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleService from '../api/ArticleService';
import CommentService from '../api/CommentService';
import FileService from '../api/FileService';
import CommentComponent from '../conponents/CommentComponent';
import { FormattedMessage } from 'react-intl'

import { IRuEng } from '../types/types';
import { useLanguageContext } from '../i18n/languageContext';

import { useMutation, useQuery } from 'react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const commentSchema = z.object({
  comment: z.string().min(1, "Комментарий не должен быть пустым")
});

type ICommentSchema = z.infer<typeof commentSchema>;

const Articlepage = () => {
  const {id} = useParams();
  const {lang} = useLanguageContext();


  const {status: articleStatus, data: article} = useQuery({
    queryFn: async () => await ArticleService.getArticleById(id),
    queryKey: ["article"],
    staleTime: Infinity
  });

  const {data: pdf} = useQuery({
    queryFn: async () => await FileService.getFileLinkById(article?.filePathId),
    queryKey: ["pdf", article?.filePathId],
    enabled: articleStatus === 'success',
    staleTime: Infinity
  });

  const {isLoading: isLoadingComments, data: comments} = useQuery({
    queryFn: async () => await CommentService.getCommentsByArticleId(id),
    queryKey: ["pdf", id],
    staleTime: Infinity
  });

  const mutation = useMutation(async (comment: string) => {
    await CommentService.createComment(id, comment);
  });


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset: resetComment,
    // getValues
  } = useForm<ICommentSchema>({resolver: zodResolver(commentSchema)});


  const onSubmit = async (data: ICommentSchema) => {
    await mutation.mutate(data.comment);
    resetComment();
  }


  if (articleStatus === 'loading') {
    return "загрузка";
  }


  return (
    <div className='article'>
      <p className='article__title'>{article?.title[lang as keyof IRuEng]}</p>
      <p className='article__authors'>{article?.authors.join(", ")}</p>

      <div className="article__buttons">
        <a className="article__button-link" href={pdf}>
          <button className='article__pdf-download'><FormattedMessage id='article-article__pdf-download'/></button>
        </a>
        <a className="article__button-link" href='#'>
          <button className='article__pdf-download article__pdf-download_second' onClick={() => {
            navigator.clipboard.writeText(article?.reference[lang as keyof IRuEng] ?? '');
          }}><FormattedMessage id='article-article__pdf-download_second'/></button>
        </a>
      </div>
            
          
      <p className='article__subtitle'><FormattedMessage id='article-article__annotation'/></p>
      <p className='article__text'>{article?.content[lang as keyof IRuEng]}</p>

      <p className='article__subtitle'><FormattedMessage id='article-article__words'/></p>
      <p className='article__text'>{article?.keywords.map(item => item[lang as keyof IRuEng]).join(", ")}</p>

      <p className='article__subtitle'><FormattedMessage id='article-article__literature'/></p>
      <ol className='article__literature-list'>
        {
          article?.literature.map((item, itemId) => <li className='article__literature-book' key={itemId}>{item}</li>)
        }
      </ol>
            
            
      <p className='article__title'><FormattedMessage id='article-article__comments-title'/></p>
      {isLoadingComments
        ? <p>загрузка</p>
        : <div className="article__comments">
            {comments?.map((comment, commentId) => <CommentComponent key={commentId} comment={comment}/>)}
          </div>
      }
 
      <p className='article__subtitle'><FormattedMessage id='article-article__comments-subtitle1'/></p>
      <p className='article__comment-title'><FormattedMessage id='article-article__comments-subtitle2'/></p>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea 
          {...register("comment")}
          className='article__comment-field' 
          placeholder='Введите текст...' 
        >
        </textarea>
        {errors.comment && <p>{`${errors.comment.message}`}</p>}
        <button className='article__comment-button' disabled={isSubmitting} type="submit"><FormattedMessage id='article-article__comment-button'/></button>
      </form>
      <div className="buttom"></div>
    </div>
  );
};

export default Articlepage;