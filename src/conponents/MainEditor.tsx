import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IssuesService from '../api/IssuesService';
import { useFetching } from '../hooks/useFetching';
// import reductors from '../api/ReductorsApi';
// import image1 from "../assets/editors/editor1.jpg";

const MainEditor = ({reductor, currentLocale}) => {
  const [reductorImage, setReductorImage] = useState('');
  const [lang, setLang] = useState('Ru');
  

  const [fetchReductorImage, isReductorImageLoading, reductorImageError] = useFetching( async () => {
    const reductorImageResponse = await IssuesService.getImageLinkById(reductor["imagePathId"]);
    setReductorImage(reductorImageResponse);
    console.log(reductor);
  })


  useEffect(() => {
    fetchReductorImage();
  }, []);

  useEffect(() => {
    setLang(currentLocale == "en-US" ? "Eng" : "Ru");
  }, [currentLocale]);

  
  return (
    <div className="editors__editor editor">
      {/* <div className="editor__title title"><p>{reductor["rank"]}</p></div> */}
      <div className="editor__block">
        <div className="editor__image">
          <Link to={`/editors/${reductor["id"]}`}>
            <img className="editor__image-img" src={reductorImage} alt="" />
          </Link>
        </div>
        <div className="editor__description">
          <p className='editor__name'>{reductor["name"][lang]}</p>
          <p className='editor__workplace'>{reductor["description"][lang]}</p>
        </div>
      </div>
    </div>
  );
};

export default MainEditor;