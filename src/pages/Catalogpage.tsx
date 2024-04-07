// import { useEffect, useState } from 'react';
import IssuseComponent from '../components/IssueComponent';
import IssuesService from '../api/IssuesService';
import {Helmet} from "react-helmet";
import lastIssue from '../assets/issues/tom7n3.jpeg';

import { useQuery} from 'react-query';

const Catalogpage = () => {
  const { data: issues, isLoading, error } = useQuery({
    queryFn: async () => await IssuesService.getAllIssues(),
    queryKey: ["issues"],
    staleTime: Infinity,
  });
  
  if (error) {
    return <p>Произошла ошибка</p>
  }
  if (isLoading) {
    return <>Загрузка...</>
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
      <div className="catalog">
        {issues?.map((issue, id) => {
          return <IssuseComponent key={id} issue={issue}/>
        })}
      </div>
    </>
    
  );
};

export default Catalogpage;