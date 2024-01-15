import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import IssuesService from '../api/IssuesService';
// import reductors from '../api/ReductorsApi';
// import image1 from "../assets/editors/editor1.jpg";

const BoardEditor = ({reductor, currentLocale}) => {
  
  const [reductorImage, setReductorImage] = useState();
  const [lang, setLang] = useState('Ru');
  

  const [fetchReductorImage, isReductorImageLoading, reductorImageError] = useFetching( async () => {
    const reductorImageResponse = await IssuesService.getImageLinkById(reductor["imagePathId"]);
    setReductorImage(reductorImageResponse);
  })


  useEffect(() => {
    fetchReductorImage();
  }, []);

  useEffect(() => {
    setLang(currentLocale == "en-US" ? "Eng" : "Ru");
  }, [currentLocale]);

  return (
    <div>
      <div className="editors__board-element">
        <div className="editors__board-image">
          <Link  to={`/editors/${reductor["id"]}`}>
            <img src={reductorImage} alt="" />
          </Link>
        </div>
        <p className='editors__board-name'>{reductor["name"][lang]}</p>
      </div>
    </div>
  );
};

export default BoardEditor;