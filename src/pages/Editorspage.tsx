import React, { useEffect, useState } from 'react';
import BoardEditor from '../conponents/BoardEditor';
// import reductors from '../api/ReductorsApi';
import MainEditor from '../conponents/MainEditor';
import IssuesService from '../api/IssuesService';
import { useFetching } from '../hooks/useFetching';
import { FormattedMessage } from 'react-intl';



const Editorspage = ({currentLocale}) => {
  const [reductors, setReductors] = useState([]);

  const [mainReductor, setMainReductor] = useState();
  const [subReductor, setSubReductor] = useState();
  const [menagerReductor, setMenagerReductor] = useState();



  const [fetchReductors, isReductorsLoading, reductorsError] = useFetching( async () => {
    const reductorsResponse = await IssuesService.getAllReductors();
    setReductors(reductorsResponse);
    setMainReductor(reductorsResponse.filter((item) => item["rank"] == "Главный редактор")[0]);
    setSubReductor(reductorsResponse.filter((item) => item["rank"] == "Заместитель главного редактора")[0]);
    setMenagerReductor(reductorsResponse.filter((item) => item["rank"] == "Управляющая редакцией")[0]);
    console.log(currentLocale);
  })

  useEffect(() => {
    fetchReductors();
  }, []);


  return (
    <div>
      <div className="editors">
        <div className="editor__title title"><p><FormattedMessage id='editors-title1' /></p></div>
        {!isReductorsLoading ? <MainEditor reductor={mainReductor} currentLocale={currentLocale}/> : <p>загрузка</p>}
        <div className="editor__title title"><p><FormattedMessage id='editors-title2' /></p></div>
        {!isReductorsLoading ? <MainEditor reductor={subReductor} currentLocale={currentLocale}/> : <p>загрузка</p>}
        <div className="editor__title title"><p><FormattedMessage id='editors-title3' /></p></div>
        {!isReductorsLoading ? <MainEditor reductor={menagerReductor} currentLocale={currentLocale}/> : <p>загрузка</p>}
        
        {
          !isReductorsLoading
            ?  <div className="editors__board">
                <div className="editors__board-title title"><p><FormattedMessage id='editors-title4' /></p></div>
                <div className="editors__board-container">
                  {reductors.filter((item) => item["rank"] == "Редакционный совет").map(reductor => {
                    return <BoardEditor key={reductor["id"]} reductor={reductor} currentLocale={currentLocale}/>
                  })}
                </div>
              </div>

            : <p>загрузка</p>
        }
      </div>
    </div>
  );
};

export default Editorspage;