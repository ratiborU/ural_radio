// import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import FileService from '../api/FileService';
import { IReductor, IRuEng } from '../types/types';
import { useLanguageContext } from '../i18n/languageContext';
import { useQuery } from 'react-query';


type MainEditorProps = {
  reductor: IReductor;
}


const MainEditor = ({reductor} : MainEditorProps) => {
  const {lang} = useLanguageContext();

  const {data: image} = useQuery({
    queryFn: async () => await FileService.getImageLinkById(reductor["imagePathId"]),
    queryKey: ["image"],
  });

  
  return (
    <div className="editors__editor editor">
      <div className="editor__block">
        <div className="editor__image">
          <Link to={`/editors/${reductor["id"]}`}>
            <img className="editor__image-img" src={image} alt="" />
          </Link>
        </div>
        <div className="editor__description">
          <p className='editor__name'>{reductor["name"][lang as keyof IRuEng]}</p>
          <p className='editor__workplace'>{reductor["description"][lang as keyof IRuEng]}</p>
        </div>
      </div>
    </div>
  );
};

export default MainEditor;