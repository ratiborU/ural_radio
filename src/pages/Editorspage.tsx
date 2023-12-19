import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "../assets/editors/editor1.jpg";
import image2 from "../assets/editors/editor2.jpg";
import image3 from "../assets/editors/editor3.jpg";
import image4 from "../assets/editors/editor4.jpg";
import image5 from "../assets/editors/editor6.jpg";
import BoardEditor from '../conponents/BoardEditor';
import reductors from '../api/ReductorsApi';

const Editorspage = () => {
  return (
    <div>
      <div className="editors">
        <div className="editors__editor editor">
          <div className="editor__title title"><p>Главный редактор</p></div>
          <div className="editor__block">
            <div className="editor__image">
              <Link to="/editors/1">
                <img src={image1} alt="" />
              </Link>
            </div>
            <div className="editor__description">
              <p className='editor__name'>Князев Сергей Тихонович</p>
              <p className='editor__workplace'>УрФУ им. первого Президента России Б. Н. Ельцина</p>
            </div>
          </div>
        </div>

        <div className="editors__editor editor">
          <div className="editor__title title"><p>Зав. редакцией</p></div>
          <div className="editor__block">
            <div className="editor__image">
              <Link to="/editors/2">
                <img src={image3} alt="" />
              </Link>
            </div>
            <div className="editor__description">
              <p className='editor__name'>Зейде Кирилл Михайлович</p>
              <p className='editor__workplace'>УрФУ им. первого Президента России Б. Н. Ельцина</p>
            </div>
          </div>
        </div>

        <div className="editors__board">
          <div className="editors__board-title title"><p>Редакционный совет</p></div>
          <div className="editors__board-container">
            {Object.keys(reductors).slice(3).map(id => {
              return <BoardEditor key={id} id={id}/>
            })}
          </div>
        </div>
        
        <div className="editors__editor editor">
          <div className="editor__title title"><p>Управляющая редакией</p></div>
          <div className="editor__block">
            <div className="editor__image">
              <Link to="/editors/2">
                <img src={image2} alt="" />
              </Link>
            </div>
            <div className="editor__description">
              <p className='editor__name'>Папуловская Наталья Владимировна</p>
              <p className='editor__workplace'>УрФУ им. первого Президента России Б. Н. Ельцина</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editorspage;