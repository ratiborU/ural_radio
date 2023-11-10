import React from 'react';
// import elipse from '../assets/Ellipse 8.svg';

const ForAuthorspage = () => {
  return (
    <>
      <div className='image'></div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p>Полезные файлы</p></div>
        <div className="paragraph__text">
          <p>Мы предлагаем вам ознакомиться с файлами, приведёнными ниже и доступными для скачивания, которые позволят вам убедиться, что ваша статья соответствует всем нашим требованиям, и помогут в подготовке вашей статьи.</p>
        </div>
        <ol className="paragraph__list-ol">
          <li className='paragraph__item'>Требования к статьям</li>
          <li className='paragraph__item'>Публикационная этика</li>
          <li className='paragraph__item'>Правила оформления статьи</li>
          <li className='paragraph__item'>Путь статьи</li>
        </ol>
      </div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p>Общая информация</p></div>
        <ul className="paragraph__list-ul paragraph__text_list">
          <li className='paragraph__item'>Публикация для всех авторов бесплатна.</li>
          <li className='paragraph__item'>Приоритет имеют молодые авторы (до 39 лет).</li>
          <li className='paragraph__item'>К публикации принимаются статьи на русском и английском языках.</li>
          <li className='paragraph__item'>Все статьи должны содержать развернутые аннотации на английском языке.</li>
          <li className='paragraph__item'>К рассмотрению принимаются ранее не опубликованные и не находящиеся на рассмотрении в других журналах статьи, объемом от 0,5 до 1,5 авт.л</li>
        </ul>
      </div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p>Направления журнала</p></div>
        <div className="paragraph__text">
          <p>Журнал ориентирован на следующие научные специальности:</p>
        </div>
        <div className="paragraph__text paragraph__text_list">
          <p><span className='paragraph__number'>2.2.2.</span> Электронная компонентная база микро- и наноэлектроники, квантовых устройств (технические науки)</p>
          <p><span className='paragraph__number'>2.2.8.</span> Методы и приборы контроля и диагностики материалов, изделий, веществ и природной среды (технические науки)</p>
          <p><span className='paragraph__number'>2.2.13.</span> Радиотехника, в том числе системы и устройства телевидения (технические науки)</p>
          <p><span className='paragraph__number'>2.2.14.</span> Антенны, СВЧ-устройства и их технологии</p>
          <p><span className='paragraph__number'>2.2.15.</span> Системы, сети и устройства телекоммуникаций (технические науки)</p>
          <p><span className='paragraph__number'>2.2.16.</span> Радиолокация и радионавигация (технические науки)</p>
        </div>
      </div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p>Принципы рецензирования статей</p></div>
        <ol className="paragraph__list-ol">
          <li className='paragraph__item'>Оценка соответствия статьи профилю журнала.</li>
          <li className='paragraph__item'>Оценка соответствия статьи требованиям к публикации.</li>
          <li className='paragraph__item'>Оценка соответствия статьи современному уровню разработки</li>
          <li className='paragraph__item'>Оценка полноты раскрытия темы научной статьи и обоснование выводов.</li>
          <li className='paragraph__item'>Оценка методов исследования проблемы, качества библиографического аппарата.</li>
          <li className='paragraph__item'>Оценка языка, логики и стиля изложения.</li>
        </ol>
      </div>
    </>
  );
};

export default ForAuthorspage;