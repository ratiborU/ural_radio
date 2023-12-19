import React from 'react';
import image from "../assets/image 2.jpg"
import issues from '../api/IssuesApi';
import IssuseComponent from '../conponents/IssueComponent';

const Catalogpage = () => {
  return (
    <>
      
      <div className="catalog">
        {issues.map((item, id) => {
          return <IssuseComponent key={id} id={id}/>
        })}
      </div>

    </>
  );
};

export default Catalogpage;