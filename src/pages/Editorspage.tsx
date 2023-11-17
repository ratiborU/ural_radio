import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "../assets/Ellipse 12.jpg"
import image2 from "../assets/Ellipse 13.jpg"
import image3 from "../assets/Ellipse 14.jpg"
import image4 from "../assets/Ellipse 15.jpg"
import image5 from "../assets/Ellipse 16.jpg"

const Editorspage = () => {
  return (
    <div>
      <div className="editors">
        <div className="editors__editor editor">
          <div className="editor__title title"><p>Главный редактор</p></div>
          <div className="editor__block">
            <div className="editor__image">
              <Link  to="/editors/1">
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
              <Link  to="/editors/2">
                <img src={image2} alt="" />
              </Link>
            </div>
            <div className="editor__description">
              <p className='editor__name'>Папуловская Наталья Владимировна</p>
              <p className='editor__workplace'>УрФУ им. первого Президента России Б. Н. Ельцина</p>
            </div>
          </div>
        </div>

        <div className="editors__board">
          <div className="editors__board-title title"><p>Редакционный совет</p></div>
          <div className="editors__board-container">
            <div className="editors__board-element">
              <div className="editors__board-image">
                <Link  to="/editors/3">
                  <img src={image3} alt="" />
                </Link>
              </div>
              <p className='editors__board-name'>Зейде Кирилл Михайлович</p>
            </div>
            <div className="editors__board-element">
              <div className="editors__board-image">
                <Link  to="/editors/4">
                  <img src={image4} alt="" />
                </Link>
              </div>
              <p className='editors__board-name'>Зейде Кирилл Михайлович</p>
            </div>
            <div className="editors__board-element">
              <div className="editors__board-image">
                <Link  to="/editors/5">
                  <img src={image5} alt="" />
                </Link>
              </div>
              <p className='editors__board-name'>Зейде Кирилл Михайлович</p>
            </div>

            <div className="editors__board-element">
              <div className="editors__board-image">
                <Link  to="/editors/3">
                  <img src={image3} alt="" />
                </Link>
              </div>
              <p className='editors__board-name'>Зейде Кирилл Михайлович</p>
            </div>
            <div className="editors__board-element">
              <div className="editors__board-image">
                <Link  to="/editors/4">
                  <img src={image4} alt="" />
                </Link>
              </div>
              <p className='editors__board-name'>Зейде Кирилл Михайлович</p>
            </div>
            <div className="editors__board-element">
              <div className="editors__board-image">
                <Link  to="/editors/5">
                  <img src={image5} alt="" />
                </Link>
              </div>
              <p className='editors__board-name'>Зейде Кирилл Михайлович</p>
            </div>

            <div className="editors__board-element">
              <div className="editors__board-image">
                <Link  to="/editors/3">
                  <img src={image3} alt="" />
                </Link>
              </div>
              <p className='editors__board-name'>Зейде Кирилл Михайлович</p>
            </div>
            <div className="editors__board-element">
              <div className="editors__board-image">
                <Link  to="/editors/4">
                  <img src={image4} alt="" />
                </Link>
              </div>
              <p className='editors__board-name'>Зейде Кирилл Михайлович</p>
            </div>
            <div className="editors__board-element">
              <div className="editors__board-image">
                <Link  to="/editors/5">
                  <img src={image5} alt="" />
                </Link>
              </div>
              <p className='editors__board-name'>Зейде Кирилл Михайлович</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Editorspage;