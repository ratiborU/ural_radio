// import { useEffect, useState } from 'react';
import IssuseComponent from '../conponents/IssueComponent';
import IssuesService from '../api/IssuesService';

import { useQuery} from 'react-query';

const Catalogpage = () => {
  const { data: issues, isLoading } = useQuery({
    queryFn: async () => await IssuesService.getAllIssues(),
    queryKey: ["issues"],
    staleTime: Infinity,
  });
  

  if (isLoading) {
    return <>Загрузка...</>
  }
  
  return (
    <div className="catalog">
      {issues?.map((issue, id) => {
        return <IssuseComponent key={id} issue={issue}/>
      })}
    </div>
  );
};

export default Catalogpage;