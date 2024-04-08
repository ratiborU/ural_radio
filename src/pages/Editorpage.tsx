// import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReductorService from '../api/ReductorService';
import FileService from '../api/FileService';
import { useLanguageContext } from '../i18n/languageContext';
import { useQuery } from 'react-query';
import { IRuEng } from '../types/types';


const Editorpage = () => {
  const {id} = useParams();
  const {lang} = useLanguageContext();

  

  const {status: reductorStatus, data: reductor, error} = useQuery({
    queryFn: async () => await ReductorService.getReductorById(id),
    queryKey: ["reductor", id],
    staleTime: Infinity
  });

  const {data: image} = useQuery({
    queryFn: async () => await FileService.getImageLinkById(reductor?.imagePathId),
    queryKey: ["reductor", reductor?.imagePathId],
    enabled: reductorStatus === 'success',
    staleTime: Infinity
  });

  if (error) {
    return <p>Произошла ошибка</p>
  }
  if (reductorStatus !== 'success') {
    return 'загрузка';
  }


  return (
    <div>
      <div className="editor-page">
        <div className="editor-page__block">
          <div className="editor-page__image">
          <img src={image} alt="" />
          </div>
          <div className="editor-page__description">
            <p className='editor-page__name'>{reductor?.name[lang as keyof IRuEng]}</p>
            <p className='editor-page__workplace'>{reductor?.description[lang as keyof IRuEng]}</p>
          </div>
        </div>

        <div className="editor-page__email-block">
          <div className="editor-page__email-block-container">
            <div className="editor-page__scopus">Scopus</div>
            <div className="editor-page__email">{reductor["email"]}</div>
          </div>
        </div>

        <div className="editor-page__text">
          <p>{reductor?.content[lang as keyof IRuEng]}</p>
        </div>
      </div>
    </div>
  );
};

export default Editorpage;