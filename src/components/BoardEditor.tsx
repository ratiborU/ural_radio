// import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import FileService from '../api/FileService';
import { IReductor, IRuEng } from '../types/types';
import { useQuery } from 'react-query';
import { useLanguageContext } from '../i18n/languageContext';


type BoardEditorProps = {
  reductor: IReductor;
}


const BoardEditor = ({reductor}: BoardEditorProps) => {
  const {lang} = useLanguageContext();

  const { data: image } = useQuery({
    queryFn: async () => await FileService.getImageLinkById(reductor["imagePathId"]),
    queryKey: ["image"],
    staleTime: Infinity,
  });

  return (
    <div>
      <div className="editors__board-element">
        <div className="editors__board-image">
          <Link  to={`/editors/${reductor["id"]}`}>
            <img src={image} alt="" />
          </Link>
        </div>
        <p className='editors__board-name'>{reductor["name"][lang as keyof IRuEng]}</p>
      </div>
    </div>
  );
};

export default BoardEditor;