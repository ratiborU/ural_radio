import React from 'react';

const Adminpahe = () => {
  return (
    <div className='admin'>
      <div className="admin__issue">
        <h2 className='admin__title'>Создание выпуска</h2>
        <form action="">
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='Название выпуска'/>
            <input className="form-input" type="text" placeholder='Название выпуска на английском'/>
          </div>
          <div className="form__issue-video">
            <input className="form-input" type="text" placeholder='id видео'/>
          </div>
          <div className="form__issue-cover">
            <input className="form-input" type="text" placeholder='id обложки'/>
          </div>
          <div className="form__issue-pdf">
            <input className="form-input" type="text" placeholder='id файла'/>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>



        <h2 className='admin__title'>Изменение выпуска</h2>
        <form action="">
          <div className="form__issue-pdf">
            <input className="form-input" type="text" placeholder='id выпуска'/>
          </div>
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='Название выпуска'/>
            <input className="form-input" type="text" placeholder='Название выпуска на английском'/>
          </div>
          <div className="form__issue-video">
            <input className="form-input" type="text" placeholder='id видео'/>
          </div>
          <div className="form__issue-cover">
            <input className="form-input" type="text" placeholder='id обложки'/>
          </div>
          <div className="form__issue-pdf">
            <input className="form-input" type="text" placeholder='id файла'/>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>



        <h2 className='admin__title'>Удаление выпуска</h2>
        <form action="">
          <div className="">
            <input className="form-input" type="text" placeholder='id выпуска'/>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>



        <h2 className='admin__title'>Одобрение комментария</h2>
        <form action="">
          <div className="">
            <input className="form-input" type="text" placeholder='id комментария'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='текст комментария на другом языке'/>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>



        <h2 className='admin__title'>Изменение комментария</h2>
        <form action="">
          <div className="">
            <input className="form-input" type="text" placeholder='id комментария'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='текст комментария на русском'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='текст комментария на английском'/>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>



        <h2 className='admin__title'>Удаление комментария</h2>
        <form action="">
          <div className="">
            <input className="form-input" type="text" placeholder='id комментария'/>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>



        <h2 className='admin__title'>Создание статьи</h2>
        <form action="">
          <div className="">
            <input className="form-input" type="text" placeholder='id выпуска'/>
          </div>
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='Название статьи'/>
            <input className="form-input" type="text" placeholder='Название статьи на английском'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='авторы(через запятую)'/>
          </div>
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='аннотация'/>
            <input className="form-input" type="text" placeholder='аннотация на английском'/>
          </div>
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='ключевые слова(через запятую)'/>
            <input className="form-input" type="text" placeholder='ключевые слова на английском'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='id файла статьи'/>
            <div className="">
            <input className="form-input" type="text" placeholder='литература(через запятую)'/>
          </div>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>


        <h2 className='admin__title'>Изменение статьи</h2>
        <form action="">
          <div className="">
            <input className="form-input" type="text" placeholder='id статьи'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='id выпуска'/>
          </div>
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='Название статьи'/>
            <input className="form-input" type="text" placeholder='Название статьи на английском'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='авторы(через запятую)'/>
          </div>
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='аннотация'/>
            <input className="form-input" type="text" placeholder='аннотация на английском'/>
          </div>
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='ключевые слова(через запятую)'/>
            <input className="form-input" type="text" placeholder='ключевые слова на английском'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='id файла статьи'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='литература(через запятую)'/>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>



        <h2 className='admin__title'>Удаление статьи</h2>
        <form action="">
          <div className="">
            <input className="form-input" type="text" placeholder='id статьи'/>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>



        <h2 className='admin__title'>Создание члена ред. совета</h2>
        <form action="">
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='ФИО'/>
            <input className="form-input" type="text" placeholder='ФИО на английском'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='email'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='id фотографии'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='scopus'/>
          </div>
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='описание'/>
            <input className="form-input" type="text" placeholder='описание на английском'/>
          </div>
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='информация о редакторе'/>
            <input className="form-input" type="text" placeholder='информация на английском'/>
          </div>
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='должность'/>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>



        <h2 className='admin__title'>Изменение члена ред. совета</h2>
        <form action="">
        <div className="">
            <input className="form-input" type="text" placeholder='id члена ред. совета'/>
          </div>
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='ФИО'/>
            <input className="form-input" type="text" placeholder='ФИО на английском'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='email'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='id фотографии'/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='scopus'/>
          </div>
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='описание'/>
            <input className="form-input" type="text" placeholder='описание на английском'/>
          </div>
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='информация о редакторе'/>
            <input className="form-input" type="text" placeholder='информация на английском'/>
          </div>
          <div className="form__issue-name">
            <input className="form-input" type="text" placeholder='должность'/>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>



        <h2 className='admin__title'>Удаление члена ред. совета</h2>
        <form action="">
          <div className="">
            <input className="form-input" type="text" placeholder='id члена ред. совета'/>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>



        <h2 className='admin__title'>Создание файла</h2>
        <form action="">
          <div className="">
            <input className="form-file" type="file"/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='тип файла'/>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>



        <h2 className='admin__title'>Изменение файла</h2>
        <form action="">
        <div className="">
            <input className="form-input" type="text" placeholder='id файла'/>
          </div>
          <div className="">
            <input className="form-file" type="file"/>
          </div>
          <div className="">
            <input className="form-input" type="text" placeholder='тип файла'/>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>



        <h2 className='admin__title'>Удаление файла</h2>
        <form action="">
        <div className="">
            <input className="form-input" type="text" placeholder='id файла'/>
          </div>
          <button className="form__button" type='submit'>создать</button>
        </form>

      </div>
    </div>
  );
};

export default Adminpahe;