import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IssuesService from '../api/IssuesService';
import { useFetching } from '../hooks/useFetching';

const Editorpage = ({currentLocale}) => {
  const [reductor, setReductor] = useState();
  const [reductorImage, setReductorImage] = useState();
  const [lang, setLang] = useState('Ru');
  const {id} = useParams();


  const [fetchReductor, isReductorLoading, reductorError] = useFetching( async () => {
    const reductorResponse = await IssuesService.getReductorById(id);
    setReductor(reductorResponse);
  })

  const [fetchReductorImage, isReductorImageLoading, reductorImageError] = useFetching( async () => {
    const reductorImageResponse = await IssuesService.getImageLinkById(reductor["imagePathId"]);
    setReductorImage(reductorImageResponse);
  })

  
  useEffect(() => {
    fetchReductor();
  }, []);

  
  useEffect(() => {
    fetchReductorImage();
  }, [reductor]);

  useEffect(() => {
    setLang(currentLocale == "en-US" ? "Eng" : "Ru");
  }, [currentLocale]);


  return (
    <div>
      <div className="editor-page">
        <div className="editor-page__block">
          <div className="editor-page__image">
            {isReductorLoading && isReductorImageLoading 
              ? <p></p> 
              : <img src={reductorImage} alt="" />
            }
          </div>
          <div className="editor-page__description">
            {!isReductorLoading ? <p className='editor-page__name'>{reductor["name"][lang]}</p> : <p>загрузка</p>}
            {!isReductorLoading ? <p className='editor-page__workplace'>{reductor["description"][lang]}</p> : <p>загрузка</p>}
          </div>
        </div>

        <div className="editor-page__email-block">
          <div className="editor-page__email-block-container">
            <div className="editor-page__scopus">Scopus</div>
            {!isReductorLoading ? <div className="editor-page__email">{reductor["email"]}</div> : <p>загрузка</p>}
          </div>
        </div>

        <div className="editor-page__text">
          {!isReductorLoading ? <p>{reductor["content"][lang]}</p> : <p>загрузка</p>}
        </div>
      </div>
    </div>
  );
};

export default Editorpage;