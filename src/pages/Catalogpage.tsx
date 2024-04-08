// import { useEffect, useState } from 'react';
import IssuseComponent from '../components/IssueComponent';
import IssuesService from '../api/IssuesService';
import HelmetComponent from '../components/HelmetComponent';

import { useQuery} from 'react-query';

const Catalogpage = () => {
  const { data: issues, isLoading, error } = useQuery({
    queryFn: async () => await IssuesService.getAllIssues(),
    queryKey: ["issues"],
    staleTime: Infinity,
  });
  
  if (error) {
    return (<>
      <HelmetComponent/>
      <p>Произошла ошибка</p>
    </>)
  }
  if (isLoading) {
    return <>Загрузка...</>
  }
  
  return (
    <>
      <HelmetComponent/>
      <div className="catalog">
        {issues?.map((issue, id) => {
          return <IssuseComponent key={id} issue={issue}/>
        })}
      </div>
    </>
    
  );
};

export default Catalogpage;