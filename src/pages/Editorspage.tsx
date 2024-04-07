import { useMemo } from 'react';
import BoardEditor from '../components/BoardEditor';
import MainEditor from '../components/MainEditor';
import ReductorService from '../api/ReductorService';
import { FormattedMessage } from 'react-intl';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';
import lastIssue from '../assets/issues/tom7n3.jpeg';


const Editorspage = () => {

  const {status: reductorsStatus, data: reductors, error} = useQuery({
    queryFn: async () => await ReductorService.getAllReductors(),
    queryKey: ["reductors"],
    staleTime: Infinity
  });

  const mainReductor = useMemo(() => reductors?.find(item => item["rank"] == "Главный редактор"), [reductors]);
  const subReductor = useMemo(() => reductors?.find(item => item["rank"] == "Заместитель главного редактора"), [reductors]);
  const menagerReductor = useMemo(() => reductors?.find(item => item["rank"] == "Управляющая редакцией"), [reductors]);

  if (error) {
    return <p>Произошла ошибка</p>
  }
  if (reductorsStatus !== 'success') {
    return 'загрузка';
  }

  return (
    <>
      <Helmet>
        <title>Ural Radio Engineering Journal</title>
        <meta name="description" content="Рецензируемый международный научно-технический журнал с открытым доступом, посвященный последним достижениям радиоэлектроники и связи."/>

        <meta property="og:title" content="Ural Radio Engineering Journal"/>
        <meta property="og:description" content="Рецензируемый международный научно-технический журнал с открытым доступом, посвященный последним достижениям радиоэлектроники и связи."/>
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="http://localhost:5173/catalog"/>
        <meta property="og:image" content={lastIssue}/>
      </Helmet>
      <div className="editors">
        <div className="editor__title title"><p><FormattedMessage id='editors-title1' /></p></div>
        <MainEditor reductor={mainReductor!}/>
        <div className="editor__title title"><p><FormattedMessage id='editors-title2' /></p></div>
        <MainEditor reductor={subReductor!}/>
        <div className="editor__title title"><p><FormattedMessage id='editors-title3' /></p></div>
        <MainEditor reductor={menagerReductor!}/>
        
        <div className="editors__board">
          <div className="editors__board-title title"><p><FormattedMessage id='editors-title4' /></p></div>
          <div className="editors__board-container">
            {reductors.filter((item) => item["rank"] == "Редакционный совет").map(reductor => {
               return <BoardEditor key={reductor["id"]} reductor={reductor}/>
            })}
          </div>
        </div>
      </div>
    </>
  );
};


export default Editorspage;