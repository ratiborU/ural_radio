import React, { useEffect, useState } from 'react';
import IssuseComponent from '../conponents/IssueComponent';
import IssuesService from '../api/IssuesService';
import { useFetching } from '../hooks/useFetching';

const Catalogpage = ({currentLocale}) => {
  const [issues, setIssues] = useState();


  const [fetchIssues, isIssuesLoading, issuesError] = useFetching( async () => {
    const issuesResponse = await IssuesService.getAllIssues();
    // console.log(issuesResponse);
    issuesResponse.sort((a, b) => a["title"]["Ru"] < b["title"]["Ru"] ? 1 : -1);
    setIssues(issuesResponse);
    console.log(issuesResponse);
  })

  useEffect(() => {
    fetchIssues();
  }, []);

  
  return (
    <>
      {isIssuesLoading 
        ? <p>загрузка</p>
        : <div className="catalog">
            {issues.map((item, id) => {
              return <IssuseComponent key={id} item={item} currentLocale={currentLocale}/>
            })}
          </div>
      }
    </>
  );
};

export default Catalogpage;