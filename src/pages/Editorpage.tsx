import React from 'react';
import { useParams } from 'react-router-dom';
import reductors from '../api/ReductorsApi';

const Editorpage = () => {
  const {id} = useParams();
  return (
    <div>
      <div className="editor-page">
        <div className="editor-page__block">
          <div className="editor-page__image">
            <img src={reductors[id].image} alt="" />
          </div>
          <div className="editor-page__description">
            <p className='editor-page__name'>{reductors[id].name}</p>
            <p className='editor-page__workplace'>{reductors[id].description}</p>
          </div>
        </div>

        <div className="editor-page__email-block">
          <div className="editor-page__email-block-container">
            <div className="editor-page__scopus">Scopus</div>
            <div className="editor-page__email">{reductors[id].email}</div>
          </div>
        </div>

        <div className="editor-page__text">
          {reductors[id].text.map((text) => {
            return <p>{text}</p>
          })}
        </div>
      </div>
    </div>
  );
};

export default Editorpage;