// import { useState } from 'react';
import { Link } from 'react-router-dom';
import IssuesService from '../api/IssuesService';
import FileService from '../api/FileService';
import { FormattedMessage } from 'react-intl'
import imageStock from "../assets/issues/tom7n3.jpeg";

import { useQuery } from 'react-query';


const SideBar = () => {
  const {status: issueStatus, data: issue } = useQuery({
    queryFn: async () => await IssuesService.getLastIssue(),
    queryKey: ["issue"],
    staleTime: Infinity,
  });

  const {data: image} = useQuery({
    queryFn: async () => await FileService.getImageLinkById(issue?.coverPathId),
    queryKey: ["image", issue?.coverPathId],
    enabled: issueStatus === 'success',
    staleTime: Infinity
  });


  if (issueStatus !== "success") {
    return <></>;
  }

  return (
    <div className="sidebar">
      <div className="sidebar__image">
        <Link to={`/catalog/${issue?.id}`}>
          <img src={image ? imageStock : image} alt="#" />
        </Link>
      </div>
      <a href="https://www.akc.ru/itm/ural-radio-engineering-journal/" target='blank'>
        <button className="sidebar__button">
          <FormattedMessage id='sidebar__button' />
        </button>
      </a>
      
      <p className="sidebar__text">ISSN онлайн-версии:2588-0462</p>
      <p className="sidebar__text">ISSN печатной версии:2588-0454</p>
    </div>
  );
};

export default SideBar;